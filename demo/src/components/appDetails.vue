<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="new_wapper">
            <div class="app-detail-title">
              <el-breadcrumb class="app-detail-title-breadcrumb" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/appStore' }">应用市场</el-breadcrumb-item>
                <el-breadcrumb-item>应用详情</el-breadcrumb-item>
              </el-breadcrumb>
                <!-- <p>应用详情</p> -->
            </div>
        </div>
        <div class="appDetailDiv">
            <div class="level-1">
                <a :href="showinfo.appUrl" target="_blank">
                    <img :src="getImageUrl(showinfo.image)" width="200" height="200">
                </a>
            </div>
            <div class="app-description">
                <h2>{{showinfo.appname}}</h2>
                <div style="margin-bottom: 10px">
                    <!-- <div>{{'类别：' + showinfo.category}}</div> -->
                    <div>{{'版本：' + showinfo.version}}</div>
                </div>
                <p>{{showinfo.description}}</p>
            </div>
            <div class="app-open-button-div">
              <el-button type="primary" @click="openUrl">打开</el-button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
// 应用详情
export default {
  props: ["showinfo"],
  mounted() {},
  methods: {
    getImageUrl(url) {
      return this.$imageUrl + url;
    },
    openUrl() {

      if (this.$route.query.id == "947") {
        this.$router.push("/clientCase4");
      } else if (this.$route.query.id == "944") {
        this.$router.push("/clientCase1");
      } else if (this.$route.query.id == "949") {
        this.$router.push("/clientCase2");
      } else if (this.$route.query.id == "946") {
        this.$router.push("/clientCase3");
      } else if(this.$route.query.id == "948"){
        this.$router.push("/case2");
      } else {
        window.open(this.showinfo.appUrl);
      }
    }
  }
};
</script>
<style scoped>
.app-detail-title {
  margin-top: 50px;
  max-width: 1200px;
  color: #333;
  margin: auto;
  overflow: hidden;
}

.app-detail-title p {
  float: left;
  font-size: 24px;
  font-weight: bold;
}

.app-detail-title-breadcrumb {
  /*float: left;*/
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
}

.level-1 {
  margin-top: 50px;
}

.appDetailDiv {
  color: black;
  max-width: 1200px;
  overflow: hidden;
  margin: auto;
}

.appDetailDiv h2 {
  color: black;
}

.app-description {
  margin-top: 30px;
}

.app-description h2 {
  margin-bottom: 10px;
}

.app-open-button-div {
  margin-top: 20px;
  width: 150px;
}
</style>
