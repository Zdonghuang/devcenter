<template>
    <div class="register_box">
        <div style="height:60px; background:#000"></div>

        <div>
            <h3><span @click="personIn" :class="{'font_active':personInfo}">个人用户</span> <span @click="companyIn" :class="{'font_active':companyInfo}">企业用户</span></h3>
            <div class="main_box" style="background:#f7f7f7;width:400px">
                <div v-show="personInfo">
                    <div class="register_title">
                        <label>用户名:</label>
                        <input disabled type="text" v-model="user.username">
                    </div>
                    <div class="register_title">
                        <label><span class="red_point">*</span>邮箱:</label>
                        <input type="text" v-model="user.email">
                    </div>
                    <div class="register_title">
                        <label><span class="red_point">*</span>真实姓名:</label>
                        <input type="text" v-model="user.rename">
                    </div>
                    <div class="register_title" style="margin-bottom: 5px;">
                        <label>身份证号:</label>
                        <input type="text" v-model="user.IDcard">
                    </div>
                    <p style="margin-bottom: 25px;">（若发布应用则此项必填）</p>
                    <div class="pictures-wrapper">

                      <span style="font-weight:500;">上传身份证正反面照片:</span>

                      <div class="picture-boxes-wrapper clear">
                        <div class="sex_boxs pictures-item-box-left" >
                            <el-upload
                            class="avatar-uploader"
                            :action="uploadImg"
                            :headers="headers"
                            :show-file-list="false"
                            :on-success="handlePersonalIDSuccessFront"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="frontIdCardImageUrl" :src="frontIdCardImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>

                        <div class="sex_boxs pictures-item-box-right">
                            <el-upload
                            class="avatar-uploader"
                            :action="uploadImg"
                            :headers="headers"
                            :show-file-list="false"
                            :on-success="handlePersonalIDSuccessBack"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="backIdCardImageUrl" :src="backIdCardImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                      </div>

                      <div class="picture-box-tip">
                        <p style="margin-bottom: 25px;">（只能上传jpg/png/gif文件，且不超过2MB）</p>
                      </div>
                    </div>
                    
                    <div class="register_title">
                        <label>QQ:</label>
                        <input type="text" v-model="user.qq">
                    </div>
                </div>
                <div v-show="companyInfo">
                    <div class="register_title">
                        <label>用户名:</label>
                        <input disabled type="text" v-model="user.username">
                    </div>
                    <div class="register_title">
                        <label><span class="red_point">*</span>邮箱:</label>
                        <input type="text" v-model="user.email">
                    </div>
                    <div class="register_title">
                        <label><span class="red_point">*</span>真实姓名:</label>
                        <input type="text" v-model="user.rename">
                    </div>
                    <div class="register_title">
                        <label><span class="red_point">*</span>职位:</label>
                        <input type="text" v-model="user.job">
                    </div>
                    <div class="register_title" style="margin-bottom: 5px;">
                        <label>企业名称:</label>
                        <input type="text" v-model="user.company">
                    </div>
                    <p style="margin-bottom: 25px;">（若发布应用则此项必填）</p>
                    <span style="font-weight:500;">企业营业执照照片:</span>
                    <div class="sex_boxs" style="margin-top:10px;margin-bottom:5px;">
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadImg"
                        :headers="headers"
                        :show-file-list="false"
                        :on-success="handleCompanyLicenseSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <p slot="tip" class="picture-box-tip" style="color:#333;margin-bottom: 15px;">（只能上传jpg/png/gif文件，且不超过2MB）</p>
                    <br>
                    <div class="register_title">
                        <label>QQ:</label>
                        <input type="text" v-model="user.qq">
                    </div>
                </div>
                <div class="sex_boxs2">
                        <label>应用场景:</label><br><br>
                        <div class="sex"><input style="margin-left:10px;margin-bottom:10px" type="radio" id="scene2a" value="1" v-model="user.scene"><label style="margin-left:10px;margin-bottom:10px" for="scene2a">智能生产线</label></div>
                        <div class="sex"><input style="margin-left:10px;margin-bottom:10px" type="radio" id="scene2b" value="2" v-model="user.scene"><label style="margin-left:10px;margin-bottom:10px" for="scene2b">预测性维护</label></div>
                        <div class="sex"><input style="margin-left:10px;margin-bottom:10px" type="radio" id="scene2c" value="3" v-model="user.scene"><label style="margin-left:10px;margin-bottom:10px" for="scene2c">智慧城市</label></div>
                        <div class="sex"><input style="margin-left:10px;margin-bottom:10px" type="radio" id="scene2d" value="4" v-model="user.scene"><label style="margin-left:10px;margin-bottom:10px" for="scene2d">IoT教学/科研</label></div>
                        <div class="sex"><input style="margin-left:10px;margin-bottom:10px" type="radio" id="scene2e" value="5" v-model="user.scene"><label style="margin-left:10px;margin-bottom:10px" for="scene2e">其它</label></div>
                    </div>
                <div class="register" @click="putInfo" :class="{'set_bottom':personInfo}">确认</div>
                <router-link to="/amendPw" class="pw_set"> 修改密码 >></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "personInfo",
  data() {
    return {
      user: {
        id: "",
        username: "",
        email: "",
        rename: "",
        IDcard: "",
        qq: "",
        scene: "1",
        job: "",
        company: "",
        idCardPic: {
          front: {
            name: "",
            url: ""
          },
          back: {
            name: "",
            url: ""
          }
        },
        companyLicensePic: ""
      },
      imageUrl: "",
      uploadImg: "",
      personInfo: true,
      companyInfo: false,
      disabled: true,
      clientHeight: "",
    };
  },
  mounted() {
    this.getInfo();
    this.uploadImg = BASE_URL + "v2/users/uploadimagewithwatermark";
  },
  computed: {
    headers() {
      return {
        Authorization: this.$store.state.usertoken
      };
    },
    frontIdCardImageUrl() {
      return this.user.idCardPic.front.url;
    },
    backIdCardImageUrl() {
      return this.user.idCardPic.back.url;
    }
  },
  methods: {
    personIn() {
      this.personInfo = true;
      this.companyInfo = false;
    },
    companyIn() {
      this.personInfo = false;
      this.companyInfo = true;
    },
    handlePersonalIDSuccessFront(res, file, list) {
      if (res.status == "ok") {
        this.user.idCardPic.front = {
          name: file.name,
          url: res.result
        };
      } else {
        this.$message.error("上传图片失败!");
      }
    },
    handlePersonalIDSuccessBack(res, file, list) {
      if (res.status == "ok") {
        this.user.idCardPic.back = {
          name: file.name,
          url: res.result
        };
      } else {
        this.$message.error("上传图片失败!");
      }
    },
    handleCompanyLicenseSuccess(res, file, list) {
      if (res.status == "ok") {
        this.imageUrl = res.result;
        this.user.companyLicensePic = res.result;
      } else {
        this.$message.error("上传图片失败!");
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isGIF = file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;

      const unsupportImage = !isJPG && !isPNG && !isGIF;
      if (unsupportImage) {
        this.$message.error("上传图片只能是 JPG/PNG/GIF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return !unsupportImage && isLt2M;
    },
    regEmail(val) {
      if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          val
        )
      ) {
        return "";
      } else {
        return val;
      }
    },
    getInfo() {
      let _this = this;
      _this.$ajax.get("/v2/users/userinfo").then(res => {
        this.user.email = res.data.result.email;
        this.user.username = res.data.result.username;
        this.user.rename = res.data.result.fullname;
        this.user.id = res.data.result.id;
        let ext = JSON.parse(res.data.result.extend)?JSON.parse(res.data.result.extend):{};
        this.user.IDcard = ext.IDcard;
        this.user.qq = ext.qq;
        this.user.scene = ext.scene;
        this.user.job = ext.job;
        this.user.company = ext.company;
        if (ext.companyLicensePic) {
          this.user.companyLicensePic = ext.companyLicensePic;
          this.imageUrl = this.user.companyLicensePic;
        }
        if (ext.personalIdPic) {
          if(ext.personalIdPic[0]) {
            this.user.idCardPic.front = ext.personalIdPic[0];
          }
          if(ext.personalIdPic[1]) {
            this.user.idCardPic.back = ext.personalIdPic[1];
          }
        }
        // console.log(ext)
        // console.log(this.user)
      });
    },
    putInfo() {
      let _this = this;
      let ext = {
        IDcard: this.user.IDcard,
        qq: this.user.qq,
        scene: this.user.scene,
        job: this.user.job,
        company: this.user.company,
        companyLicensePic: this.user.companyLicensePic,
        personalIdPic: [this.user.idCardPic.front, this.user.idCardPic.back]
      };
      let obj = {
        id: this.user.id,
        email: this.regEmail(this.user.email),
        username: this.user.username,
        fullname: this.user.rename,
        extend: JSON.stringify(ext)
      };
      let job = false;
      if (this.companyInfo == true && ext.job != "") {
        job = true;
      }
      if (this.companyInfo == true && ext.job == "") {
        job = false;
      }
      if (this.companyInfo == false) {
        job = true;
      }
      if (obj.email != "" && obj.fullname != "" && job) {
        sessionStorage.setItem('email',obj.email);
        _this.$ajax
          .put("/v2/users/userinfo", obj)
          .then(res => {
            if (res.data.status == "ok") {
              let checkemailobj = {
                id: this.user.id,
                username: this.user.username,
                email: this.user.email,
              }
              this.$store.commit("setUserInfoCompleted", true);
                this.$ajax.post('/v2/users/useremail',checkemailobj).then((res)=>{
                  if(res.data.result.flag===null||res.data.result.flag==='0'||res.data.result!==50007){
                    this.$router.push("/checkemail");
                  }else{
                    this.$router.push("/index");
                  }
                })
            }else{
              switch(res.data.result){
                case 10003:
                  this.$alert("邮箱已被其他用户绑定,请更换其他邮箱!");
                break;
              }
            }
          })
          .catch(err => {
            console.log("err= " + err);
            this.$alert("网页提交失败");
          });
      } else if (obj.email == "" && !obj.email) {
        this.$message({
          message: "请输入正确的邮箱",
          duration: 3000
        });
      } else if (obj.fullname == "" && !obj.fullname) {
        this.$message({
          message: "请输入正确的真实姓名",
          duration: 3000
        });
      } else if (this.companyInfo == true && ext.job == "") {
        this.$message({
          message: "请输入正确的职位",
          duration: 3000
        });
      }
    }
  }
};
</script>
<style>
.set_bottom {
  margin-bottom: 28px;
}
.register_box h3 > span {
  cursor: pointer;
  padding: 0 1rem;
}
.sex_boxs2 {
  margin-bottom: 0px;
}
.sex_boxs {
  margin-bottom: 0px;
}
.sex_boxs label {
  width: 20%;
  font-weight: 500;
  display: inline-block;
}
.sex {
  display: inline-block;
  /* margin-right: 20px; */
  width: 130px;
}
.sex input {
  margin-left: 5px;
}
.sex span {
  margin-top: 10px;
  display: inline-block;
  margin-left: 2px;
  margin-right: 30px;
}
.sex-box2 div label {
  margin-top: 10px;
  display: inline-block;
  margin-right: 10px;
}
.pw_set {
  color: #1a98ea;
  float: right;
}
.sex_boxs .avatar-uploader {
  float: none !important;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/*  */
.font_active {
  color: #0571a4;
}
.pictures-item-box-left {
  float: left;
}
.pictures-item-box-right {
  float: left;
  margin-left: 25px;
}
/* .pictures-wrapper {
  height: 280px;
} */
.picture-boxes-wrapper {
  margin-top: 10px;
  margin-bottom: 5px;
  /* height: 130px; */
}
.clear:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clear{zoom:1}
</style>
