<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>联想工业边缘智能服务器</h2>
        <p>高计算能力, 多种工业接口，协议适配的边缘智能服务器</p>
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="detailInfo">
      <div>应用场景</div>
      <p>适用于对计算能力要求较高的工业边缘计算应用</p>
    </div>
    <div class="detailInfo">
      <div>产品规格</div>
      <p>高性能X86/ARM处理器可选</p>
      <p>宽温支持, 工业适配</p>
      <p>内存，存储器规格等丰富配置可选择</p>
      <p class="hbottom">PCIE接口功能扩展卡, 按需定制</p>
      <p  class="image"><img src="../../static/dev_slices/55.jpg" width="300"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
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
  margin: -200px 0 50px 350px;
}
</style>
