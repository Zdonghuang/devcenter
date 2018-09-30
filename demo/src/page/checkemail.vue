<template>
  <div style="gackground:#ccc" class="container">
    <div style="height:60px; background:#000"></div>
    <div class="detail">
    </div>
    <p class="content" v-if="show"><i class="el-icon-warning"></i> 请前往您的电子邮箱“{{email}}”进行激活。如未收到邮件,请点击<a style="color:blue" href="javascript:" @click="sendemail">发送电子邮件</a>再次发送。</p>
    <p class="conten" v-else>
      <i class="el-icon-success"></i>
      邮箱激活已完成，谢谢您的配合！
      <span class="time">{{count}}秒后跳转到首页</span>
    </p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        email:'',
        show:true,
        count:5
      }
    },
    created(){
      this.getEmail();
      this.checkemail();
    },
    mounted(){
    },
    methods:{
      getEmail(){
        if(sessionStorage.getItem('email')){
          this.email=sessionStorage.getItem('email');
        }
        this.$ajax.get('/v2/users/userinfo').then((res)=>{
          if(res.data.result.flag==='1'){
            this.show=false;
            this.animation();
          }
        })
      },
      sendemail(){
        let obj = {
          id : sessionStorage.getItem('userid'),
          username : sessionStorage.getItem('username'),
          email : sessionStorage.getItem('email')
        };
        if(obj.email){
          this.$ajax.post('/v2/users/useremail',obj);
          this.$alert('邮件已发送!');
        }
      },
      async checkemail(){
        let key=this.$utils.getUrlKey("key")
        if(key){
          const res = await this.$ajax.put('/v2/users/checkemail/'+key);
          if(res.data.status === 'ok'){
            this.show = false;
            this.animation();
          }else{
            switch (res.data.result) {
                  case 10018:
                    this.errMsg = "未知错误";
                    break;
                  case 50004:
                    this.errMsg = "邮箱绑定链接已过期";
                    break;
                  case 50005:
                    this.errMsg = "邮箱绑定链接校验错误";
                    break;
                  case 50006:
                    this.errMsg = "邮箱绑定参数缺失";
                    break;
                  case 50007:
                    this.errMsg = "邮箱已绑定";
                    break;
                  default:
                    this.errMsg = "激活失败";
                }
          }
        }
      },
      animation(){
        if(!this.show){
          var timer = setInterval(()=>{
            this.count--;
            if(this.count===0){
              this.$router.push('/index');
              clearInterval(timer)
            }
          },1000)
        }
      }
    }
  }
</script>
<style scoped>
.detail {
  background-image: url(../../static/homeheadbk3.jpg);
  background-size: 100% 100%;
  width: 100%;
  min-width: 1200px;
  height: 100px;
  color: #fff;
  float: none;
}
.content{
  color: rgb(94, 80, 20);
  text-align: center;
  line-height: 60px;
  margin: 70px auto 0;
  height: 60px;
  width: 98%;
  background-color: rgb(236, 233, 233);
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 4px 4px 4px #666;
  font-size: 24px;
}
.conten{
  color: rgb(94, 80, 20);
  text-align: center;
  line-height: 60px;
  width: 54%;
  margin: 70px auto 0;
  height: 60px;
  background-color: rgb(236, 233, 233);
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 4px 4px 4px #666;
  font-size: 26px;
}
.conten i{
  color: green;
}
.content i{
  color:rgb(205, 195, 50);
}
.time{
  font-size: 18px;
}
</style>
