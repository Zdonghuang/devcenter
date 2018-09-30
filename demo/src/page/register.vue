<template>
    <div class="register_box registers">
        <div style="height:60px; background:#000"></div>
        <div>
            <h3>账号注册</h3>
            <div class="main_box" style="background:#f7f7f7;width:360px;">
                <div class="register_title">
                   <label><span class="red_point">*</span>手机号：</label>
                   <input type="text" v-model="user.phone" placeholder="请输入手机号">
               </div>
               <div class="register_title phone_code" >
                   <label>验证码：</label>
                   <input type="text" v-model="user.code" placeholder="请输入验证码">
                   <el-button type="primary" plain @click="getCode" v-show="!showCode">获取验证码</el-button>
                   <el-button type="primary" class="getcode" plain v-show="showCode">已发送{{count}}s</el-button>
               </div>
               <div class="register_title">
                   <label><span class="red_point">*</span>密码：</label>
                   <input type="password" v-model="user.password" placeholder="请输入密码">
               </div>
               <p style="margin-top: -20px;margin-bottom: 25px;">（6 - 16 个字符，区分大小写）</p>
               <div class="register_title">
                   <label><span class="red_point">*</span>确认密码：</label>
                   <input type="password" v-model="user.rpassword" placeholder="请确认密码">
               </div>
               <!-- <div class="register_title">
                   <label><span class="red_point">*</span>手机号：</label>
                   <input type="text">
               </div>
               <div class="code">
                    <div class="register_title">
                        <label>短信验证码：</label>
                        <input type="text">
                    </div>
                    <button>点击发送短信</button>
               </div>
               <div class="code">
                    <div class="register_title" style="float:left;">
                        <input type="text" placeholder="验证码">
                    </div>
                    <img src="https://www.leapai.com/member/images/imagecode/1530153979949" class="auth_code">
               </div> -->
               <el-checkbox style="padding-bottom:10px;" v-model="checked">同意
                 <a href="javascript:" @click="goOne()" class="hoverC"><b>注册协议</b></a>、
                 <a href="javascript:" @click="goTwo()"  class="hoverC"><b>平台开发者协议</b></a> 和
                 <a href="https://www.lenovo.com.cn/public/privacy.html" target="_blank"  class="hoverC"><b>隐私保护</b></a></el-checkbox>
               <el-button type="primary" @click="registerinfo()" v-if="checked" class="loginBtn">立即注册</el-button>
               <el-button type="primary" disabled v-else class="loginBtn">立即注册</el-button>
               <div v-show="showErr" style="margin-top:5px;float:left">
                   <span style="color:red">{{errMsg}}</span>
               </div>
               <div style="text-align:right;margin-top:0.5rem;margin-right:0.2rem">
                 <router-link to="/login" style="color:black;">登录</router-link>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      Lstatus: "",
      rc:false,
      user: {
        phone: "",
        code: "",
        password: "",
        rpassword: ""
      },
      count: "",
      showCode: false,
      timer: null,
      message: "",
      showErr: false,
      errMsg: "",
      checked:false
    };
  },
  mounted() {
    const heightBody = window.innerHeight - document.querySelector("nav").clientHeight - document.getElementsByClassName("page_footer")[0].clientHeight;
    document.getElementsByClassName("register_box")[0].style.height = heightBody + "px";
    this.show();
  },
  methods: {
    // 判断手机号
    regPhone(val) {
      if (!/^1[34578]\d{9}$/.test(val)) {
        return "";
      } else {
        return val;
      }
    },
    // 判断密码
    regPwd(val) {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z!@#$%^&*?\(\)]{6,16}$/.test(val)) {
        return "";
      } else {
        return val;
      }

      // return val.trim()
    },
    show(){
      this.user = JSON.parse(sessionStorage.getItem('user'))?JSON.parse(sessionStorage.getItem('user')):this.user;
    },
    goOne(){
      sessionStorage.setItem('user',JSON.stringify(this.user));
      return this.$router.push("/rule?one=true");
    },
    goTwo(){
      sessionStorage.setItem('user',JSON.stringify(this.user));
      return this.$router.push("/rule?two=false");
    },
    registerinfo() {
      sessionStorage.removeItem('user');
      let obj = {
        age: 0,
        email: "",
        fullname: "",
        id: 0,
        mobile: this.regPhone(this.user.phone),
        sex: 0,
        username: this.regPhone(this.user.phone),
        password: this.regPwd(this.user.password)
      };
      let json = JSON.stringify(obj);
      if (
        obj.mobile != "" &&
        this.user.code != "" &&
        obj.password != "" &&
        this.user.password == this.user.rpassword
      ) {
        this.$ajax
          .post("v2/users/signupwithtoken?code=" + this.user.code, json)
          .then(res => {
            if (res.data.status === 'ok') {
              this.showErr = false;
              this.$store.commit("setToken", res.data.result);
                sessionStorage.setItem("token", res.data.result);
                this.writeCookie(
                  "token",
                  encodeURIComponent(res.data.result),
                  90,
                  "leapai.com"
                );
                this.writeCookie(
                  "username",
                  encodeURIComponent(this.user.phone),
                  90,
                  "leapai.com"
                );
                this.$store.commit("changeLoginState", true);
                this.$store.commit("setUsername", this.user.phone);

                this.$ajax
                  .get("v2/users/userinfo")
                  .then(res => {
                    sessionStorage.setItem("userid", res.data.result.id);
                    if (res.data.result.email) {
                      this.$store.commit("setUserInfoCompleted", true);
                    } else {
                      this.$store.commit("setUserInfoCompleted", false);
                    }
                  })
                  .catch(err => {
                    console.log("Get user info failed.");
                  });

                this.$router.push("/");
            } else {
              switch (res.data.result) {
                case 10001:
                  this.errMsg = "用戶名已存在";
                  break;
                case 10002:
                  this.errMsg = "手机号已存在";
                  break;
                case 10003:
                  this.errMsg = "邮箱已存在";
                  break;
                case 10004:
                  this.errMsg = "用户名只能字母数字和下划线,不超过30个字符";
                  break;
                case 10005:
                  this.errMsg = "手机号不正确";
                  break;
                case 10006:
                  this.errMsg = "邮箱不正确";
                  break;
                case 10007:
                  this.errMsg = "用户没有权限";
                  break;
                case 10008:
                  this.errMsg = "验证码为空";
                  break;
                case 10009:
                  this.errMsg = "验证码不正确";
                  break;
                default:
                  this.errMsg = "注册失败";
              }
              this.showErr = true;
            }
          })
          .catch(err => {
            console.log("注册失败" + err);
            this.$alert("注册失败");
          });
      } else if (obj.mobile == "") {
        this.$message({
          message: "请输入正确的手机号",
          duration: 2000
        });
      } else if (this.user.code == "") {
        this.$message({
          message: "验证码不能为空",
          duration: 2000
        });
      } else if (obj.password == "") {
        this.$message({
          message: "请输入6-16位数字、字母、特殊字符组合的密码",
          duration: 2000
        });
      } else if (this.user.password != this.user.rpassword) {
        this.$message({
          message: "密码和确认密码不一致",
          duration: 2000
        });
      } else {
        this.$message({
          message: "请确认信息是否填写完整",
          duration: 2000
        });
      }
    },
    getCode() {
      if (this.regPhone(this.user.phone) != "") {
        this.code();
      } else {
        this.$message({
          message: "请先输入正确手机号",
          duration: 2000
        });
      }
    },
    code() {
      
      let obj = {
        mobile: this.user.phone
      };
      this.$ajax
        .post("v2/sms/sendidentitycode", obj)
        .then(res => {
          if (res.data == false) {
            this.$alert("短信验证码发送失败");
            this.rc = true;
            this.animation();
          }else{
            this.rc = false;
            this.animation();
          }
        })
        .catch(err => {
          this.rc = true;
          this.animation();
          if(navigator.onLine){
            this.$alert("短信验证码发送失败!");
          }else {
            this.$alert('请检查网络连接是否正常!');
          }
          
        });
    },
    animation(){
      const TIME_COUNT = 60;
      if (!this.timer && !this.rc) {
        this.count = TIME_COUNT;
        this.showCode = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.showCode = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>
<style>
.register_box {
  color: #333;
}
.register_box > div > h3 {
  color: #333;
  border-bottom: 3px solid #0371a4;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 40px;
}
.register_title {
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
}
.register_title label {
  width: 26%;
  font-weight: 500;
  display: inline-block;
}
.register_title input {
  width: 69%;
  outline: none;
  border: none;
  background: transparent;
}
.main_box .phone_code {
  padding: 0 0 0 10px;
}
.main_box .phone_code input {
  width: 42%;
}
.main_box .phone_code .el-button--primary {
  width: 29.7%;
  border-color: #ecf5ff;
}
.main_box .phone_code .el-button--primary.getcode {
  width: 26.7%;
  border-color: #ecf5ff;
}
.main_box .phone_code .el-button {
  margin-top: 0px;
  padding: 14px 0 10px;
}
.el-button + .el-button {
  /* margin: 0 !important; */
}
.code {
  overflow: hidden;
}
.code .register_title > input {
  width: 40%;
}
.code .register_title > label {
  width: inherit;
}
.code .register_title {
  float: left;
}
.code button {
  margin-left: 27px;
  padding: 11px;
  border-radius: 5px;
  cursor: pointer;
}
.el-message {
  top: 200px;
}

.el-checkbox__input.is-checked+.el-checkbox__label,.el-checkbox{
  color:  #333;
}
.el-checkbox__label .hoverC{
  color:  #333;
}
.el-checkbox__label .hoverC:hover{
  color: #909399;
}
.loginBtn{
  width: 100%;
}
</style>
