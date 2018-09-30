<template>
    <div class="register_box">
        <div>
            <h3>添加应用用户</h3>
            <div class="main_box" style="background:#f7f7f7;width:360px;">
                <div class="register_title">
                   <label><span class="red_point">*</span>真实姓名:</label>
                   <input type="text" v-model="username">
                </div>
                <div class="register_title">
                   <label>邮箱地址:</label>
                   <input type="text" v-model="email">
                </div>
                <div class="register_title">
                   <label><span class="red_point">*</span>手机号:</label>
                   <input type="text" v-model="phone">
                </div>
                <div class="register" @click="submit">确认</div>
            </div>
            <div class="table_binding">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <!-- <th><input type="checkbox"/>全选</th> -->
                            <th>真实姓名</th>
                            <th>邮箱地址</th>
                            <th>联系电话</th>
                            <!-- <th>用户绑定</th> -->
                        </tr>
                        <tr v-for="(item,index) in appUser" :key="index">
                            <!-- <td><input type="checkbox" /></td> -->
                            <td>{{item.username}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.mobile}}</td>
                            <!-- <td><button>绑定用户</button></td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'addAppuser',
        data(){
            return{
                username:'',
                email:'',
                phone:'',
                appUser:[]
            }
        },
        mounted(){
            this.appdata();
        },
        methods:{
            submit(){
                let _this = this;
                let obj = JSON.stringify({
                    username:this.username,
                    mobile:this.phone,
                    email:this.email,
                    password:'',
                    sex:0,
                    age:''
                })
                _this.$ajax.post('/v2/appusers/add',obj).then((res)=>{
                    if(res.status=='ok'){
                        this.$alert('添加用户成功');
                        this.appdata();
                        this.username = "";
                        this.phone = "";
                        this.email = ""
                    }
                })
            },
            appdata(){
                let _this = this;
                _this.$ajax.get('/v2/appusers/userlist').then((res)=>{
                   this.appUser = res.data.result;
                })
            },
        }
    }
</script>
<style>
.sex_box{
    margin-bottom: 25px;
}
.sex_box label{
    width: 26%;
    font-weight: 500;
    display: inline-block;
}
.sex{
    display: inline-block;
    margin-right: 40px;
 }
 .sex span{
    display: inline-block;
    margin-right: 10px;
 }
 .pw_set{
    color:#1a98ea; 
    float: right;
    margin-top: 5px;
 }
</style>


