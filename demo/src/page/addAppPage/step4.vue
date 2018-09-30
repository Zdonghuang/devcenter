<template>
    <div>
        <content style="margin-top:5rem;margin-bottom:5rem;width:1000px;">
            <h3>应用开发<span style="font-size:15px;margin-left:20px;">{{showData.state == 4 ? '已审核通过' : '审核中'}}</span></h3>
            <div class="msg_box">
                <label class="el-form-item__label">应用名称</label>
                <span>{{showData.appname}}</span>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">应用描述</label>
                <span>{{showData.description}}</span>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">AppId</label>
                <span>{{showData.appId}}</span>
            </div>
            <!-- <div class="msg_box">
                <label class="el-form-item__label">应用分类</label>
                <span>生活应用</span>
            </div> -->
            <div class="msg_box">
                <label class="el-form-item__label">应用标识</label>
                <span>{{showData.bundleId}}</span>
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">应用图标</label>
                <img :src="showData.image" alt="" width="100" height="100">
            </div>
            <div class="msg_box">
                <label class="el-form-item__label">绑定的API</label>
            </div>
            <BindingApi :bindingApi="dataTableData" :total="total" v-if="flag"></BindingApi>
            <el-button type="primary" plain style="width:auto;margin-top:20px;" @click="preStep"  v-if="showData.state==2" v-loading.fullscreen.lock="fullscreenLoading">撤回</el-button>
            <el-button type="primary" plain style="width:auto;margin-top:20px;float:right;" @click="goState" v-if="(isloaded)&&(showData.state!=2)">查看</el-button>
        </content>
    </div>
</template>
<script>
    import BindingApi from '../../components/bindingApi';
    export default {
        name:'step4',
        data(){
            return{
                 showdata:'',
                 dataTableData:[],
                 total:0,
                 flag: false,
                 fullscreenLoading:false,
                 isloaded:false
            }
        },
        components:{
            BindingApi
        },
        mounted(){
            // if(this.$route.path)this.$store.commit('changeStep',4);
            this.showData();
        },
        methods:{
            showData(){
                let _this = this;
                // _this.$ajax.get('/v2/apps/appinfo/'+1400).then((res)=>{
                _this.$ajax.get('/v2/apps/appinfo/'+sessionStorage.getItem('appid')).then((res)=>{
                    this.showData = res.data.result;
                    this.isloaded=true;
                    if(!this.showData.image) {
                    this.showData.image = BASE_IMAGE_URL +'defaultApp.png';
                    }
                    else {
                    // this.showData.image = HttpService.store.state.app.config.api.baseImageUrl + this.showData.image;
                    this.showData.image =  BASE_IMAGE_URL + this.showData.image;
                    }
                })
                _this.$ajax.get('/v2/apps/'+sessionStorage.getItem('appid')+'/apilist').then((res)=>{
                // _this.$ajax.get('/v2/apps/'+1400+'/apilist').then((res)=>{
                    this.dataTableData = res.data.result;
                    this.total=this.dataTableData.length;
                    this.flag=true;
                });
            },
            timeLine(){

            },
            gostate(){
                // this.$ajax.put('/v2/apps/'+sessionStorage.getItem('appid')+'/step/'+4).then((res)=>{
                // })
                // HttpService.store.state.app.step = 5;

                // this.$router.push({
                // path:'appStoreDetails',
                // query:{id:sessionStorage.getItem('appid')}
                // });
                this.$ajax.put('/v2/apps/'+sessionStorage.getItem('appid')+'/step/'+4).then((res)=>{
                })
                this.$store.commit('appStep',5);
                this.$router.push("/myapp");
            },
            preStep(){//撤回
                // let _this = this;
                // _this.$ajax.post('/v2/apps/'+this.$store.state.appId+'/step'+6).then((res)=>{
                    
                // })
                // if(this.$route.path)this.$store.commit('changeStep',5);
                this.$confirm('撤回后，当前应用将不能继续创建，您可以重新创建新应用或升级此应用。', '确定要撤回吗？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.onRevokeOk();
                // this.$message({
                //     type: 'success',
                //     message: '撤回成功!'
                // });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消撤回'
                });          
                });
            },
            onRevokeOk() {
                this.showWait = true;
                this.$ajax.put('/v2/apps/'+sessionStorage.getItem('appid')+'/updatestatetorecall').then((res)=>{
                // this.$ajax.put('/v2/apps/'+1400+'/updatestatetorecall').then((res)=>{
                if(res.data.status=="ok"){
                    var url = '/v2/apps/'+sessionStorage.getItem('appid')+'/step/'+1;
                    // var url = '/v2/apps/'+1400+'/step/'+1;
                    this.$ajax.put(url).then((res)=>{
                    if(res.status==200) {
                        // this.showWait = false;
                        // this.showModal = !this.showModal
                        this.$router.push("/myapp");
                    }
                    else {
                         this.$message.error('页面无法提交。');
                        // this.showWait = false;
                        // this.showModal = !this.showModal
                    }
                    }).catch((err)=>{
                         this.$message.error('页面无法提交。');
                        // this.showWait = false;
                        // this.showModal = !this.showModal
                    });
                }
                })
            
            },
        }
    }
</script>

