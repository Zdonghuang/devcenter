<template>
    <div class="register_box logins" >
        <div>
            <!--<h3>账号登录</h3>-->
            <div class="main_box intro">
                <h1>LeapAI.com</h1>
                <h3>提供一站式应用构建服务的互联网开放平台</h3>
            </div>
            <div class="main_box" style="width:360px;">
                <div class="ulogin">用户登录</div>
                <div class="login_title error" v-show="errorTip">
                    ! {{errorTips}}
               </div>
                <div class="login_title">
                   <!--<label>用户名/手机号：</label>-->
                   <input type="text" v-model="username" placeholder="请输入用户名/手机号">
               </div>
               <div class="login_title" >
                   <!--<label>密码：</label>-->
                   <input type="password" v-model="password" placeholder="请输入密码">
               </div>
               <div class="login_title picCode">
                   <!--<label>图片验证：</label>-->
                   <input type="text" v-model="vpicCode" placeholder="请输入验证码">
                   <img :src="vpic" alt="图片验证">
               </div>
               <div class="change" @click="changePic">
                  看不清，换一张
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
               <el-button type="primary" @click="loginIndex" class="loginBtn">登录</el-button>
               <div style="text-align:left;margin-top:0.5rem;justify-content:space-between;display:flex">
                 <router-link to="/resetPwd" style="color:black;">重置密码</router-link>
                 <router-link to @click.native="openMsg" style="color:black;">注册</router-link>
               </div>
               <div v-show="showErr" style="margin-top:5px;">
                   <span style="color:red">{{errMsg}}</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      status: false,
      username: "",
      password: "",
      showErr: false,
      errMsg: "登录失败",
      vpic: "",
      vpicClientId: 0,
      vpicCode: "",
      errorTip: false,
      errorTips: "请确认信息是否填写完整"
    };
  },
  mounted() {
    this.showErr = false;
    this.changePic();
    
    // this.userinfo();
    //   document.getElementsByClassName('el-message')[0].style.top = '100px';
  },
  created() {},
  computed: {},
  methods: {
    createGUID() {
      const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };

      return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
    },
    // 判断密码
    regPwd(val) {
      // if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val)) {
      //   return "";
      // } else {
      //   return val;
      // }

      return val.trim()
    },
    // userinfo() {
    //   let _this = this;
    //   _this.$ajax.get("/v2/users/userinfo").then(res => {
    //     localStorage.setItem("userid", res.data.result.id);
    //   });
    // },
    changePic() {
      var clientId = localStorage.getItem("clientId");
      if (!clientId) {
        clientId = this.createGUID();
        localStorage.setItem("clientId", clientId);
      }

      this.vpicClientId = clientId;
      var seconds = Date.now();
      this.vpic =
        BASE_URL +
        "v2/imagesecurity/securityimagebytes?clientid=" +
        this.vpicClientId +
        "&time=" +
        seconds;
    },
    loginIndex() {
      let obj = JSON.stringify({
        username: this.username,
        password: this.password,
        clientid: this.vpicClientId,
        vcode: this.vpicCode
      });
      if (
        this.username != "" &&
        this.regPwd(this.password) != "" &&
        this.vpicCode != ""
      ) {
        this.errorTip = false;
        this.$ajax
          .post("login", obj)
          .then(res => {
            if (res.status == 200) {
              if (res.headers.authorization) {
                this.$store.commit("setToken", res.headers.authorization);
                sessionStorage.setItem("token", res.headers.authorization);
                this.writeCookie(
                  "token",
                  encodeURIComponent(res.headers.authorization),
                  90,
                  "leapai.com"
                );
                this.writeCookie(
                  "username",
                  encodeURIComponent(this.username),
                  90,
                  "leapai.com"
                );
                this.$store.commit("changeLoginState", true);
                this.$store.commit("setUsername", this.username);

                this.showErr = false;

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
                    // console.log("Get user info failed.");
                  });

                if(sessionStorage.getItem('from')){
                  this.$router.push(`${sessionStorage.getItem('from')}`);
                }else{
                  this.$router.push('/index');
                }
              } else {
                this.changePic();
                switch (res.data) {
                  case 10010:
                    this.errMsg = "登陆失败次数超过5次，请10分钟后再试";
                    break;
                  case 10011:
                    this.errMsg = "用户不存在";
                    break;
                  case 10012:
                    this.errMsg = "用户名或密码不正确";
                    break;
                  case 10014:
                    this.errMsg = "图片验证码不正确";
                    break;
                  default:
                    this.errMsg = "登录失败";
                }
                this.showErr = true;
              }
            } else {
              this.errMsg = "登录失败";
              this.showErr = true;
            }
          })
          .catch(err => {
            this.errMsg = "登录失败";
            this.showErr = true;
          });
      } else if (this.username == "") {
        this.errorTip = true;
        this.errorTips = "用户名/手机号不能为空";
      } else if (this.password.trim() == "") {
        this.errorTip = true;
        this.errorTips = "请输入正确的密码(6~16个字符)";
      } else if (this.vpicCode == "") {
        this.errorTip = true;
        this.errorTips = "验证码不能为空";
      } else {
        this.errorTip = true;
        this.errorTips = "请确认信息是否填写完整)";
      }
    },
    gotoIndex() {
      this.$router.push("/index");
    },
    openMsg() {
      this.$router.push("/register");
      /*
      this.$alert("尚未开放注册，请联系客服，邮箱：zengfx1@lenovo.com", {
        confirmButtonText: "确定"
      });*/
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to);
      // console.log(from);
    }
  }
};
</script>
<style>
.logins {
  background-image: url("../static/homeheadbk3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
}
.logins > div {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.logins .main_box {
  position: absolute;
  top: 130px;
  right: 35px;
  padding: 20px 40px 40px 40px;
  background-color: #fff;
}
.logins .login_box {
  color: #333;
}
.logins .login_box > div > h3 {
  color: #333;
  border-bottom: 3px solid #0371a4;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 40px;
}
.logins .login_title {
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
}
.logins .login_title label {
  width: 32%;
  font-weight: 500;
  display: inline-block;
}
.logins .login_title input {
  width: 62%;
  outline: none;
  border: none;
  background: transparent;
}
.logins .error {
  color: red;
  border: 1px solid #ff934c;
  background-color: #fefcee;
  margin-bottom: 20px;
  padding: 5px;
  padding-left: 10px;
}
.logins .picCode {
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin-bottom: 5px;
}
.logins .picCode > img {
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
}
.logins .change {
  text-align: right;
  margin-bottom: 20px;
  cursor: pointer;
}
.logins .main_box .phone_code {
  padding: 0 0 0 10px;
}
.logins .main_box .phone_code input {
  width: 42%;
}
.logins .main_box .phone_code .el-button--primary {
  width: 100%;
  border-color: #ecf5ff;
}
.logins .main_box .phone_code .el-button {
  padding: 12px 0;
}
.logins .el-button + .el-button {
  margin: 0 !important;
}
.logins .code {
  overflow: hidden;
}
.logins .code .login_title > input {
  width: 40%;
}
.logins .code .login_title > label {
  width: inherit;
}
.logins .code .login_title {
  float: left;
}
.logins .code button {
  margin-left: 27px;
  padding: 11px;
  border-radius: 5px;
  cursor: pointer;
}
.logins .ulogin {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  margin: 0 auto 20px;
}
.logins .intro {
  position: absolute;
  top: 130px;
  left: 0px;
  margin: 0;
  height: 320px;
  width: 600px;
  background-color: transparent;
  color: #fff;
  text-align: center;
}
.logins .intro > h1 {
  margin-top: 80px;
  font-size: 3.5rem;
}
.logins .intro > h3 {
  margin-top: 25px;
}
</style>
