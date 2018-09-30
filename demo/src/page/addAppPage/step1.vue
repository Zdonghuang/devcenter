<template>
    <div>
        <h2 style="margin-top:36px;">应用开发 <span style="font-size:18px;">基本信息</span></h2>
        <el-form ref="form" :model="form" :rules="rules" >
            <el-form-item label="" prop="name">
                <el-input v-model="form.name" placeholder="应用名称*" :change="validate()"></el-input>
            </el-form-item>
            <el-form-item label="" prop="bundleid">
                <el-input v-model="form.bundleid" placeholder="应用标识*" :change="validate()"></el-input>
            </el-form-item>
            <el-form-item>
                <label class="el-form-item__label">添加图标  <span class="step1_img">( 图标尺寸100*100&nbsp;上传图标只能是 JPG 格式! &nbsp;上传图标大小不能超过 1M! )</span></label>
                <el-upload
                    class="avatar-uploader"
                    action="http://172.17.171.84:8040/auth-center/v2/apps/uploadimage"
                    :headers="headers"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item >
            <el-form-item label="版本号" prop="level">
                <el-input v-model="form.level" placeholder="版本号" :change="validate()"></el-input>
            </el-form-item>
            <el-form-item label="应用描述" prop="desc">
                <el-input type="textarea" v-model="form.desc" width="500" height="140" :change="validate()"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :disabled="validatble" >下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      let validateBundleid = (rule, value, callback)=>{
        if(!(/^([a-zA-Z0-9]{1,62})\.([a-zA-Z0-9]{1,62})\.([a-zA-Z0-9]{1,62})$/.test(value)) ) callback(new Error('请输入正确的应用标识（com.example.app）'));
      }
      let validateLevel = (rule, value, callback)=>{
       if (!(/^([0-9]+)\.([0-9]+)(\.[0-9]){0,}$/.test(value)) ) callback(new Error('请输入正确的版本号，例如：1.0，1.0.0，1.0.0.0'));
      }
      return {
        form: {
          appId:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          desc: '',
          bundleid:'',
          level:'',
          img:"defaultApp.png",
          imageUrl:BASE_IMAGE_URL + 'defaultApp.png'
        },
        //上传图片添加token
        headers:{
          Authorization:sessionStorage.getItem('token')
        },
        commitFail: "页面无法提交。",  //错误信息
        /***** 表单验证 *****/
        rules:{
          name:[
            {
              required: true,
              message:'请输入应用名称',
              trigger:'blur'
          }],
          bundleid:[{
              required: true,
              message:'应用标识不能为空',
              trigger:'blur'
          },{
            validator:validateBundleid,
            trigger:'blur'
          }],
          level:[
            {
              required: true,
              message:'版本号不能为空',
              trigger:'blur'
            },{
              validator: validateLevel,
              trigger:'blur'
            }
          ],
          desc:[{
            max:200,
            message:'应用描述应在200字以内',
            trigger:'blur'
          }]
        },
        validatble:true
      }
    },
    mounted(){
      
    },
    computed:{
     
    },
    methods: {
      //信息验证
      validate(){
        if ((this.form.desc.length<=200)
        && (this.form.name && /^([a-zA-Z0-9]{1,62})\.([a-zA-Z0-9]{1,62})\.([a-zA-Z0-9]{1,62})$/.test(this.form.bundleid)
        && /^([0-9]+)\.([0-9]+)(\.[0-9]){0,}$/.test(this.form.level)) ){
          this.validatble =  false //显示
        }else{
          this.validatble =  true
        }
      },
      uploadImageUrl() {
        return BASE_IMAGE_URL+ this.img;
      },
      showData(item) {
        this.appId = item.id;
        this.appname = item.appname;
        this.bundleid = item.bundleId;
        this.disabled = true;
        this.level = this.$route.query.id ? "" : item.version;
        this.text = item.description;
        this.img = item.image.result ? item.image : "defaultApp.png";
        this.imageUrl = this.getImageUrl();
      },
      fetchData() {
        let appid = this.$route.query.id
          ? this.$route.query.id
          : sessionStorage.getItem("appid");
        if (appid) {
          this.$ajax.get("/v2/apps/appinfo/" + appid).then((res) => {
            this.showData(res.data.result);
            // this.oldVersion = res.data.result.version;
            // this.oldBundleId = res.data.result.bundleId;
          });
        }
      },
      //提交app信息（下一步）
      onSubmit() {
        let _this = this;
        let json = JSON.stringify({
          appId:'',
          appPath:'',
          appSecret:'',
          appUrl:'',
          bundleId: this.form.bundleid,
          appname:this.form.name,
          category:'',
          id:this.form.appId,
          image:this.form.img.result,
          description:this.form.desc,
          state: 1,
          version: this.form.level});

        if(sessionStorage.getItem("appid")){
            _this.$ajax.put("/v2/apps/update", json).then((res)=>{      //应用信息修改
                this.$store.commit('appStep',2); //修改步骤2
                this.$router.push("/userpage/step2");
            }).catch((err)=>{
              this.$message.error('页面无法提交。');
            })
        }else{
          //添加app信息
          _this.$ajax.post('/v2/apps/add',json).then((res)=>{
            if (res.data.status == "error"){
              switch (res.data.result) {
                    case 20001:
                      this.$message.error = "应用名称已存在"
                      break;
                    case 20002:
                      this.$message.error = "应用标识已存在";
                      break;
                    case 20003:
                      this.$message.error = "应用标识和版本号已存在";
                      break;
                    case 20004:
                      this.$message.error = "应用名称不符合要求";
                      break;
                    case 20005:
                      this.$message.error = "应用标识不符合要求";
                      break;
                    case 20006:
                      this.$message.error = "版本号不符合要求";
                      break;
                    default:
                      this.$message.error = "创建失败";
              }
            }else{
              let newAppId = res.data.result.id;
              this.$store.commit('idSet',res.data.result.id)
              sessionStorage.setItem('appid',res.data.result.id);
              //状态
              _this.$ajax.put('/v2/apps/'+newAppId+'/step/'+1).then((res)=>{
              })
              this.$router.push('/userpage/step2');
            }
          })

        }

      },
      handleAvatarSuccess(res, file) {
        this.form.img = res;
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 1;
        let _this = this;
        if (!/(gif|jpg|jpeg|GIF|JPG|png)/.test(file.type)) {
          this.$message.error('上传图片只能是 JPG、GIF和PNG格式!');
        } else if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        } 
        // return isJPG && isLt2M;
      },
    },
  }
</script>
<style scoped>
.el-form-item__label{
  float:none;
  font-size:20px;
}
.step1_img{
  font-size:13px;
  color: #999;
  margin-left:10px;
}
.avatar-uploader{
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px !important;
    height: 100px !important;
    display: block;
  }
</style>
