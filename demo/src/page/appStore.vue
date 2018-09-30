<template>
    <div class="fixed_frame">
        <div style="height:60px; background:#000"></div>
        <div class="detail" >
          <div>
             <h2>应用列表</h2>
          </div>
        </div>
        <!-- <div class="new_wapper">
            <div class="api_bread">
                <p>应用列表</p>
            </div>
        </div> -->
        <div class="app_box_wrapper">
            <ul class="app_box">
                <li v-for="(item,index) in appData" :key="index" class="list">

                    <router-link to @click.native="goDetail(item.id)" :title="item.appname">
                      <img :src="getImageUrl(item.image)" width="100" height="100">
                      <p>{{item.appname}}</p>
                    </router-link>
                    <!-- <el-button type="primary" plain @click="buyapp(item.id,index)" v-show="index!==indx">立即购买</el-button> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "appStore",
  data() {
    return {
      appData: [],
      indx: "-1",
    };
  },
  created() {},
  mounted() {
    this.showData();
  },
  methods: {
    goDetail(appid) {
      if (!this.$store.state.usertoken) {
        this.$router.push("/login");
      }
      else {
        this.$router.push({path:'/appStoreDetails',query:{id:appid}});
      }
    },
    getImageUrl(url) {
      return this.$imageUrl + url;
    },
    getmaxversion(a, b) {
      let numa = a.version.split(".");
      let numb = b.version.split(".");
      if (numa.length > numb.length) {
        for (var i = 0; i < numa.length; i++) {
          numa[i] = parseInt(numa[i]);
          if (numb[i]) {
            numb[i] = parseInt(numb[i]);
          }
          if (numa[i] > numb[i]) {
            return a;
          }else if(numa[i]===numb[i]){
            continue;
          } else {
            return b;
          }
        }
      } else {
        for (var i = 0; i < numb.length; i++) {
          numb[i] = parseInt(numb[i]);
          if (numa[i]) {
            numa[i] = parseInt(numa[i]);
          }
          if (numa[i] > numb[i]) {
            return a;
          }else if(numa[i]===numb[i]){
            continue;
          } else {
            return b;
          }
        }
      }
    },

    showData() {
      let _this = this;
      _this.$ajax.get("/v2/apps/applist").then(res => {
        var map = {};

        for (var i = 0; i < res.data.result.length; i++) {
          var key = res.data.result[i].bundleId;
          if(map[key]){
            map[key] = this.getmaxversion(
                map[key],
                res.data.result[i]
              );
          } else {
            map[key] = res.data.result[i];
          }
        }
        this.appData = map;
        // console.log(this.appData);
      });
    },
    buyapp(id, indxx) {
      if (!this.$store.state.usertoken) {
        this.$alert("亲～请登陆才能购买哦。。");
        this.$router.push("/login");
      } else {
        let _this = this;
        let json = JSON.stringify({ username: "", appname: "", appid: id });
        _this.$ajax
          .post("/v2/users/addApp", json)
          .then(res => {
            // res.setRequestHeader("Authorization", this.$store.state.usertoken);
            if (res.status == "ok") {
              this.$alert("购买成功");
              this.indx = indxx;
            }
          })
          .catch(err => {
            if (err) {
              this.$alert("亲～请登陆才能购买哦。。");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
.fixed_frame .detail {
  background-image: url(../../static/homeheadbk3.jpg);
  background-size: 100% 100%;
  width: 100%;
  min-width: 1200px;
  height: 200px;
  color: #fff;
  float: none;
}
.fixed_frame .detail > div{
  width: 1200px;
  margin: 0 auto;
}
.fixed_frame .detail > div h2{
  padding-top:30px;
}
.fixed_frame {
  width: 100%;
  margin: 0 auto;
}
.app_box_wrapper {
  width: 1200px;
  margin: 0 auto;
}
.app_box {
  overflow: hidden;
  padding-top: 30px;
  color: #333;
}
.app_box li {
  margin-right: 15px;
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  width: 100px;
}

.app_box li .el-button--primary.is-plain {
  display: block;
  width: auto;
  padding: 2px;
  float: right;
  margin-top: 5px;
}
.api_bread {
  width: 1200px;
  margin: 0 auto;
}

.api_bread p {
  margin-left: 10px;
}
</style>
