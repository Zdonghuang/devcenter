<template>
<el-container>
  <el-main class="container"></el-main>
  <div class="pnav">
    <div class="nactive">应用场景</div>
    <div>产品亮点</div>
    <div>核心功能</div>
    <div>产品价格</div>
  </div>
  <el-main class="product-1 product" id="product-1">
    <div>
      <h2>应用场景</h2>
      <img src="../../static/dev_slices/banner.jpg" alt=""/>
    </div>
  </el-main>
  <el-main class="product-2 product" id="product-2">
    <div>
      <h2>产品亮点</h2>
      <div class="ppoint">
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
      </div>
      <div class="ppoint">
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
        <div>
          <div class="sqaure"></div>
          <p class="blue">产品特点</p>
          <p>产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点产品特点</p>
        </div>
      </div>
    </div>
  </el-main>
  <el-main class="product-3 product" id="product-3">
    <div>
      <h2>核心功能</h2>
      <div class="core">
        <div>
          <div>
            <img src="../../static/dev_slices/banner.jpg" alt=""/>
          </div>
          <div class="coreright">
            <div class="tip">
              <span>01</span>
              <h5>核心功能标题</h5>
              <p>核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题</p>
            </div>
          </div>
        </div>
        <div>
          <div class="coreright">
            <div class="tip leftTip">
              <span>01</span>
              <h5>核心功能标题</h5>
              <p>核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题</p>
            </div>
          </div>
          <div>
            <img src="../../static/dev_slices/banner.jpg" alt=""/>
          </div>
        </div>
        <div>
          <div>
            <img src="../../static/dev_slices/banner.jpg" alt=""/>
          </div>
          <div class="coreright">
            <div class="tip">
              <span>01</span>
              <h5>核心功能标题</h5>
              <p>核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题</p>
            </div>
          </div>
        </div>
        <div>
          <div class="coreright">
            <div class="tip leftTip">
              <span>01</span>
              <h5>核心功能标题</h5>
              <p>核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题</p>
            </div>
          </div>
          <div>
            <img src="../../static/dev_slices/banner.jpg" alt=""/>
          </div>
        </div>
        <div>
          <div>
            <img src="../../static/dev_slices/banner.jpg" alt=""/>
          </div>
          <div class="coreright">
            <div class="tip">
              <span>01</span>
              <h5>核心功能标题</h5>
              <p>核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题核心功能标题</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-main>
  <el-main class="product-4 product" id="product-4">
    <div>
      <h2>产品价格</h2>
    </div>
    <table>
        <thead>
            <tr>
                <th width="25%"></th>
                <th width="25%"></th>
                <th width="25%"></th>
                <th width="25%"></th>
            </tr>
        </thead>
        <tbody>
            <tr class="pricing-pkg pric-one">
                <td>服务内容</td>
                <td style="border-right:none; font-size:24px;" class="bug1"> 基础版<br><button>立即开通</button></td>
                <td style="font-size:24px" class="bug2">专业版 <br></td>
                <td style="border-left:none; font-size:24px"  class="bug3">企业版 <br></td>
            </tr>
            <tr :class="item.sectionTitle?'sub_head':''" v-for="(item,index) in tableData" :key="index">
            <!-- <tr v-for="(item,index) in tableData" :key="index"> -->
                <td>{{item.sectionTitle? item.sectionTitle:item.section}}</td>
                <td class="text_aligh">{{item.content2}} <i class="el-icon-check" v-if="item.baseflag"></i> </td>
                <td class="text_aligh">{{item.content3}} <i class="el-icon-check" v-if="item.professflag"></i> </td>
                <td class="text_aligh">{{item.content4}} <i class="el-icon-check" v-if="item.enterflag"></i> </td>
            </tr>
        </tbody>
    </table>
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
        </div>
        <div>
            <h2 class="footer-title addqq">关注微信公众号</h2>
            <img class="footer-img" src="../../static/dev_slices/wx.jpg" style="width:138px;">
        </div>
        <div>
            <h2 class="footer-title addqq">加入技术服务QQ群</h2>
            <img class="footer-img" src="../../static/dev_slices/qqq2.png">
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
      showindex: false,
      showTop: false,
      tableTitle: [],
      tableData: [
        {
          sectionTitle: "功能"
        },
        {
          section: "用户中心",
          freeflag: true,
          baseflag: true,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "应用开发",
          freeflag: true,
          baseflag: true,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "应用部署",
          freeflag: true,
          baseflag: true,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "应用用户管理",
          freeflag: false,
          baseflag: false,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "应用手机登陆",
          freeflag: false,
          baseflag: false,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "应用市场发布",
          freeflag: false,
          baseflag: false,
          professflag: false,
          enterflag: true,
          vipflag: true
        },
        {
          sectionTitle: "基础服务组件"
        },
        {
          section: "SaaS应用框架",
          freeflag: true,
          baseflag: true,
          professflag: true,
          enterflag: true,
          vipflag: true
        },
        {
          section: "API网关",
          content1: "10000次/月",
          content2: "10000次/月",
          content3: "无限制",
          content4: "无限制",
          content5: "无限制"
        },
        {
          section: "实时数据库（共享）",
          content1: "100MB",
          content2: "100MB",
          content3: "500MB",
          content4: "2GB",
          content5: "500MB"
        },
        {
          section: "统一消息队列",
          content1: "50000条/月",
          content2: "50000条/月",
          content3: "无限制",
          content4: "无限制",
          content5: "无限制"
        },
        {
          section: "API代理",
          content1: "1个",
          content2: "1个",
          content3: "可配置",
          content4: "可配置",
          content5: "可配置"
        },
        {
          sectionTitle: "扩展能力组件"
        },
        {
          section: "API沙箱",
          content1: "无",
          content2: "无",
          content3: "有",
          content4: "有",
          content5: "有"
        },
        {
          section: "FlexBroker",
          content1: "无",
          content2: "无",
          content3: "有",
          content4: "有",
          content5: "有"
        },
        {
          section: "短信验证",
          content1: "无",
          content2: "无",
          content3: "每日每人6条",
          content4: "可升级",
          content5: "可升级"
        },
        {
          section: "图片加水印",
          content1: "无",
          content2: "无",
          content3: "可升级",
          content4: "可升级",
          content5: "可升级"
        },
        {
          section: "身份验真",
          content1: "无",
          content2: "无",
          content3: "可升级",
          content4: "可升级",
          content5: "可升级"
        },
        {
          section: "RestAPI 接入",
          content1: "无",
          content2: "无",
          content3: "有",
          content4: "有",
          content5: "有"
        },
        {
          section: "公有云资源",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "有",
          content5: "有"
        },
        {
          sectionTitle: "服务"
        },
        {
          section: "技术支持",
          content1: "无",
          content2: "无",
          content3: "Email",
          content4: "Email / IM",
          content5: "Email / IM / Tel"
        },
        {
          section: "服务合同",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "有",
          content5: "有"
        },
        {
          section: "异地数据备份",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "额外付费",
          content5: "额外付费"
        },
        {
          section: "实时数据库（独享）",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "额外付费",
          content5: "额外付费"
        },
        {
          section: "性能优化",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "有",
          content5: "有"
        },
        {
          section: "99.99% 可用 SLA",
          content1: "无",
          content2: "无",
          content3: "无",
          content4: "额外付费",
          content5: "额外付费"
        },
        {
          sectionTitle: "工业智能硬件"
        },
        {
          section: "标准硬件",
          content1: "",
          content2: "",
          content3: "均衡版",
          content4: "超能版",
          content5: "超能版",
          freeflag: false,
          baseflag: false,
          professflag: false,
          enterflag: false,
          vipflag: false
        },
        {
          section: "订制硬件",
          content1: "",
          content2: "",
          content3: "",
          content4: "",
          content5: "",
          freeflag: false,
          baseflag: false,
          professflag: false,
          enterflag: true,
          vipflag: true
        }
      ]
    };
  },
  created() {
    this.imgs = img.data;
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.showTopimg);
  },
  methods: {
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 0);
    },
    openBigData() {
      window.open("https://bigdata.lenovo.com/", "_blank");
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
        this.$router.push(path);
      }
    }
  }
};
</script>
<style scoped>
body {
  min-width: 940px; /* Suppose you want minimum width of 1000px */
  width: auto !important; /* Firefox will set width as auto */
  width: 940px; /* As IE6 ignores !important it will set width as 1000px; */
}
.container {
  position: relative;
  height: 535px;
  background-image: url(../../static/homeheadbk3.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  transition: 0.5s;
}
.product-4 > div {
  padding-bottom: 30px;
}
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  color: #000;
  width: 1200px;
  margin: 0 auto;
}
table td {
  border: 1px solid #ddd;
  padding: 10px;
}
table td:nth-child(1) {
  text-indent: 1rem;
}
.pricing-pkg td {
  border-bottom: none;
  text-align: center;
  font-size: 1rem;
}
.pricing-pkg td > span {
  font-size: 1.6rem;
  font-weight: 800;
}
.pricing-pkg td > button {
  width: 88px;
  height: 28px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 14px;
  padding: 0;
  line-height: 28px;
}
.btn3 {
  background-color: #33aeff;
}
.btn1:hover {
  background-color: #fff;
  color: black;
}
.btn2:hover {
  background-color: #fff;
  color: black;
}
.btn3:hover {
  background-color: #fff;
  color: black;
}
.pric-two td {
  border-top: none;
}
.sub_head {
  background: #ccc;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  height: 50px;
}
.sub_head td {
  border-left: none;
  border-right: none;
}
.sub_head td:nth-child(1) {
  text-indent: 1rem;
  padding: 0.4rem;
}
.text_aligh {
  text-align: center;
}

/* */
.el-icon-check {
  font-size: 1rem;
  font-weight: 800;
  color: #1a7d12;
}
.pnav {
  width: 1200px;
  margin: 0 auto;
  color: #000;
  font-size: 16px;
}
.pnav > div {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 40px;
}
.pnav > div.nactive {
  border-bottom: 3px solid #000;
}
.pnav > div:first-child {
  margin-left: 250px;
}
.product {
  width: 100%;
  height: 555px;
  background-color: #f2f2f4;
  text-align: center;
}
.product-2,
.product-4 {
  background-color: #fff;
}
.product-3,
.product-4 {
  height: 1575px;
}
.product > div {
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  color: #000;
}
.product > div > h2 {
  padding-top: 50px;
}
.product-1 > div > img {
  width: 1000px;
  margin-top: 50px;
}
.product-2 > div > .ppoint {
  width: 100%;
  /* margin-top: 30px; */
}
.product-2 > div > h2 {
  padding-bottom: 20px;
}
.product-2 > div > .ppoint > div {
  display: inline-block;
  width: 300px;
  padding: 20px 40px;
}
.ppoint > div > p {
  margin-top: 15px;
}
.sqaure {
  width: 80px;
  height: 80px;
  border: 1px solid #0371a4;
  border-radius: 50%;
  margin: 0 auto;
}
.blue {
  color: #0371a4;
}
.core {
  width: 1200px;
  margin: 0 auto;
}
.core > div:first-child {
  margin-top: 30px;
}
.core > div > div {
  display: inline-block;
  width: 598px;
  margin-top: -2px;
}
.core > div > div > div.tip {
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  top: -124px;
  left: -50px;
  height: 120px;
  width: 530px;
  padding: 30px 50px 30px 70px;
  text-align: left;
}
.core > div > div > div.leftTip {
  top: -124px;
  left: 0px;
  padding: 30px 70px 30px 50px;
}
.coreright {
  height: 0;
}
.tip > span {
  float: left;
  font-size: 20px;
}
.tip > h5 {
  margin-top: 5px;
  font-size: 18px;
  margin-left: 50px;
}
.tip > p {
  margin: 0 50px;
  color: #666;
  padding-top: 15px;
}
.core > div > div > img {
  width: 600px;
  height: 280px;
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
}
</style>
