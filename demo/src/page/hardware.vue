<template>
  <div class="hardware">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
      <div>
        <h2>联想工业智能产品介绍</h2>
        <p>开源工业智能硬件</p>
        <!-- <el-button>点击购买</el-button> -->
      </div>
    </div>
    <div class="list">
      <div>
          <div class="hard_img" @click="goto('hardwareDetail')">
              <div>
              <img src="../../static/dev_slices/1.png" alt="">
              <p>联想工业智能开发板_标准版</p>
              <p>TI Sitara AM5708异构多核处理器</p>
              <p>1GB DDR3L 1333高速内存</p>
              <p>TF卡扩展存储</p>
              <p>1个千兆以太网口</p>
              <p>工业接口</p>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('hardwareDetail2')">
              <div>
              <img src="../../static/dev_slices/2.png" alt="">
              <p>联想工业智能开发板_专业版</p>
              <p>TI Sitara AM5708异构多核处理器</p>
              <p>1GB DDR3L 1333高速内存</p>
              <p>8GB eMMC高速存储</p>
              <p>2个千兆以太网口</p>
              <p>工业接口</p>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('hardwareDetail3')">
              <div>
              <img src="../../static/dev_slices/3.png" alt="">
              <p>联想工业智能开发板_超能版</p>
              <p>TI Sitara AM5748异构多核处理器</p>
              <p>2GB DDR3L 1333高速内存</p>
              <p>16GB eMMC高速存储</p>
              <p>2个千兆以太网口</p>
              <p>工业接口</p>
              </div>
              <button>查看详情</button>
          </div>
      </div>
      <div class="btm">
          <div class="hard_img" @click="goto('hardwareDetail4')">
              <div>
              <img src="../../static/dev_slices/4.png" alt="">
              <p>联想工业边缘智能网关</p>
              <p>均衡低功耗ARM/X86处理器</p>
              <p>无风扇架构, 适用各种现场</p>
              <p>丰富配置可选择</p>
              <p>千兆以太网口,数字显示接口, 工业接口均可选配</p>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('hardwareDetail5')">
              <div>
              <img src="../../static/dev_slices/5.png" alt="">
              <p>联想工业边缘智能服务器</p>
              <p>高性能X86/ARM处理器可选</p>
              <p>宽温支持, 工业适配</p>
              <p>丰富配置可选择</p>
              <p>PCIE接口功能扩展卡, 按需定制</p>
              </div>
              <button>查看详情</button>
          </div>
          <div class="hard_img" @click="goto('hardwareDetail6')">
              <div>
              <img src="../../static/dev_slices/6.png" alt="">
              <p>联想工业边缘智能网关_定制版</p>
              <p>X86/ARM处理器按需选择</p>
              <p>外观,结构,按需定制</p>
              <p>输入输出接口按需定制</p>
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
  font-size: 1.6rem;
  padding-top: 50px;
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
.hard_img div p {
  color: #666666;
  font-size: 12px;
  margin: 2px;
}
.hard_img div p:nth-child(2) {
  margin: 17px 0 16px 0;
  color: #333333;
  font-size: 14px;
}
/* .hard_img:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
} */
button:hover {
  cursor: pointer;
}
</style>
