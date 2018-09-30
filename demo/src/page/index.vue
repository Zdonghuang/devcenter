<template>
<el-container>
  <el-main class="container">
      <swiper :options="bannerSwiper" style="height:100%;">
        <swiper-slide style="background: url(../../static/homeheadbk3.jpg) no-repeat">
            <div class="title" >
                <p class="btitle">LeapAI.com</p>
                <p class="subtitle">提供一站式应用构建服务的互联网开发平台</p>
                <div class="app_title" style="border-bottom-style:none;pointer-events:all;">
                    <el-button class="createbtn" @click="createApp()">创建应用</el-button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide style="background: url(../../static/homeheadbk2.jpg) no-repeat 100% 100%;">
            <div class="title" >
                <p class="btitle">工业APP创新应用大赛火热报名中</p>
                <div class="app_title" style="border-bottom-style:none;pointer-events:all;">
                    <el-button class="createbtn" @click="goto(btngo)">立即报名</el-button>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination s" slot="pagination"></div>
      </swiper>

        <!-- banner图片底部icon -->
        <div class="conte_box">
            <ul>
                <li v-for="(item,index) in imgJson" :key="index" @click="goto(item.goto)">
                    <img :src="item.img" alt="" width="50" height="50">
                    <p>{{item.info}}</p>
                </li>
            </ul>
        </div>
  </el-main>
    <el-main class="module-2 module_app" id="module2">
        <h2>提供一站式应用构建服务的连接平台</h2>
        <div class="feature">
            <div>
                <div class="left brightness">
                    <img src="../../static/dev_slices/pic1.png" alt="">
                </div>
                <div class="right">
                    <p>敏捷</p>
                    <div>高效的一站式应用开发体验，让开发者能快速响应业务需求变化</div>
                </div>
            </div>
            <div>
                 <div class="left brightness">
                    <img src="../../static/dev_slices/pic2.png" alt="">
                </div>
                <div class="right">
                    <p>开放</p>
                    <div>开放的微服务架构和RestAPI集成能力，为应用提供无限扩展可能</div>
                </div>
            </div>
            <div>
                 <div class="left brightness">
                    <img src="../../static/dev_slices/pic3.png" alt="">
                </div>
                <div class="right">
                    <p>智能</p>
                    <div>LeapAI云端联动, 赋予硬件智慧能力, 由点及面, 创造无限应用可能</div>
                </div>
            </div>
        </div>
        <el-row>
            <el-col :span="7">
                <h2><img src="../../static/dev_slices/组 6@3x.png" alt="" width="165" height="165"></h2>
                <h3>系统功能</h3>
                <div class="grid-content bg-purple">
                    <p>应用开发</p>
                    <p>应用部署</p>
                    <p>用户中心</p>
                    <p>应用用户管理</p>
                    <p>应用手机登陆</p>
                    <p>Marketplace</p>
                </div>
            </el-col>
            <el-col :span="7">
                <h2><img src="../../static/dev_slices/组 61@3x.png" alt="" width="165" height="165"></h2>
                <h3>基础服务</h3>
                <div class="grid-content bg-purple">
                    <p>SaaS 应用框架</p>
                    <p>智能 API 网关</p>
                    <p>实时数据库</p>
                    <p>统一消息队列</p>
                    <p>通用 API 代理</p>
                    <p>工业智能硬件</p>
                </div>
            </el-col>
            <el-col :span="7">
                <h2><img src="../../static/dev_slices/组 62@3x.png" alt="" width="165" height="165"></h2>
                <h3>扩展能力</h3>
                <div class="grid-content bg-purple">
                    <p>API 沙箱</p>
                    <p>FlexBroker</p>
                    <p>Restful API 接入</p>
                    <p>公有云资源</p>
                    <p>容器服务</p>
                    <p>订制硬件</p>
                </div>
            </el-col>
        </el-row>
    </el-main>
    <el-main class="module-5" id="module5">
        <div>
            <h2 style="color:black">开源工业智能硬件</h2>
            <div>
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/1.png" alt=""></div>
                        <p class="ptitle">联想工业智能开发板_标准版</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>TI Sitara AM5708异构多核处理器</p>
                            <p>1GB DDR3L 1333高速内存</p>
                            <p>TF卡扩展存储</p>
                            <p>1个千兆以太网口</p>
                            <p>工业接口</p>
                            <p class="border" @click="goto('hardwareDetail')">查看详情</p>
                        </div>
                    </div>
                    <!-- <button @click="goto('hardwareDetail')">查看详情</button> -->
                </div>
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/2.png" alt=""></div>
                        <p class="ptitle">联想工业智能开发板_专业版</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>TI Sitara AM5708异构多核处理器</p>
                            <p>1GB DDR3L 1333高速内存</p>
                            <p>8GB eMMC高速存储</p>
                            <p>2个千兆以太网口</p>
                            <p>工业接口</p>
                            <p class="border" @click="goto('hardwareDetail2')">查看详情</p>
                        </div>
                    </div>
                    <!-- <button @click="goto('hardwareDetail2')">查看详情</button> -->
                </div>
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/3.png" alt=""></div>
                        <p class="ptitle">联想工业智能开发板_超能版</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>TI Sitara AM5748异构多核处理器</p>
                            <p>2GB DDR3L 1333高速内存</p>
                            <p>16GB eMMC高速存储</p>
                            <p>2个千兆以太网口</p>
                            <p>工业接口</p>
                            <p class="border" @click="goto('hardwareDetail3')">查看详情</p>
                        </div>
                    </div>
                    <!-- <button @click="goto('hardwareDetail3')">查看详情</button> -->
                </div>
            </div>
            <div class="btm">
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/4.png" alt=""></div>
                        <p class="ptitle" id="ptitle">联想工业边缘智能网关</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>均衡低功耗ARM/X86处理器</p>
                            <p>无风扇架构, 适用各种现场</p>
                            <p>丰富配置可选择</p>
                            <p>千兆以太网口,数字显示接口, 工业接口均可选配</p>
                            <p class="border" @click="goto('hardwareDetail4')">查看详情</p>
                        </div>
                    </div>
                    <!-- <button @click="goto('hardwareDetail4')">查看详情</button> -->
                </div>
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/5.png" alt=""></div>
                        <p class="ptitle">联想工业边缘智能服务器</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>高性能X86/ARM处理器可选</p>
                            <p>宽温支持, 工业适配</p>
                            <p>丰富配置可选择</p>
                            <p>PCIE接口功能扩展卡, 按需定制</p>
                            <p class="border" @click="goto('hardwareDetail5')">查看详情</p>
                        </div>
                    </div>
                    <!-- <button @click="goto('hardwareDetail5')">查看详情</button> -->
                </div>
                <div class="hard_img">
                    <div>
                        <div class="imgTitle"><img src="../../static/dev_slices/6.png" alt=""></div>
                        <p class="ptitle">联想工业边缘智能网关_定制版</p>
                        <p class="blueline"></p>
                        <div class="hardwareContent">
                            <p>X86/ARM处理器按需选择</p>
                            <p>外观,结构,按需定制</p>
                            <p>输入输出接口按需定制</p>
                            <p class="border" @click="goto('hardwareDetail6')">查看详情</p>
                        </div>
                        <p></p>
                    </div>
                    <!-- <button @click="goto('hardwareDetail6')">查看详情</button> -->
                </div>
            </div>
            <el-button class="more"  @click="goto('/hardware')">查看更多</el-button>
        </div>
  </el-main>
  <div class="solution_box">
    <div class="solution" id="solution">
        <h2>经典案例分析</h2>
        <div class="s1">
            <div>
                <div class="case_boxs">
                  <img src="../../static/dev_slices/parkx.png" alt="">
                  <span class="striping"></span>
                  <p >公园景区客流监控</p>
                  <p class="case_text">
                    当公共场所或收费场所出现人流拥堵时，极易发生推搡和踩踏事件，很多不可控制的行为因为场所的安保、收费人员...
                  </p>
                  <router-link to="/case1" class="link">查看详情</router-link>
                </div>
            </div>
        </div>
        <div class="s2">
            <div>
              <div class="case_boxs">
                <img src="../../static/dev_slices/framz.png" alt="">
                <span class="striping"></span>
                <p style="cursor:pointer;">智能温室大棚监控</p>
                <p class="case_text">
                  温室大棚内温度、湿度、光照强弱以及土壤的温度和含水量等因素，对温室的作物生长起着关键性作用。对于温...
                </p>
                <router-link to="/case2" class="link">查看详情</router-link>
              </div>
            </div>
        </div>
        <div class="s3">
            <div>
              <div class="case_boxs">
                <img src="../../static/dev_slices/pm2.5s.png" alt="">
                <span class="striping"></span>
                <p >PM2.5在线监测分析平台</p>
                <p  class="case_text">
                  空气质量（air quality）的好坏反映了空气污染程度，它是依据空气中污染物浓度的高低来...
                </p>
                <router-link to="/case3" class="link">查看详情</router-link>
              </div>
            </div>
        </div>
        <div class="s4">
            <div>
              <div class="case_boxs">
                <img src="../../static/dev_slices/machineh.png" alt="">
                <span class="striping"></span>
                <p >云终端温度控制系统</p>
                <p class="case_text">
                  许多工业重点设备设施在运行一段时间后部件就会发热，部件长时间处在发热状态，容易导致设备出现故障，影响正常业...
                </p>
                <router-link to="/case4" class="link">查看详情</router-link>
              </div>
            </div>
        </div>
        <div class="s5">
            <div>
              <div  class="case_boxs">
                <img src="../../static/dev_slices/lightz.png" alt="">
                <span class="striping"></span>
                <p>智能预测性维护</p>
                <p  class="case_text">
                  随着物联网技术的创新和发展，工程制造设备变得更加高效与智能，但设备本身维护工作却仍面临巨大挑战。维护不...
                </p>
                <router-link to="/case5" class="link">查看详情</router-link>
              </div>
            </div>
        </div>
    </div>
  </div>
  <el-main class="module-4" id="module4">
    <h2>精品微课分享，学习交流的开发者社区</h2>
    <div class="pater_box">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img src="../../static/dev_slices/49@1x.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../../static/dev_slices/49@2x.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../../static/dev_slices/49@3x.jpg" alt="">
            </swiper-slide>
        </swiper>
        <div class="textone">
          <a class="pater_title" href="http://forum.leapai.com/forum.php?mod=viewthread&tid=32&extra=page%3D1?mod=viewthread&tid=32&extra=page%3D1" target="_blank">
            <span>【进版必看】</span>
            <span>FlexBroker创新方式 LeapAI提供工业App开发解决方案</span>
          </a>
          <a  class="pater_title" href="https://forum.leapai.com/forum.php?mod=viewthread&tid=33&extra=page%3D1?mod=viewthread&tid=33&extra=page%3D1" target="_blank">
            <span>【案例教程】</span>
            <span>LeapAI应用实操 如何搭建智能预测性维护系统模型</span>
          </a>
        </div>
        <div class="texttwo">
          <a  class="pater_title" href="http://forum.leapai.com/forum.php?mod=viewthread&tid=28&extra=page%3D1?mod=viewthread&tid=28&extra=page%3D1" target="_blank">
            <span>【常见问题】</span>
            <span>当编译nodejs时候 nmp连接太慢怎么办？</span>
          </a>
          <a class="pater_title" href="http://forum.leapai.com/forum.php?mod=viewthread&tid=27&extra=page%3D1?mod=viewthread&tid=27&extra=page%3D1" target="_blank">
            <span>【常见问题】</span>
            <span>Leaplate应用模版如何设置数据库连接？</span>
          </a>
        </div>
        <div class="textthree">
          <a  class="pater_title" href="https://forum.leapai.com/forum.php?mod=viewthread&tid=26&extra=page%3D1?mod=viewthread&tid=26&extra=page%3D1" target="_blank">
            <span>【常见问题】</span>
            <span>开发平台部署docker-compose不可用的解决办法</span>
          </a>
          <a  class="pater_title" href="https://forum.leapai.com/forum.php?mod=viewthread&tid=25&extra=page%3D1?mod=viewthread&tid=25&extra=page%3D1" target="_blank">
            <span>【常见问题】</span>
            <span>LeapAI开发平台部署应用程序可用技术推荐</span>
          </a>
        </div>
    </div>
    <img class="leftImg" src="../../static/dev_slices/left13@2x.png" :tabindex="null">
    <img class="rightImg" src="../../static/dev_slices/right13 @2x.png" :tabindex="null">
  </el-main>
  <el-main class="module-3" id="module-3">
      <h2>联想大数据产品及解决方案</h2>
      <br/>
      <h3>国内领先的大数据产品和服务，智能的行业解决方案，助力企业转型跨越</h3>
      <el-button plain @click="openBigData">了解详情</el-button>
      <!-- <div id="links" style="font-size:20px;">
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('https://www.lenovo.com.cn/','_blank')" target="_blank">联想官网</a>
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('http://capital.lenovo.com/default.html','_blank')" target="_blank">联想创投</a>
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('https://bigdata.lenovo.com/lenovoBigData.html','_blank')" target="_blank">联想大数据</a>
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('http://research.lenovo.com/webapp/view/index.html','_blank')" target="_blank">联想研究院</a>
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('http://www.lenovohit.com/','_blank')" target="_blank">联想智慧医疗</a>
        <a style="margin-right:16px" href="javascript:void(0);" onclick="window.open('https://www.baiying.cn/','_blank')" target="_blank">联想百应平台</a>
      </div> -->
  </el-main>
  <el-footer style="overflow:hidden;">
     <el-main class="footer_box">
        <div>
            <h2 class="footer-title">关于我们</h2>
            <a class="footer-a" href="https://bigdata.lenovo.com/lenovoBigData.html">联想大数据</a>
            <a class="footer-a" href="https://bigdata.lenovo.com/contactUs.html">联系我们</a>
        </div>
        <div>
            <h2 class="footer-title">合作交流</h2>
            <p>
                <span class="footer-a" href="javascript:;">
                   电话 86-18101021725
                </span>
            </p>
            <p>
                <span class="footer-a" href="javascript:;">
                   微信 gh_453625423b0a
                </span>
            </p>
            <p>
                <span class="footer-a" href="javascript:;">
                   邮箱 leapai@lenovo.com
                </span>
            </p>
        </div>
        <div style="width:25%">
            <h2 class="footer-title">技术支持</h2>
            <p>
                <span class="footer-a" href="javascript:;">
                   邮箱 zengfx1@lenovo.com
                </span>
            </p>
            <p>
                <span class="footer-a" href="javascript:;">
                   QQ技术服务群 821957444
                </span>
            </p>
        </div>
        <div>
            <h2 class="footer-title addqq">关注微信公众号</h2>
            <img class="footer-img" src="../../static/dev_slices/wx.jpg" style="width:138px;">
        </div>
        <div>
            <h2 class="footer-title addqq">加入微信技术服务群</h2>
            <img class="footer-img" src="../../static/dev_slices/wx2.jpg" style="width:138px;">
        </div>
     </el-main>
  </el-footer>
  <a href="#index" class="backTop" v-if="showTop"><img src="../../static/dev_slices/top0@2x.png" alt=""></a>
</el-container>
</template>
<script>
import img from "../imgs.json";
export default {
  name: "index",
  data() {
    return {
      btngo: "popup",
      imgs: "",
      showindex: false,
      showTop: false,
      animation: true,
      next:0,
      swiperOption: {
        width: 359.5,
        centeredSlides: true,
        autoplay: true,
        loop: true,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".leftImg",
          prevEl: ".rightImg"
        }
      },
      // 轮播图
      bannerSwiper: {
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction:false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        allowTouchMove:false,
        observer: true,
        observeParents: true,
      },
      imgJson: [
        {
          img: "../../static/dev_slices/conte1@3x.png",
          info: "免费试用",
          goto: "freeCreate"
        },
        {
          img: "../../static/dev_slices/conte2@3x.png",
          info: "客户案例",
          goto: "/customercase"
        },
        {
          img: "../../static/dev_slices/conte3@3x.png",
          info: "新手指南",
          goto: "quickStart"
        },
        {
          img: "../../static/dev_slices/conte4@3x.png",
          info: "最新资讯",
          goto: "news"
        }
      ]
    };
  },
  created() {
    this.imgs = img.data;
  },
  computed: {},
  mounted() {
    this.getinfo();
    window.addEventListener("scroll", this.showTopimg);
  },
  methods: {
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 0);
    },
    async getinfo(){
      if(this.$store.state.isUserInfoCompleted){
        const {data:res} = await this.$ajax.get('/v2/users/userinfo');
        if(res.result.flag !== '1'){
          this.next = 0;
          sessionStorage.setItem('email',res.result.email);
        }else{
          this.next = 1;
        }
      }
      
    },
    createApp() {
      if (this.$store.state.isUserInfoCompleted) {
        if(!this.next){
        this.$alert('创建应用前,请激活您的邮箱！！！');
        this.$router.push('/checkemail');
        } else {
          window.open("https://dev.leapai.com/step0", "_blank");
        }
      } else {
        if (!this.$store.state.isLogin) {
          this.$router.push("/login");
        } else{
          this.$message({
            message: "创建/发布应用前请先完善个人/企业信息",
            duration: 4000
          });
          this.$router.push("/personInfo");
        }
      }
    },
    openBigData() {
      window.open("https://bigdata.lenovo.com/", "_blank");
    },
    publishApp() {
      if (this.$store.state.isUserInfoCompleted) {
        window.open("https://dev.leapai.com/myapp", "_blank");
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
    showTopimg() {
      if (document.documentElement.scrollTop >= 150) {
        this.showTop = true;
      } else {
        this.showTop = false;
      }
    },
    goto(path) {
      if (path) {
        if (path == "freeCreate") {
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
        } else {
          this.$router.push(path);
        }
      }
    }
  }
};
</script>
<style>
body {
  min-width: 940px; /* Suppose you want minimum width of 1000px */
  width: auto !important; /* Firefox will set width as auto */
  width: 940px; /* As IE6 ignores !important it will set width as 1000px; */
}
.imgbox {
  background-size: 100% 100%;
}
.imgbox span {
  display: inline-block;
  width: 32%;
  height: 250px;
  border: 1px solid #000;
}
.container {
  position: relative;
  height: 595px;
  background-image: none !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  transition: 0.5s;
}
.container > .swiper-container {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.container .prev,
.next {
  position: absolute;
  top: 34%;
  outline: none;
  z-index: 3;
}
.container .prev {
  left: 180px;
  cursor: pointer;
}
.container .next {
  right: 180px;
  cursor: pointer;
}
.conte_box {
  width: 100%;
  background: #1f1f1fa8;
  position: absolute;
  bottom: 0px;
  z-index: 2;
}
.conte_box ul {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
.conte_box ul li {
  float: left;
  margin: 24px 0 32px 0;
  border-right: 1px solid #fff;
  padding: 0 121px;
  position: relative;
}
.conte_box ul li:last-child {
  border-right: none;
}
.conte_box ul li img {
  transition: all 0.3s ease-in-out;
  margin-bottom: 16px;
}
.conte_box ul li p {
  /* color: #666; */
  color: #fff;
  font-weight: 500;
}
.conte_box ul li:hover {
  cursor: pointer;
}
.conte_box ul li:hover img {
  transform: translateY(-5px);
}
.is-plain {
  margin-top: 20px;
}
.app_title {
  margin-top: 2rem;
}
.app_title .el-button {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-color: #fff;
  text-shadow: -2px 4px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-top: 10px;
}
.more {
  background: #39a3d4;
  margin-top: 34px;
  color: #fff;
}
.app_title .is-plain:hover a {
  color: #409eff !important;
  text-shadow: none !important;
}
.title h1 {
  text-shadow: -2px 4px 5px rgba(0, 0, 0, 0.5);
}
.title {
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 800px;
}
.title p {
  margin-top: 0.8rem;
  font-size: 1.2rem;
  font-weight: 400;
  text-shadow: -2px 4px 5px rgba(0, 0, 0, 0.5);
}
.arrows {
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  transform: rotate(90deg);
  color: #000;
  cursor: pointer;
}
.app_title .el-button.createbtn:hover {
  background: #343434;
  z-index: 999;
  pointer-events: all;
}
.createbtn {
  z-index: 1000 !important;
}

.module-1 {
  background: #333;
  color: #17bebb;
  padding: 3rem 0;
  text-align: center;
  overflow: hidden;
}
.module-1 > div > div {
  background: #404040;
  padding: 1.6rem;
  margin: 1.4rem;
}
.module-1 h2 i,
.module-2 h2 i {
  font-size: 2.6rem;
}
.module-1 h3,
.module-2 h3 {
  margin: 2rem 0 1rem;
}
.module-2 h2 {
  margin-top: 68px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.module-2 h3 {
  width: 200px;
  height: 18px;
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  margin: 0 auto;
}
.module-2 .grid-content {
  margin-top: 44px;
}
.module-2 .grid-content p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  text-align: left;
  padding-left: 116px;
  box-sizing: border-box;
}
.module-2 {
  height: 881px;
  text-align: center;
  background-color: rgba(204, 204, 204, 0.3);
  padding: 1rem 0 !important;
}
.module-2 > div > div {
  padding: 0 1.3rem;
  padding-bottom: 1.3rem;
  margin: 1.5rem 1.5rem 0 1rem;
}
.module-2 .el-col {
  transition: all 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: box-shadow, background-color;
}
.module-2 .el-col:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.18),
    0 -3px 20px rgba(0, 0, 0, 0.2), 0 -2px 10px rgba(0, 0, 0, 0.18);
}
.module-3 {
  text-align: center;
  /* background: #058080; */
  padding: 2rem 0 !important;
  background: url("../../static/dev_slices/26@3x.jpg") no-repeat 100% 100%;
}
.module-3 > h2 {
  font-size: 30px;
}
.module-3 h3 {
  margin-bottom: 1rem;
}
.module-3 .el-button {
  padding: 12px 30px;
  color: #0371a4;
}
.module-3 > div > div {
  height: 30px;
  padding: 1.6rem;
  margin: 0.4rem;
  background-color: #404040;
}
.module-4 {
  height: 580px;
  text-align: center;
  padding: 5rem 0;
  background: rgba(204, 204, 204, 0.3);
  position: relative;
}
.module-4 .leftImg {
  position: absolute;
  left: 50px;
  top: 50%;
  z-index: 100;
  cursor: pointer;
}
.module-4 .rightImg {
  position: absolute;
  right: 50px;
  top: 50%;
  cursor: pointer;
  z-index: 100;
}
.module-4 h2 {
  color: #333333;
}
.module-4 > div {
  width: 1200px;
  margin: 40px auto 0;
}
.module-4 div img {
  margin-right: 14px;
}
.module-4 div img:last-child {
  margin-right: 0;
}
.module-5 {
  text-align: center;
  background: #fff;
  padding: 3rem 0rem;
  height: 1100px;
  margin: 0 auto;
  /* background: linear-gradient(-135deg,#058080,#454590) */
}
.module-5 > div {
  width: 1200px;
  margin: 0 auto;
}
.module_app {
  color: #000;
  background-color: rgba(204, 204, 204, 0.3);
}
.module-5 > div > div.btm {
  margin-top: 30px;
}
.module-5 > div > div > div {
  display: inline-block;
}
.module-5 > div > div > div > div {
  width: 100%;
  height: 100%;
  /* background-color: rgba(204, 204, 204, 0.3); */
  /* padding-top: 28px; */
  box-sizing: border-box;
}

.module-5 > div > div > div {
  width: 378px;
  height: 380px;
  border: 1px solid #ccc;
}
.module-5 > div > div button {
  width: 90px;
  height: 30px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  background-color: #fff;
  border: 1px solid #ccc;
  margin-top: 15px;
}
.module-5 > div > div > div + div {
  margin-left: 25px;
}
.module-5 h2 {
  margin-bottom: 3rem;
}
.hard_img div p {
  color: #666666;
  font-size: 12px;
  margin: 2px;
}
.hard_img:hover {
  box-shadow: 0 0 8px 0 #0072a6;
}
.module_app .el-row {
  width: 1200px;
  margin: 0 auto;
}
.module-1 p,
.module-2 p {
  line-height: 1.6rem;
}

.img_sigh {
  display: inline-block;
  overflow: hidden;
  width: 131px;
  height: 120px;
  margin: 0 35px;
  text-align: center;
  text-indent: -9999px;
  background-image: url("../assets/media.png");
  background-repeat: no-repeat;
}
.pater_box {
  position: relative;
}
.pater_box ul {
  overflow: hidden;
  position: relative;
  width: 2560px;
}
.swiper-container {
  width: 1190px;
  overflow: hidden;
}
.pater_box .swiper-slide {
  padding: 30px 18.07px;
  width: 362.5px !important;
}
.pater_box .swiper-slide img {
  width: 100%;
  height: 100%;
}
.pater_box p {
  margin-top: 10px;
  color: #333;
}
.pater_title {
  display: block;
  overflow: hidden;
  cursor: pointer;
}
.pater_title:hover{
  color: #0371a4;
}
.pater_title span {
  float: left;
}
.pater_title span:nth-child(2) {
  width: 278px;
  text-align: left;
}
.left_back,
.right_back {
  width: 22.9%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  /* background-color: rgba(0,0,0,0.5); */
  cursor: pointer;
  outline: none;
}
.left_back img,
.right_back img {
  width: 24px;
  height: 44px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.right_back {
  left: inherit;
  right: 0;
}
.pater_title {
  text-align: center;
  color: #000;
  margin-bottom: 10px;
}
/* element */
.el-row {
  display: flex;
  flex-wrap: wrap;
}
.el-col-12,
.el-col-8 {
  flex: 1;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-footer {
  color: black;
  background-color: #353535;
  border-bottom: 1px solid #ccc;
}
.el-carousel__indicator {
  padding: 0;
  margin: 12px 4px;
  border: 1px solid #9c9c9c;
}
.el-footer {
  height: auto !important;
}
.footer_box {
  width: 1200px;
  margin: 0 auto;
  color: #c7c7c7;
  /* padding-left: 70px; */
}
.footer_box a {
  color: #c7c7c7;
  text-align: left;
}
.footer_box span {
  text-align: left;
  color: #c7c7c7;
}
.footer_box .footer-a {
  font-size: 12px;
}
.footer_box .footer-title {
  font-size: 16px;
}
.footer_box div {
  padding-bottom: 3rem;
  text-align: left;
  padding-left: 50px;
  box-sizing: border-box;
}
.footer_box div:last-child {
  padding-left: 50px;
  box-sizing: border-box;
  text-align: left;
}
.footer_box dl {
  width: 16%;
  display: inline-block;
  vertical-align: top;
}
.footer_box dt {
  margin-bottom: 12px;
}
.footer_box dd {
  margin: 5px 0;
}
.footer_box dd a,
.link-exchange h4 {
  color: #666;
}
.leftimg {
  display: inline-block;
  background: url("../assets/appoverview.png") no-repeat -9px -289px;
  width: 23px;
  height: 22px;
}
.footer-right {
  display: inline-block;
  float: right;
  width: 18%;
}
.footer_box > div {
  float: left;
  width: 17%;
}
.footer_box img {
  margin-top: 10px;
}
.footer-title {
  margin: 30px 0 22px 0;
}
.footer-a {
  display: block;
  font-size: 16px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 30px;
}
.footer-img {
  vertical-align: middle;
  border: 1px dashed;
}
.backTop {
  position: fixed;
  cursor: pointer;
  right: 40px;
  bottom: 66px;
  z-index: 100000;
}
/* 轮播背景图 */
.swiper-button-next,
.swiper-button-prev {
  background-image: none;
}
.title .btitle {
  font-size: 48px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-top: 50px;
}
.feature {
  width: 1200px;
  margin: 0 auto;
  margin-top: 72px;
}
.feature .left {
  float: left;
  padding-top: 5px;
}
.feature .right {
  margin-left: 65px;
}
.right > p {
  font-size: 20px;
  font-weight: 400;
}
.right > div {
  margin-top: 5px;
  color: #666;
}
.module-2 > .feature > div {
  display: inline-block;
  width: 286px;
  text-align: left;
}
.solution_box {
  overflow: hidden;
  background: #484848;
}
.solution {
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
}
.solution > h2,
.solution > p {
  text-align: center;
}
.solution > h2 {
  margin-bottom: 20px;
}
.solution > p {
  margin-bottom: 40px;
}
.solution > div {
  width: 20%;
  height: 350px;
  display: inline-block;
  margin: 0 -4px -4px 0;
  position: relative;
}
.solution > div > div {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  overflow: hidden;
}
.solution .case_boxs {
  width: 180px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.case_boxs p {
  font-size: 20px;
  font-weight: 500;
}
.case_boxs .case_text {
  font-size: 12px;
  font-weight: 200;
  margin: 15px 0;
  line-height: 20px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.container .swiper-pagination{
  position: absolute;
  width: 120px;
  top: 64%;
  left: 50%;
  margin-left: -60px;
  z-index: 100000;
}
.container .swiper-pagination-bullet{
  height: 4px;
  width: 50px;
  background-color: #fff;
  border-radius: 0%;
}
.case_boxs .link {
  padding: 5px 20px;
  border: 1px solid #fff;
  width: 120px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  font-weight: 300;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.case_boxs .link:hover {
  color: #00c1de;
  background: #fff;
  cursor: pointer;
}
.solution > div > div:hover {
  background-color: rgba(0, 121, 191, 0.6);
}

/* 动画-------内容向上移动 */
.solution > div > div:hover .case_boxs {
  top: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
/* 动画-------内容向上移动 */
.solution > div > div:hover .link,
.solution > div > div:hover .case_text {
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.solution > div > div img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
.solution > div > div a {
  font-size: 1.2rem;
}
.solution .striping {
  display: block;
  margin: 30px auto 20px auto;
  width: 20px;
  height: 2px;
  background: #fff;
}
.solution > div.s1 {
  background-image: url(../../static/dev_slices/bg1.jpg);
}
.solution > div.s2 {
  background-image: url(../../static/dev_slices/bg2.jpg);
}
.solution > div.s3 {
  background-image: url(../../static/dev_slices/bg3.jpg);
}
.solution > div.s4 {
  background-image: url(../../static/dev_slices/bg4.jpg);
}
.solution > div.s5 {
  background-image: url(../../static/dev_slices/bg5.jpg);
}
.title .subtitle {
  height: 25px;
}
button:hover {
  cursor: pointer;
}
.hard_img {
  float: left;
  margin-top: 30px;
}
.hard_img img {
  width: 100px;
  height: 60px;
}
.hard_img div .ptitle {
  font-size: 20px;
  /* border-bottom: 1px solid #0072a6; */
  line-height: 50px;
  margin-top: 88px;
}
.hard_img div .blueline {
  width: 250px;
  border-bottom: 1px solid #39a3d4;
  margin: 0 auto;
}
.hard_img div p.border {
  width: 70px;
  height: 26px;
  line-height: 28px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-left: 153px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
}
.imgTitle {
  padding: 30px;
  background-color: #39a3d4;
}
.hardwareContent {
  display: none;
  margin-top: 20px;
}
.hard_img:hover .hardwareContent {
  display: block;
  transition: 0.3s;
}
.hard_img:hover .ptitle {
  margin-top: 38px;
  transition: 0.3s;
}
.textone {
  position: absolute;
  top: 280px;
  left: 6px;
  cursor: pointer;
} 
.texttwo {
  position: absolute;
  top: 280px;
  left: 416px;
  cursor: pointer;
}
.textthree {
  position: absolute;
  top: 280px;
  left: 804px;
  cursor: pointer;
}
.brightness img:hover {
  opacity: 0.5;
}
</style>
