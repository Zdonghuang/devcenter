<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>联想工业智能开发板_标准版</h2>
        <p>高性价比的工业智能产品开发者平台</p>
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="detailInfo">
      <div>应用场景</div>
      <p>广泛适用于机器视觉、电力自动化、智能交通、医疗器械、自动分拣装置、高精度仪器仪表、高端数控系统等多种工业方案的开发</p>

    </div>
    <div class="detailInfo">
      <div>产品规格</div>
      <p>TI Sitara AM5708异构多核处理器</p>
      <p>1GB DDR3L 1333高速内存</p>
      <p>TF卡扩展存储</p>
      <p>1个千兆以太网口</p>
      <p>工业接口</p>
      <p class="hbottom">LeapAI适配</p>
      <p  class="image"><img src="../../static/dev_slices/11.jpg" width="300"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  mounted() {
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
.detail > div {
  width: 1200px;
  margin: 0 auto;
}
.detailInfo {
  width: 1200px;
  margin: 0 auto;
  color: #000;
}
.detailInfo > div {
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
.hbottom {
  margin-bottom: 30px;
}
.detailInfo p.image {
  margin: -220px 0 50px 350px;
}
.hardware {
  margin-bottom: 30px;
}
</style>
