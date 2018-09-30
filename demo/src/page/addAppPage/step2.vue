<template>
    <div>
        <content class="api_box">
            <div>
                <ul>
                    <li v-for="(item,index) in showdata" :key="index">
                        <div class="des_box">
                            <span>{{item.apiname}}</span>
                            <span>¥{{item.price}}</span>
                            <p>描述：{{item.description}}</p>
                        </div>       
                        <el-button type="primary" plain @click="bindApi(item,index)">绑定</el-button>
                    </li>
                </ul>
                <ul style="min-height:68px;">
                    <li v-for="(item,index) in binddata" :key="index">
                        <div class="des_box">
                            <span>{{item.apiname}}</span>
                            <span>¥{{item.price}}</span>
                            <p>描述：{{item.description}}</p>
                        </div>       
                        <el-button type="primary" plain @click="unbindApi(item,index)">解绑</el-button>
                    </li>
                </ul>
            </div>
            <div class="btn_set">
                <el-button type="primary" plain style="float:left;" @click="preStep" >上一步</el-button>
                <el-button type="primary" plain style="float:right;" @click="submit">下一步</el-button>
            </div>
        </content>
    </div>
</template>
<script>
    export default {
        name: 'step2',
        data(){
            return {
                showdata:[],
                binddata:[],
                api:[]
            }
        },
        mounted(){
            if(this.$route.path)this.$store.commit('changeStep',1);
            this.showData();
        },
        methods:{
            // 数据展示
            showData(){
                let _this = this;
                // _this.$ajax.get('/v2/users/apilist').then((res)=>{
                //     this.showdata = res.data.result;
                // })
                _this.$ajax.get('/v2/apps/'+sessionStorage.getItem('appid')+'/apilist').then((res)=>{
                    this.binddata = res.data.result;
                })
                _this.$ajax.get('/v2/api/apilist').then((res)=>{
                    // this.showdata = res.data.result;
                    //去重数组
                    if(this.binddata){
                        for(var l = 0;l<res.data.result.length;l++){
                            for(var m = 0;m<this.binddata.length;m++){
                                if(res.data.result[l].id==this.binddata[m].id){
                                    res.data.result[l]=null;
                                    break;
                                }
                            }
                        }
                    }
                    for(var k in res.data.result) {
                        if(res.data.result[k] !== null){
                            this.showdata.push(res.data.result[k]);
                        }
                    }
                })
            },
            // 上一步
            preStep(){
                this.$router.push('/userpage/step1');
            },
            // 下一步
            submit(){
                let _this = this;
                this.$store.commit('appStep',3); //修改步骤2   
                //状态
                _this.$ajax.put('/v2/apps/'+this.$store.state.appId+'/step/'+2).then((res)=>{
                })
                this.$router.push('/userpage/step3');
                
            },
            bindApi(item,index){
                let _this = this;
                let obj = {
                    userId: sessionStorage.getItem('userid'),
                    apiId: item.id
                }
                //购买api
                _this.$ajax.post('/v2/users/buyapi',obj).then((res)=>{
                    this.api.push(item.id)
                    let obj2 = {apiIds:this.api}
                    // console.log(item);
                    _this.$ajax.post('/v2/apps/'+ sessionStorage.getItem('appid') +'/addapi',obj2).then((res)=>{
                        this.showdata.splice(index,1)
                        this.binddata.push(item); 
                    })
                })
            },
            unbindApi(item,index){
                let _this = this;
                let unbinddata = [];
                unbinddata.push(item.id)
                _this.$ajax.post('/v2/apps/' + sessionStorage.getItem('appid') + '/unbindapi',{apiIds:unbinddata}).then((res)=>{
                    this.api.splice(index,1)
                    this.showdata.push(item);
                    this.binddata.splice(index,1)
                })
                
            },
        }
    }
</script>
<style scoped>

.api_box>div{
    overflow: hidden;
}
.api_box{
    width:70%;
    margin-top: 5rem;
}
.api_box .des_box{
    width:80%;
    overflow: hidden;
    float: left;
}
.des_box p{
    margin-top:10px;
    color: #bfbfbf;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.des_box span:nth-child(1){
    font-size: 16px;
}
.des_box span:nth-child(2){
    color: #43a716;
    float:right;
}
.api_box>button{
    line-height: 20px;
    border-radius: 5px;
    margin-top:30px;
}
.api_box ul {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background: #fff;
    width: 20rem;
    min-width: 20rem;
    /* min-height:17.7rem; */
    overflow: hidden;
}
.api_box ul li{
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
    overflow: hidden;
}
.api_box ul li:hover{
    background: #ecf5ff;
}
.api_box ul li:last-child{
    border: none;
}
.api_box ul:nth-child(1){
    float: left;
}
.api_box ul:nth-child(2),.el-button--primary.is-plain{
    float: right;
}
.btn_set{
    margin-top: 30px;
}
.btn_set button{
    width:20% !important;
}
.el-button--primary.is-plain{
    width:auto;
}
ul .el-button{
    padding: 5px;
}
</style>

