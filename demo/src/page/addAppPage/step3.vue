<template>
    <div>      
        <keep-alive>
            <content>
                <h3 class="step_title">应用开发<span>开发中</span></h3>
                <div class="step_box first_block">
                    <label>应用名称:</label>
                    <span>{{showData.appname}}</span>
                </div>
                <div class="step_box">
                    <label>应用描述:</label>
                    <span>{{showData.description}}</span>
                </div>
                <div class="step_box">
                    <label>AppId:</label>
                    <span>{{showData.appId}}</span>
                </div>
                <!-- <div class="msg_box">
                    <label class="el-form-item__label">应用分类</label>
                    <span>生活应用</span>
                </div> -->
                <div class="step_box">
                    <label>应用标识:</label>
                    <span>{{showData.bundleId}}</span>
                </div>
                <div class="step_box">
                    <label>应用图标:</label>
                    <img :src="showData.image" alt="" width="100" height="100">
                </div>
                <div class="step_box">
                    <label>绑定的API:</label>
                    <BindingApi :bindingApi="dataTableData" :total="total" v-if="flag"></BindingApi>
                </div>
                <div class="step_box">
                    <label style="width:420px;">选择应用开发包 (大小：不超过100M，格式：tar.gz)</label>
                    <div class="tar_btn">
                        <form method="post" enctype="multipart/form-data" ref="myform">
                            <input class="filebtn" type="file" accept="application/x-gzip" @change="uploading($event)"/>
                        </form>
                    </div>
                    <!-- <span class="browse">
                        <span><i class="fa fa-file" aria-hidden="true"></i> 浏览</span>
                        <span style="font-size:1.8rem;"> {{fileName}}</span>
                    </span> -->
                </div>     
                <el-button type="primary" plain style="width:auto;" @click="preStep">绑定API</el-button>
                <el-button type="primary" plain style="width:auto;float:right;" @click="nextStep($event)" :disabled="isFile">上传</el-button>
            </content>
        </keep-alive>
    </div>
</template>
<script>
import BindingApi from '../../components/bindingApi';
export default {
  name: "step3",
  data() {
    return {
      file: "",
      src: "",
      showData: "",
      fileName: "",
      dataTableData:[],
      total:0,
      flag: false,
      isFile:true
    };
  },
  components:{
      BindingApi
  },
  activated() {
    this.flag=false;
    this.showdata();
    // console.log('执行nounted');
    // if (this.$route.path) this.$store.commit("changeStep", 3);
  },
  methods: {
    uploading(event) {
      let tarFile = event.target.value;
      tarFile = tarFile.split(".");
      if (
        tarFile[tarFile.length - 2] === "tar" &&
        tarFile[tarFile.length - 1] === "gz"
      ) {
        if (event.target.files[0].size > 100000000) {
          this.$alert("文件大小超出上限，请上传小于100Mb的文件！");
          this.isFile=true;
        } else {
          this.file = event.target.files[0];
          this.fileName = event.target.value.slice(12);
          this.isFile=false;
        }
      } else {
        this.$alert("上传文件类型不正确，请上传tar.gz格式的文件！");
        this.isFile=true;
      }
    },
    showdata() {
        // console.log('执行函数');
        let _this = this;
        // console.log('测试appid',sessionStorage.getItem('appid'));
        _this.$ajax.get('/v2/apps/appinfo/'+sessionStorage.getItem('appid')).then((res)=>{
            this.showData = res.data.result;
            if(!this.showData.image) {
            this.showData.image = BASE_IMAGE_URL + 'defaultApp.png';
            }
            else {
            this.showData.image =  BASE_IMAGE_URL +this.showData.image;
            }
        })
        _this.$ajax.get('/v2/apps/'+sessionStorage.getItem('appid')+'/apilist').then((res)=>{
            this.dataTableData = res.data.result;
            this.total=this.dataTableData.length;
            this.flag=true;
        });
    },
    preStep() {
      this.$router.push("/userpage/step2");
    },
    nextStep(event) {
      //审核
        let _this = this;
        let myform =this.$refs.myform
        let formdata = new FormData(myform);
        formdata.append('file',this.file);
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
            }
        };
        try {
            this.$ajax.post('/v2/apps/'+ sessionStorage.getItem('appid') +'/upload',formdata,config).then((res)=>{
                this.$ajax.put('/v2/apps/'+sessionStorage.getItem('appid')+'/step/'+3).then((res)=>{
                // this.showLoader = false;
                // HttpService.store.state.app.step = 4;
                this.$store.commit('appStep',4);
                this.$router.push("/userpage/step4");
                }).catch((err)=>{
                // this.showErrModal = true;
                // this.showLoader = false;
                this.$message.error('页面无法提交。');
                });
            }).catch((err)=>{
                this.$message.error('页面无法提交。');
                // this.showErrModal = true;
                // this.showLoader = false;
            });  
        }
        catch(err) {
            this.$message.error('页面无法提交。');
            // this.showErrModal = true;
            // this.showLoader = false;
        }
    }
  }
};
</script>
<style>
.api_list {
  /* border: 1px solid #eaeaea; */
  border-collapse: collapse;
}
.api_list > tr > td {
  padding: 10px 30px;
  border: 1px solid #ebebeb;
}
.tar_btn{
    margin-top:40px;
    text-align: left;
}
.step_box{
    display: block;
    margin: 13px 0;
}
.first_block{
    margin-top: 20px;
}
.step_box{
    font-size: 18px;
    color: #999;
}
.step_box>label{
    text-align: right;
    font-size: 18px;
    color: #666;
    display: inline-block;
    width: 97px;
}
.step_box>span{
    margin-left: 10px;
}
.step_box>img{
    margin-left: 10px;
    vertical-align: top;
}
</style>


