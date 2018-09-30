<template>
    <div class="all_content"  id="index">
        <div class="nav-bar">
            <nav>
                <router-link to="/index">
                    <img src="./assets/logo.png" height="60px" style="float:left;">
                    <img src="./assets/email.png" style="display:none">
                </router-link>
                <h3>&nbsp;</h3>
                <div style="float:right;" class="nav_show">
                     <ul>
                        <li class="navlink" @click="createApp">开发者控制台<div></div></li>
                        <router-link to="guide" ><li class="navlink">学习文档</li><div></div></router-link>
                    </ul>
                    <div class="login" v-if="userLoginShow">
                        <router-link to="/login" @click="pageInto">登录&nbsp;</router-link>|
                        <!-- <a @click="login">登录&nbsp;</a>  -->
                        <!-- <a @click="register">注册</a>  -->
                        <router-link to="/register">注册</router-link>
                        <!--  @click.native="openMsg" -->
                    </div>
                    <div class="login userPointer" v-else>
                            <span style="cursor:pointer;">{{userName}}</span>
                            <div class="user_msg" >
                                <ul style="margin:0;width:105.66px;z-index:1000;">
                                    <!-- <li><router-link to="/companyproof">企业认证平台</router-link></li> -->
                                    <!-- <li><router-link to="/companymaintain">企业维护</router-link></li> -->
                                    <router-link to="/personInfo"><li>用户信息</li></router-link>
                                    <!-- <li><router-link to="/myApp">我的App</router-link></li> -->
                                    <!-- <li><router-link to="/addAppuser">添加应用用户</router-link></li> -->
                                    <li @click="loginout">退出</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <!-- 响应式导航栏 -->
                <!-- <div class="navbar" @click="navbarShow">
                <span class="icon-bar" style="margin-top:0;"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </div>
                <ul class="menu" v-if="menuShow">
                    <router-link to="/index" class="navlink"><li>首页</li></router-link>
                    <li>开发平台</li>
                    <div class="line"></div>
                    <div class="login" v-if="userLoginShow">
                        <a @click="login">登录&nbsp;</a>|
                        <a @click="register">注册</a>
                    </div>
                    <div class="login" v-else>
                    <span>{{userName}}</span>
                    </div>
                </ul> -->
            </nav>
            <nav class="nav-content">
                <ul>
                    <router-link to="/index" class="navlink"><li class="first">首页</li><div></div></router-link>
                    <router-link to="/productInfo" class="navlink"><li>产品</li><div></div></router-link>
                    <router-link to="/scene" class="navlink"><li>解决方案</li><div></div></router-link>
                    <!-- <router-link to="/index" class="navlink"><li>首页</li><div v-if="lineAt==0" class="line"></div></router-link> -->
                    <div class="navlink" @click="goto('hardware')">
                        <li>工业智能硬件</li>
                        <!-- <div ></div>
                        <ul class="nav_hover">
                            <li>Edge Server</li>
                        </ul> -->
                    </div>
                    <div class="navlink">
                        <!-- @click="appScroll" -->
                        <li><router-link to >Marketplace</router-link> </li>
                        <!-- <div ></div> -->
                        <ul class="nav_hover">
                            <!-- <li @click="createApp">App 开发</li> -->
                            <router-link to="/appStore" ><li>应用市场</li></router-link>
                        </ul>
                    </div>
                    <div class="navlink">
                        <!-- <li @click="lessonScroll">开发者社区</li> -->
                        <a href="https://forum.leapai.com/forum.php?mod=forumdisplay&fid=2"><li>开发者社区</li></a>
                        <!-- <div ></div>
                        <ul class="nav_hover">
                            <li>微课</li>
                            <li>问答</li>
                            <li>应用场景</li>
                            <li>学习资料</li>
                            <li>沙龙活动</li>
                        </ul> -->
                    </div>
                    <!-- <div class="navlink" >
                        <li>工业App 创新大赛</li>
                        <ul class="nav_hover" >
                            <router-link to="/appStore" ><li>大赛 App 列表</li></router-link>
                            <router-link to="/popup"><li>赛事动态</li></router-link>
                            <div></div>
                        </ul>
                    </div> -->
                    <div class="navlink" ><li @click="openBigData">联想大数据</li></div>
                </ul>
            </nav>
        </div>
        <div>
          <!-- 注册 -->
          <div class="show_box" v-if="registerShow">
              <div>
                  <div class="close" @click="close"><span>x</span></div>
                  <div class="user_choose">
                      <span v-for="(item,index) in regiData" :key="index" @click="showUser(index)" :class="userIndex == index? 'active':''">{{item.user}}</span>
                  </div>
                  <!-- 个人用户注册 -->
                  <div class="list-show" v-show="userIndex==0">
                      <ul class="input_list">
                          <li> <label>用户名:</label><input type="text"></li>
                          <li> <label>注册邮箱:</label><input type="email"></li>
                          <li> <label>手机号码:</label> <input type="number"></li>
                          <li> <label>密码:</label><input type="password"></li>
                          <li> <label>确认密码:</label><input type="password"></li>
                      </ul>
                      <span class="register">立即注册</span>
                  </div>
                  <!-- 企业开发者注册 -->
                  <div class="list-show" v-show="userIndex==1">
                      <ul class="input_list">
                          <li> <label>用户名:</label><input type="text"></li>
                          <li> <label>注册邮箱:</label><input type="email"></li>
                          <li> <label>企业名称:</label><input type="text"></li>
                          <li> <label>所在行业:</label><input type="text"></li>
                          <li> <label>职务:</label><input type="text"></li>
                          <li> <label>手机号码:</label> <input type="number"></li>
                          <li> <label>密码:</label><input type="password"></li>
                          <li> <label>确认密码:</label><input type="password"></li>
                      </ul>
                      <span class="register">立即注册</span>
                  </div>
              </div>
          </div>
          <!-- 登陆 -->
          <!-- <div class="show_loginBox" v-if="loginShow">
              <div class="login_show">
                  <div class="close" id="closeLogin" @click="close"><span>x</span></div>
                  <h2>登陆</h2>
                  <ul class="input_list">
                      <li> <label>登陆账号:</label><input type="text" v-model="userAccount"></li>
                      <li> <label>密码:</label><input type="password" v-model="userPassword"></li>
                  </ul>
              </div>
          </div> -->
        </div>
        <router-view class="divHeight" ></router-view>
        <!-- v-bind:style="{ 'height': screenHeight + 'px'}" -->
        <footer class="page_footer">
          <div>
            <router-link style="float:left;margin-right:10px" to="/rule">法律条款</router-link>
            <span style="float:left;margin-right:10px">|</span>
            <a style="float:left;margin-right:10px" href="https://www.lenovo.com.cn/public/privacy.html" target="_blank">隐私保护</a>
            <span style="float:left;margin-right:10px">|</span>
            <span style="float:left;">津ICP备17010331号-1</span>
            <span>@2017-2018 Lenovo Capital & Incubator Group All Rights reserved.</span>
          </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      registerShow: false,
      loginShow: false,
      menuShow: false,
      lineAt: 0,
      timer: ""
      //   userIndex:'',
      //   userAccount:'',
      //   userPassword:'',
      //   regiData:[{user:'个人开发者'},
      //             {user:'企业开发者'}]
    };
  },
  computed: {
    userLoginShow() {
      return !this.$store.state.isLogin;
    },
    userName() {
      return this.$store.state.username;
    }
  },
  created() {},
  mounted() {
    this.usershow();
  },
  methods: {
    goto(path) {
      if (path) {
        console.log("Goto: " + path);
        this.$router.push(path);
      }
    },
    login() {
      this.loginShow = true;
    },
    loginout() {
      sessionStorage.removeItem("token");
      this.$store.commit("setToken", "");
      this.writeCookie("token", "", 90, "leapai.com");
      this.writeCookie("username", "", 90, "leapai.com");
      //this.$alert('退出成功');
      this.$store.commit("changeLoginState", false);
      this.$store.commit("setUserInfoCompleted", false);
      this.$store.commit("setUsername", "");
      //this.userLoginShow = true;
      this.$router.push("/index");
      this.$router.go(0);
    },
    usershow() {
      //用户信息展示
      let token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        this.$store.commit("setToken", decodeURIComponent(token));
        sessionStorage.setItem("token", decodeURIComponent(token));

        this.$ajax
          .get("v2/users/userinfo")
          .then(res => {
            this.writeCookie(
              "username",
              encodeURIComponent(res.data.result.username),
              90,
              "leapai.com"
            );
            this.$store.commit("changeLoginState", true);
            this.$store.commit("setUsername", res.data.result.username);
            //this.userLoginShow = false;

            if (res.data.result.email) {
              this.$store.commit("setUserInfoCompleted", true);
            }
          })
          .catch(err => {
            console.log("Get user info failed.");
          });
      }
    },
    register() {
      this.registerShow = true;
    },
    close() {
      this.loginShow = false;
      this.registerShow = false;
    },
    showUser(index) {
      this.userIndex = index;
    },
    pageInto() {
      //this.userLoginShow = false;
    },
    // 响应式导航栏设置
    navbarShow() {
      this.menuShow = !this.menuShow;
    },
    gyScroll(gd) {
      let m = document.getElementById(gd);
      if (m == null) return;
      let mou5Height = m.offsetTop;
      let current = 0;
      var timer = window.setInterval(() => {
        current = current + (mou5Height - current) / 24;
        window.scrollTo(0, current);
        if (current >= mou5Height - 1) {
          window.clearInterval(timer);
        }
      }, 5);
    },
    appScroll() {
      let m = document.getElementById("module2");
      if (m == null) return;
      const mou2Height = m.offsetTop;
      let current = 0;
      var timer = window.setInterval(() => {
        current = current + (mou2Height - current) / 24;
        window.scrollTo(0, current);
        if (current >= mou2Height - 1) {
          window.clearInterval(timer);
        }
      }, 5);
    },
    lessonScroll() {
      let m = document.getElementById("module4");
      if (m == null) return;
      const mou4Height = m.offsetTop;
      let current = 0;
      var timer = window.setInterval(() => {
        current = current + (mou4Height - current) / 24;
        window.scrollTo(0, current);
        if (current >= mou4Height - 1) {
          window.clearInterval(timer);
        }
      }, 5);
    },
    lenovoScroll() {
      let m = document.getElementById("module-3");
      if (m == null) return;
      const mou3Height = m.offsetTop;
      let current = 0;
      var timer = window.setInterval(() => {
        current = current + (mou3Height - current) / 24;
        window.scrollTo(0, current);
        if (current >= mou3Height - 1) {
          window.clearInterval(timer);
        }
      }, 5);
    },
    createApp() {
      if (this.$store.state.isUserInfoCompleted) {
        window.open("https://dev.leapai.com/step0", "_blank");
      } else {
        if (!this.$store.state.isLogin) {
          this.$router.push("/login");
        } else {
          this.$message({
            message: "创建/发布应用前请先完善个人/企业信息",
            duration: 4000
          });
          this.$router.push("/personInfo");
        }
      }
    },
    openMsg() {
      this.$alert("尚未开放注册，请联系客服，邮箱：zengfx1@lenovo.com", {
        confirmButtonText: "确定"
      });
    },
    openBigData() {
      window.open("https://bigdata.lenovo.com/", "_blank");
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "/index" || to.path == "/appStore") {
        this.lineAt = 0;
      } else if (to.path == "/api") {
        this.lineAt = 2;
      } else if (to.path.slice(0, 10) == "/userpage/") {
        this.lineAt = 1;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.divHeight {
  min-width: 1200px;
  min-height: 900px;
}
.all_content {
  color: #fff;
  font-size: 14px;
  /* min-width: 1200px;
    max-width: 1200px; */
  min-height: 900px;
  margin: auto;
}
/* @media screen and(min-width: 960px) {
  .nav_show{
      display: none;
  }
} */
nav {
  width: 1200px;
  line-height: 60px;
  margin: 0 auto;
  background: #1f1f1f;
}
.nav-bar {
  position: relative;
  width: 100%;
  z-index: 9;
  background: #1f1f1f;
  opacity: 0.9;
}
nav ul {
  position: relative;
  /* margin-left: 20px; */
  height: 100%;
  float: left;
}
nav ul li {
  padding: 0 10px;
  cursor: pointer;
}
nav ul li:hover {
  background: #353434;
  color: #39a3d4;
}
nav ul li:hover a {
  background: #353434;
  color: #39a3d4;
}
nav .logo {
  float: left;
  width: 130px;
  color: orange;
  /* color: red; */
  font-size: 26px;
  text-align: center;
}
nav h3 {
  display: inline-block;
  line-height: 55px;
  padding-left: 10px;
}
.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  background: #1f1f1f;
  position: relative;
}
.line {
  position: absolute;
  bottom: 0;
  left: 1;
  width: 55px;
  height: 3px;
  background: red;
}
.login {
  float: right;
  margin-right: 40px;
  /* display: none; */
}
.userPointer {
  position: relative;
  padding: 0 10px;
}
.userPointer:hover {
  background: #353434;
}

.userPointer:hover .user_msg {
  display: block;
}
.login a {
  color: #fff;
}
/* 这册窗口 */
.show_box,
.show_loginBox,
.show_amend {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}
.show_box > div,
.show_loginBox > div,
.show_amend > div {
  padding: 15px;
  position: fixed;
  top: 20%;
  left: 50%;
  width: 500px;
  transform: translateX(-50%);
  border-radius: 5px;
  background: #fff;
  color: #666;
}
.close {
  width: 100%;
  overflow: hidden;
}
.close span {
  cursor: pointer;
  float: right;
  font-size: 19px;
  color: #000;
}
.user_choose {
  text-align: center;
  border-bottom: 1px solid #0371a4;
  margin-bottom: 25px;
}
.user_choose span {
  display: inline-block;
  width: 45%;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
}
.input_list li {
  margin-bottom: 15px;
  overflow: hidden;
}
.list-show {
  padding: 20px;
}
.input_list label {
  display: inline-block;
  width: 20%;
  padding: 5px 10px;
  border: 1px solid #bfbfbf;
  border-right: none;
  border-radius: 5px 0 0 5px;
  float: left;
}
.input_list input {
  float: left;
  width: 337px;
  height: 30px;
  display: block;
  border: 1px solid #bfbfbf;
  color: #888;
  text-indent: 20px;
  outline: 0;
  font-weight: none;
  border-radius: 0 5px 5px 0;
}

.show_loginBox h2 {
  text-align: center;
  margin-bottom: 20px;
}
.login_show ul li {
  padding: 0 24px;
}
.login_show .register {
  width: 91%;
  margin: 0 auto;
}
.login {
  float: right;
  margin-right: 40px;
}
/*响应式导航栏设置*/
.navbar {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 12px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #ddd;
  cursor: pointer;
  display: none;
}
.icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #888;
  margin-top: 4px;
}
.menu {
  width: 100%;
  background: #1f1f1f;
  display: none;
}
.menu li {
  float: left;
}
.user_msg {
  position: absolute;
  top: 60px;
  left: 0;
  text-align: center;
  background: #1f1f1f;
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 940px) {
  nav h3 {
    padding: 0;
  }
}
/* @media screen and (max-width: 765px){
  nav{
    position: fixed;
    top:0;
    right:0;
    width: 100%;
    z-index: 99;
  }
  .container{
    margin-top: 60px;
  }
  .nav_show{
      display: none;
  }
  /* nav ul, nav>.login{
    display: none;
  } */
/* .input_list li{
    padding: 0 20px;
  }
  .navbar, .menu, .menu>.login{
    display: block;
  }
  .show_amend>div,.input_list input{
    width: inherit;
  }
  .show_loginBox>div, .show_box>div{
    width:74%;
  }
  .input_list label{
    width: 80px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
} */
.navlink {
  float: left;
  margin-right: 10px;
  position: relative;
}
.nav_hover {
  text-indent: 25px;
  position: absolute;
  background: #1f1f1f;
  opacity: 0.9;
  top: 60px;
  left: 0px;
  display: none;
  width: 150px;
  text-align: left;
}
.nav_hover li {
  background: #1f1f1f;
  padding-left: 1rem;
}
.navlink:hover .nav_hover {
  display: block;
}
/* 页脚 */

.page_footer {
  padding: 1.2rem;
  text-align: center;
  background: #353535;
  min-width: 1200px;
  position: relative;
  top: 0;
  left: 0;
}
.page_footer div {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  line-height: 40px;
}
.page_footer span:first-child {
  float: left;
}
.page_footer span:last-child {
  float: right;
}
/* js样式添加 */
.active {
  color: #ccc;
}
.red {
  color: red;
  text-align: center;
  margin-top: 10px;
  display: none;
}
</style>
