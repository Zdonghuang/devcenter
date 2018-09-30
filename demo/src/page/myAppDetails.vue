<template>
    <div>
        <detail :showinfo="showinfo">
            <div class="table_binding">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <th><input type="checkbox" />全选</th>
                            <th>真实姓名</th>
                            <th>邮箱地址</th>
                            <th>联系电话</th>
                            <th>绑定用户</th>
                        </tr>
                        <tr v-for="(item,index) in allUData">
                            <td><input type="checkbox" /></td>
                            <td>{{item.username}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.mobile}}</td>
                            <td><button>已绑定</button></td>
                        </tr>
                        <tr v-for="(item,index) in userLists" :key="index">
                            <td><input type="checkbox" /></td>
                            <td>{{item.username}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.mobile}}</td>
                            <td><button @click="userBind(item.username,index)">
                                    <span v-if="index !== indx">绑定</span>
                                    <span v-else>已绑定</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </detail>
    </div>
</template>
<script>
    import detail from '../components/appDetails.vue'
    export default {
        name: 'myAppDetails',
        data(){
            return{
                userLists:{},
                showinfo:[],
                allUData:{},//所有用户
                indx:-1,
            }
        },
        created(){
        },
        mounted(){
           this.showData();
           this.listData();
           this.allUserData();
        },
        methods:{
            showData(){
                let _this = this;
                _this.$ajax.get('/v2/apps/appinfo/'+this.$route.query.id).then((res)=>{
                    this.showinfo = res.data.result;
                })
            },
            listData(){ //已绑定
                let _this = this;
                _this.$ajax.get('/v2/appusers/userlist').then((res)=>{
                   this.userLists = res.data.result;
                })

            },
            allUserData(){
                let _this = this;
                _this.$ajax.get('/v2/apps/'+this.$route.query.id+'/userlist').then((res)=>{
                    this.allUData = res.data.result;
                    for(let i in this.userLists){
                        for(let j in this.allUData){
                            if(this.userLists[i].id== this.allUData[j].id){
                                this.userLists.splice(i,1);
                            }
                        }
                    }
                })
            },
            userBind(uname,index){
                let _this = this;
                this.indx = index;
                let obj = JSON.stringify({
                    username:uname,
                    appname:'',
                    appid:this.$route.query.id,
                })
                _this.$ajax.post('/v2/appusers/addApp',obj).then((res)=>{
                })
            }
        },
        components:{
            detail
        }
    }
</script>
<style>
 .app_bread {
     margin-top: 50px;
     overflow: hidden;
 }
 .app_bread img{
    display: inline-block;
 }
 .app_bread .app_msg{
     display: inline-block;
     color: #333;
     margin-left: 15px;
     vertical-align: top;
 }
 .star{
     height: 15px;
     width: 100px;
     background-image: url('../../static/5star.png');
     background-size: 100px;
     background-repeat: no-repeat;
     margin-top:25px;
     display: inline-block;
 }
 .app_msg span{
    display: inline-block;
 }
 .app_intro{
     margin-top: 20px;
     color: #333;
 }
</style>
