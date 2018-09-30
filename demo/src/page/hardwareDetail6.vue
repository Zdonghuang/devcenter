<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>联想工业边缘智能网关_定制版</h2>
        <p>可快速根据需求定制的工业边缘智能网关</p>
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="detailInfo">
      <div>应用场景</div>
      <p>适用于特殊企业有特殊应用需求的工业边缘计算场合</p>
    </div>

    <div class="detailInfo">
      <div>产品规格</div>
      <p>X86/ARM处理器按需选择</p>
      <p>外观,结构,按需定制</p>
      <p class="hbottom">输入输出接口按需定制</p>
      <p  class="image"><img src="../../static/dev_slices/66.jpg" width="300"></p>
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
  margin: -160px 0 50px 350px;
}
</style>
