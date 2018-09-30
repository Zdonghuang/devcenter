<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>联想LeapAI平台介绍</h2>
        <!-- <p>TI Sitara AM5708异构多核处理器,1GB DDR3L 1333高速内存,TF卡扩展存储,1个千兆以太网口,工业接口,TI Sitara AM5708异构多核处理器,1GB DDR3L 1333高速内存,TF卡扩展存储,1个千兆以太网口,工业接口TI Sitara AM5708异构多核处理器,1GB DDR3L 1333高速内存,TF卡扩展存储,1个千兆以太网口,工业接口</p> -->
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="content">
      <div class="detailInfo">
        <div style="margin-bottom:30px;">LeapAI 平台演示 demo</div>
        <div class="detailImg">
          <video src="https://www.leapai.com/images/LeapAl.com-Demo.mp4" width="640" height="360" controls="controls">
          </video>
        </div>
        <!-- <p>-智能产线</p>
        <p>-预测性维护</p>
        <p>-智慧城市</p>
        <p>-IoT教学/科研</p> -->
      </div>
      <div class="detailInfo">
        <div>核心功能</div>
        <div class="detailCenter">
          <div class="centerItem">
            <div>
              <p>用户中心</p>
              <p>统一管理平台用户，实现首页、开发平台、社区、Marketplace的单点登陆，以及购买API及应用用户管理。</p>
            </div>
            <div>
              <p>应用部署</p>
              <p>提供Docker容器运行用户开发的SaaS应用。安全、稳定的同时提供完善的服务配置能力和强大的服务编排能力。</p>
            </div>
          </div>
          <div class="centerItem">
            <div>
              <p>应用用户管理</p>
              <p>应用用户可统一管理。可针对每个应用绑定不同的用户。绑定后用户可以通过手机短信验证码登陆应用。</p>
            </div>
            <div>
              <p>Marketplace</p>
              <p>用户可以将自己开发的应用发布到平台的Marketplace，并通过平台的计费系统了解应用用户的使用情况。</p>
            </div>
          </div>
          <div class="centerItem">
            <div>
              <p>SaaS应用框架</p>
              <p>通过github上开源的Leaplate应用框架，用户可以用最小的代价开发出稳定、美观、高效的企业级应用。</p>
            </div>
            <div>
              <p>API 网关</p>
              <p>为用户应用提供统一的接口。实现了包括系统登陆，用户管理，功能调用，系统控制等功能的一套整体解决方案。</p>
            </div>
          </div>
          <div class="centerItem">
            <div>
              <p>统一消息队列</p>
              <p>为设备连接到LeapAI.com平台提供了稳定可靠的方案，使应用针对内网设备的反向控制成为可能。</p>
            </div>
            <div>
              <p>API代理</p>
              <p>针对用户已有工业应用场景，将原有API接入LeapAI.com平台。更有创新的FlexBroker技术，简化对API的调用。</p>
            </div>
          </div>
          <div class="centerItem">
            <div>
              <p>Rest API接入</p>
              <p>通过接入第三方和公有云服务商的Rest API，LeapAI.com可以为开发者提供更加灵活、全面的PaaS服务能力。</p>
            </div>
            <div>
              <p>工业智能硬件</p>
              <p>配合针对不同应用场景专门订制的硬件开发版和边缘服务器，可以将LeapAI.com平台的能力发挥到极致</p>
            </div>
          </div>
        </div>
      </div>
      <div class="detailInfo">
        <div>产品亮点</div>
        <p>1. 便捷高效的一站式应用开发体验</p>
        <p>2. 智能API网关提供全面的PaaS平台能力组件</p>
        <p>3. FlexBroker帮助简化工业应用的二次开发</p>
        <p>4. 分布式微服务架构提供安全稳定的应用部署环境</p>
        <p>5. 结合联想工业智能硬件提供端到端交付能力</p>
        <p>6. 专业开发者社区和技术团队提供全方位的技术支持</p>
      </div>
      <div class="detailInfo pcenter">
        <div>产品架构</div>
        <img src="../../static/dev_slices/pp.jpg" alt=""/>
      </div>
      <div class="detailInfo pcenter">
        <div>LeapAI PaaS平台服务项目</div>
        <table>
          <tr>
            <td><b>系统功能</b></td>
            <td><b>基础服务</b></td>
            <td><b>扩展能力</b></td>
          </tr>
          <tr>
            <td>应用开发</td>
            <td>SaaS应用框架</td>
            <td>API沙箱</td>
          </tr>
          <tr>
            <td>应用部署</td>
            <td>智能AIP网关</td>
            <td>FlexBroker</td>
          </tr>
          <tr>
            <td>用户中心</td>
            <td>实时数据库</td>
            <td>Restful API接入</td>
          </tr>
          <tr>
            <td>应用用户管理</td>
            <td>统一消息队列</td>
            <td>公有云资源</td>
          </tr>
          <tr>
            <td>Marketplace</td>
            <td>通用API代理</td>
            <td>容器服务</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
  }
};
</script>


<style scoped>
body {
  background-color: #fff;
}
.detail {
  background-image: url(../../static/homeheadbk3.jpg);
  background-size: 100% 100%;
  width: 100%;
  min-width: 1200px;
  height: 200px;
  color: #fff;
  float: none;
}
.detail > div,
.content {
  width: 1200px;
  margin: 0 auto;
}
.detailInfo {
  color: #000;
}
.detailInfo > div:first-child {
  margin-top: 40px;
  border-left: 4px solid #39a3d4;
  padding: 0 8px;
  font-size: 18px;
}
.detailInfo > p {
  margin-top: 15px;
}
.detail > div > h2 {
  font-size: 1.6rem;
  padding-top: 50px;
  color: #fff;
}
.detail > div > p {
  margin-top: 30px;
}
button {
  margin-top: 25px;
  background: #39a3d4;
  border: none;
  color: #fff;
}
.pcenter {
  /* text-align: center; */
}
.pcenter > img {
  width: 900px;
  margin: 30px 0 30px 0;
}
.detailImg > img {
  width: 300px;
  margin: 30px 30px;
}
.centerItem > div {
  display: inline-block;
  width: 450px;
  margin: 20px 100px 20px 12px;
}
.centerItem > div > p:first-child {
  color: #39a3d4;
  margin-bottom: 10px;
  font-size: 16px;
}
table {
  margin: 30px 0;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
  width: 900px;
}
table td {
  border: 1px solid #ddd;
  padding: 15px 101px;
}
table tr:first-child td {
  font-size: 16px;
  background-color: #ccc;
}
table td:nth-child(1) {
  text-indent: 1rem;
}
.detailImg {
  width: 640px;
  margin: 0 auto;
}
</style>
