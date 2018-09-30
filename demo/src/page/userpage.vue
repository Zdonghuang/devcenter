<template>
    <div >
      <div style="height:60px; background:#000"></div>
      <div class="new_wapper">
        <el-steps :active="this.$store.state.active" finish-status="success">
            <el-step title="基本信息"></el-step>
            <el-step title="绑定API"></el-step>
            <el-step title="开发中"></el-step>
            <el-step title="审核中"></el-step>
            <el-step title="上线"></el-step>
        </el-steps>
      </div>
      <content>
          <keep-alive>
                <router-view></router-view> 
          </keep-alive>
      </content>
    </div>
</template>
<script>

export default {
  name: 'userpage',
  data(){
    return{

    }
  },
  mounted() {
  },
  methods:{
   
  },
  watch: {
    '$route' (to, from) {
        if(to.name=='step1'){
            this.$store.commit('changeStep',0);
        }else if(to.name=='step2'){
            this.$store.commit('changeStep',1);
        }else if(to.name=='step3'){
            this.$store.commit('changeStep',2);
        }else if(to.name=='step4'){
            this.$store.commit('changeStep',3);
        }else if(to.name=='step5'){
            this.$store.commit('changeStep',4);
        }
    }
  }
}
</script>
<style>
/* 创建项目 */
.show_font{
    display: block;
    padding: 10px 20px;
}
.all_product{
    margin-top:20px;
    overflow: hidden;
}
.product{
    background: #fff;
    width: 375px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding:10px;
    float: left;
    margin-left: 10px;
    margin-bottom: 15px;
    position: relative;
}
.bread{
    padding-top:12px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    font-size: 16px;
}
.bread:hover .delApp{
    display: block;
}
.bread>span:nth-child(1){
    display: inline-block;
    padding-bottom:14px; 
    text-indent: 10px;
}
.delApp{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: rgba(85, 142, 189, 0.75);
    cursor: pointer;
    display: none; 
    border-radius: 4px 4px 0 0;
}
.delApp>span{
    text-align: center;
    display: block;
    line-height: 24px;
    color: #fff;
    font-size: 12px;
}
.product>span{
    display: block;
    padding: 15px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}
.product ul{
    padding: 15px;
}
.product ul li{
    margin-bottom:10px; 
}
.product ul li span:nth-child(1){
    color: #999;
    display: inline-block;
    width:80px;
    text-align: right;
}
.product:hover{
    box-shadow: #bdb7b6 0 1px 20px;
}
/* 弹出框 */
.app_title{
    border-bottom: 1px solid #ccc;
    text-indent: 15px;
    padding-bottom: 15px;
}
/* 创建app */
.content_box{
    overflow: hidden;
    margin-top: 20px;
    padding: 16px 16px; 
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
}
.content_box h2{
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.kind,.app_name{
    overflow: hidden;
    margin-bottom: 20px;
}
.kind label, .app_name label, .project label,.app_choose label{
    width: 15%;
    display: inline-block;
}
.app_name input {
    width:358px;
}
.choose_kind{
    float: left;
}
.app_choose #choose_one{
    width:180px;
    height: 32px;
    border: 1px solid #bfbfbf;
}
.choose_kind select{
    margin-right: 15px;
    background: #fff;
    width: 140px;
    height: 28px;
    font-size: 13px;
    outline: none;
}
.app_name input{
    width: 140px;
    height: 28px;
    border: 1px solid #bfbfbf;
    color: #888;
    text-indent: 20px;
    outline: 0;
    font-weight: none;
    border-radius:5px;
}
.project{
    overflow: hidden;
    position: relative;
}
.product_amend{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0371A4;
}
.amend_title{
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #0371a4;
    float: right;
    margin-right: 10px;
}
.pro_lists ul li{
    float: left;
    padding: 20px;
    width:20%;
    height: 100px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background: #e0e0e0;
    margin-right: 24px;
    border-radius: 5px;
    cursor: pointer;
}
.pro_lists ul li:hover{
    background: #3ca0ce;
}
.save{
    height: 40px;
    width: 10%;
    background: #0371a4;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.detail{
    color:#0371a4;
    float: right;
}
@media screen and (max-width: 765px){
  .new_wapper{
    margin-top: 60px;
  }
  .new_pro{
    padding: 0 5px;
    width:auto;
  }
  .app_choose #choose_one{
      width: auto;
      border: 1px solid #bfbfbf;
  }
  .app_name label, .app_choose label{
      width: auto;
  }
  .product{
      width: auto;
  }
  .media_code{
      display: inline-block;
      width: 67%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: text-top;
  }
}
</style>

