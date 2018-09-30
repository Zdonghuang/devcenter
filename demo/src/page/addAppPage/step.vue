<template>
    <div>
        <content style="margin-top:5rem;width:360px;">
            <div class="msg_box">
                <label class="el-form-item__label">应用名称</label>
                <span>{{showData.appname}}</span>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">应用分类</label>
                <span>生活应用</span>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">应用图标</label>
                <img :src="showData.image" alt="" width="100" height="100">
            </div>
            <div class="msg_box">
                <form method="post" enctype="multipart/form-data" id="myform">
                    <input id="fileinput" @change="uploading($event)" type="file" accept="zip/tar*">
                </form>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">应用框架</label>
                <button class="downLoad">下载</button>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">API功能</label>
                <ul class="msg_ul">
                    <li>
                        <span>api1</span> 
                    </li>
                </ul>
            </div>
            <el-button type="primary" plain style="width:auto;" @click="amendDetail">修改描述</el-button>
            <el-button type="primary" plain style="width:auto;" @click="preStep">绑定API</el-button>
            <el-button type="primary" plain style="width:auto;float:right;" @click="nextStep($event)">提交</el-button>
        </content>
    </div>
</template>
<script>
    export default {
        name:'step3',
        data(){
            return {
                showData:'',
                file:'',
                src:''
            }
        },
        mounted(){
            if(this.$route.path)this.$store.commit('changeStep',2);
            this.showdata();
            
        },
        methods:{
            showdata(){
                let _this = this;
                _this.$ajax.get('/v2/apps/appinfo/'+this.$store.state.appId).then((res)=>{
                    this.showData = res.data.result;
                })
            },
            uploading(event){
                this.file = event.target.files[0];//获取文件
                // var windowURL = window.URL || window.webkitURL;
                // //创建图片文件的url
                // this.src = windowURL.createObjectURL(event.target.files[0]);
            },
            amendDetail(){
                this.$router.push('/userpage/step1');
            },
            preStep(){
                this.$router.push('/userpage/step2');
            },
            nextStep(event){
                event.preventDefault();//取消默认行为
                let myform = document.getElementById('myform');
                let formdata = new FormData(myform);
                formdata.append('file',this.file);
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
                    }
                };
                
                let _this = this;
                _this.$ajax.post('/v2/apps/'+this.$store.state.appId+'/upload',formdata,config).then((res)=>{
                })
                _this.$ajax.post('/v2/apps/'+this.$store.state.appId+'/step'+3).then((res)=>{
                })
                this.$router.push('/userpage/step4');
            }
        }
    }
</script>
<style>
 .downLoad{
    height: 30px;
    cursor: pointer;
    padding: 0 10px;
    border-radius: 5px;
 }
 .msg_ul {
     float: left;
     background: #fff;
 }
 .msg_ul li{
     border: 1px solid #d9d9d9;
 }
</style>


