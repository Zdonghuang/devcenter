<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>场景解决方案</h2>
        <p></p>
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="list">
      <div>
          <div class="hard_img" @click="goto('case1')">
              <div>
                <img src="../../static/dev_slices/parkx.png" alt="">
                <p>公园景区客流监控</p>
                <span>当公共场所或收费场所出现人流拥堵时，极易发生推搡和踩踏事件，很多不可控制的行...</span>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('case2')">
              <div>
                <img src="../../static/dev_slices/framz.png" alt="">
                <p>智能温室大棚监控</p>
                <span>温室大棚内温度、湿度、光照强弱以及土壤的温度和含水量等因素，对温室的作物生长起着...</span>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('case3')">
              <div>
                <img src="../../static/dev_slices/pm2.5s.png" alt="">
                <p>PM2.5在线监测分析平台</p>
                <span>空气质量（air quality）的好坏反映了空气污染程度，它是依据空气中污染物浓度的高低来...</span>
              </div>
              <button>查看详情</button>
          </div>
      </div>
      <div class="btm">
          <div class="hard_img" @click="goto('case4')">
              <div>
              <img src="../../static/dev_slices/machineh.png" alt="">
              <p>云终端温度控制系统</p>
              <span>许多工业重点设备设施在运行一段时间后部件就会发热，部件长时间处在发热状态，容易导致设...</span>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('case5')">
              <div>
                <img src="../../static/dev_slices/lightz.png" alt="">
                <p>智能预测性维护</p>
                <span>随着物联网技术的创新和发展，工程制造设备变得更加高效与智能，但设备本身维护工作却仍面临巨...</span>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('clientCase4')">
              <div>
                <img src="../../static/dev_slices/card.png" alt="">
                <p>叫号手牌与自动发放系统</p>
                <span>目前所有对外办公(如银行、政府办事机构、汽车4S店等)的叫号系统均为纸质打印号码，造成...</span>
              </div>
              <button>查看详情</button>
          </div>
      </div>
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
  },
  methods: {
    goto(path) {
      if (path) {
        this.$router.push(path);
      }
    },
  }
};
</script>

<style scoped>
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
.detail > div > h2 {
  padding-top: 30px;
}
.detail > div > p {
  margin-top: 30px;
}
.list {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0 80px 0;
  text-align: center;
}
.list > div.btm {
  margin-top: 30px;
}
.list > div > div {
  display: inline-block;
}
.list > div > div > div {
  width: 378px;
  height: 245px;
  background-color: rgba(204, 204, 204, 0.3);
  padding-top: 28px;
  box-sizing: border-box;
}
.list > div > div {
  width: 378px;
  height: 305px;
  border: 1px solid #ccc;
  margin: 7px;
}
.list > div > div button {
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
.hard_img {
  float: none;
}
.hard_img>div{
  background-image: url(../../static/dev_slices/banner10.jpg);
  background-size: 100% 100%;
}
.hard_img>div span{
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 200px;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
}
.hard_img div p {
  color: #fff;
  font-size: 18px;
  margin: 2px;
  font-weight: 500;
  padding: 10px;
}
.hard_img>div img{
    width: 90px;
    height: 90px;
}
button:hover {
  cursor: pointer;
}
</style>
