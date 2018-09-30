<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="new_wapper">
            <div class="api_bread">
                <p>我的应用</p>
            </div>
        </div>
        <content>
            <div>
                <div class="publish_job">
                    <h3 style="color: rgb(3, 113, 164);">已购买的应用</h3>
                    <ul class="app_box" style="width:86%;margin:0 auto;">
                        <li v-for="(item,index) in buyappData" :key="index">
                            <img src="../assets/appimg.jpeg" width="100" height="90" @click="showImgDetail" style="cursor:pointer;">
                            <router-link :to="{path:'/myAppDetails',query:{id:item.id}}" :title="item.appname">{{item.appname}}</router-link>
                            <p :title="item.description">{{item.description}}</p>
                        </li>
                    </ul>
                </div>
                <el-button type="primary" plain style="width:auto;" @click="buyApp">购买应用</el-button>
            </div>

            <div>
                <div class="publish_job">
                    <h3 style="color: rgb(3, 113, 164);">已创建的应用</h3>
                    <ul class="app_box" style="width:86%;margin:0 auto;">
                        <li v-for="(item,index) in createdApp" :key="index">
                            <img src="../assets/appimg.jpeg" width="100" height="90" @click="showImgDetail" style="cursor:pointer;">
                            <router-link :to="{path:'/myAppDetails',query:{id:item.id}}" :title="item.appname">{{item.appname}}</router-link>
                            <p :title="item.description">{{item.description}}</p>
                        </li>
                    </ul>
                </div>
                <el-button type="primary" plain style="width:auto;" @click="createApp">创建应用</el-button>
            </div>
        </content>
    </div>
</template>
<script>
    import appDetail from '../components/appDetails.vue'

    export default {
        name: 'myApp',
        data(){
            return{
                buyappData:[],
                createdApp:[]
            }
        },
        mounted(){
            this.showdata()
        },
        methods:{
            buyApp(){
                this.$router.push('/appStore');
            },
            createApp(){
                this.$router.push('/userpage/step1');
            },
            showdata(){
                this.$ajax.get('/v2/users/applist').then((res)=>{
                    this.buyappData = res.data.result;
                })
                this.$ajax.get('/v2/apps/createdapplist').then(res=>{
                    this.createdApp = res.data.result;
                })
            },
            showImgDetail(){
                var info = [];
                this.$ajax.get('/v2/apps/appinfo/7').then((res)=>{
                    info = res.data.result;
                })
                this.$modal.show(appDetail, {
                  showinfo: info
                }, {
                  draggable: true
                })
                //window.location.href="http://172.17.171.84:8880";
            }
        }
    }
</script>
<style>
    .app_box img{
        cursor: pointer;
    }
</style>
