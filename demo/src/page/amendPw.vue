<template>
    <div class="register_box">
        <div style="height:60px; background:#000"></div>
        <div>
            <h3>修改密码</h3>
            <div class="main_box" style="background:#f7f7f7;width:360px;">
                <div class="register_title">
                   <label><span class="red_point">*</span>旧密码:</label>
                   <input type="password" v-model="oldpassword" placeholder="请输入旧密码">
                </div>
                <div class="register_title">
                   <label><span class="red_point">*</span>新密码:</label>
                   <input type="password" v-model="newpassword" placeholder="请输入新密码">
                </div>
                <div class="register_title">
                   <label><span class="red_point">*</span>重复密码:</label>
                   <input type="password" v-model="REnewpassword" placeholder="请再次输入新密码">
                </div>
                <div class="register" @click="password">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "amendPw",
  data() {
    return {
      newpassword: "",
      oldpassword: "",
      REnewpassword: ""
    };
  },
  mounted() {
    const heightBody =
      window.innerHeight -
      document.querySelector("nav").clientHeight -
      document.getElementsByClassName("page_footer")[0].clientHeight;
    document.getElementsByClassName("divHeight")[0].style.height =
      heightBody + "px";
  },
  methods: {
    // 判断密码
    regPwd(val) {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val)) {
        return "";
      } else {
        return val;
      }
    },
    goLogin() {},
    password() {
      let _this = this;
      let obj = {
        newPwd: this.regPwd(this.newpassword),
        oldPwd: this.regPwd(this.oldpassword),
        userId: sessionStorage.getItem("userid")
      };
      let json = JSON.stringify(obj);
      if (
        obj.newPwd != "" &&
        obj.oldPwd != "" &&
        this.newpassword == this.REnewpassword
      ) {
        // console.log("json", json);
        _this.$ajax
          .post("/v2/users/updatepwd", json)
          .then(res => {
            if (res.data.status == "error") {
              this.$message({
                message: "原始密码错误",
                duration: 2000
              });
            } else {
              this.$message({
                message: "修改密码成功，马上跳转到登录页面……",
                duration: 2000,
                type: "success"
              });
              //返回登录页
              setTimeout(() => {
                //this.userLoginShow = true;
                sessionStorage.removeItem("token");
                this.$store.commit("setToken", "");
                this.writeCookie("token", "", 90, "leapai.com");
                this.writeCookie("username", "", 90, "leapai.com");
                //this.$alert('退出成功');
                this.$store.commit("changeLoginState", false);
                this.$store.commit("setUserInfoCompleted", false);
                this.$store.commit("setUsername", "");
                this.$router.push("/login");
                // this.$router.go(0);
              }, 2000);
            }
          })
          .catch(err => {
            console.log("err= " + err);
            this.$alert("网页提交失败");
          });
      } else if (obj.newPwd == "" || obj.oldPwd == "") {
        this.$message({
          message: "请输入6~16个字符的旧/新密码",
          duration: 2000
        });
      } else if (this.newpassword != this.REnewpassword) {
        this.$message({
          message: "两次输入密码不一致，请重新输入",
          duration: 2000
        });
      }
    }
  }
};
</script>
<style>
</style>

