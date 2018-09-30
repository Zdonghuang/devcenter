<template>
  <div>
    <div style="height:60px; background:#000; width=100%"></div>
    <div class="content_wrapper">
        <h2 class="text_aligh">一站式工业应用开发服务</h2>
        <!-- <h2 style="color:#00adee;margin-bottom:2rem;" class="text_aligh">轻松实现跨手机、浏览器、智能设备的实时通讯</h2> -->
        <table>
            <thead>
                <tr>
                    <th width="25%"></th> 
<!--                    <th width="13.5%"></th> -->
                    <th width="25%"></th>
                    <th width="25%"></th>
                    <th width="25%"></th>
<!--                    <th width="13.5%"></th> -->
                    <!-- <th width="13.5%"></th> -->
                </tr>
            </thead>
            <tbody>
                <tr class="pricing-pkg pric-one">
                    <td></td>
<!--                    <td>免费版 <br> -->
                        <!-- <span style="color:transparent;">￥0 </span> -->
<!--                    </td>-->
                    <td style="border-right:none; font-size:24px;" class="bug1"> 基础版<br>
                        <!-- <span style="color:transparent;">￥278 </span> -->
                    </td>
                    <!-- <td style="border-left:none;border-right:none;">基础 A <br>
                        <span>￥278 </span>/月
                    </td>
                    <td style="border-left:none;border-right:none;">基础 A <br>
                        <span>￥278 </span>/月
                    </td> -->
                    <td style="font-size:24px" class="bug2">专业版 <br>
                        <!-- <span style="color:transparent;">￥__ </span> -->
                    </td>
                    <td style="border-left:none; font-size:24px"  class="bug3">企业版 <br>
                        <!-- <span style="color:transparent;">￥__ </span> -->
                    </td>
<!--                    <td style="border-left:none">尊享版 <br>-->
                        <!-- <span style="color:transparent;">联系我们 </span> -->
<!--                    </td>-->
                </tr>
                <tr class="pricing-pkg pric-two">
                    <td></td>
<!--                    <td> <el-button type="primary" plain>立即开通</el-button></td>-->
                    <td colspan="1"  class="bug4"> <el-button type="primary"  class="btn1">立即开通</el-button></td>
                    <td colspan="1"  class="bug5"> <el-button type="primary"  class="btn2">立即开通</el-button></td>
                    <td colspan="1"  class="bug6"> <el-button type="primary"  class="btn3">立即开通</el-button></td>
<!--                    <td colspan="1"> <el-button type="primary" >联系我们</el-button></td>-->
                </tr>
                <tr :class="item.sectionTitle?'sub_head':''" v-for="(item,index) in tableData" :key="index">
                    <td>{{item.sectionTitle? item.sectionTitle:item.section}}</td>
<!--                    <td class="text_aligh">{{item.content1}} <i class="el-icon-check" v-if="item.freeflag"></i> </td>-->
                    <td class="text_aligh">{{item.content2}} <i class="el-icon-check" v-if="item.baseflag"></i> </td>
                    <td class="text_aligh">{{item.content3}} <i class="el-icon-check" v-if="item.professflag"></i> </td>
                    <td class="text_aligh">{{item.content4}} <i class="el-icon-check" v-if="item.enterflag"></i> </td>
<!--                    <td class="text_aligh">{{item.content5}} <i class="el-icon-check" v-if="item.vipflag"></i> </td>-->
                </tr>
            </tbody>
        </table>
    </div>
  </div>    
</template>
<script>
    export default {
      data() {
        return {
            tableData:[{
                sectionTitle:'功能'
                },{
                    section:'用户中心',
                    freeflag:true,
                    baseflag:true,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'应用开发',
                    freeflag:true,
                    baseflag:true,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'应用部署',
                    freeflag:true,
                    baseflag:true,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'应用用户管理',
                    freeflag:false,
                    baseflag:false,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'应用手机登陆',
                    freeflag:false,
                    baseflag:false,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'应用市场发布',
                    freeflag:false,
                    baseflag:false,
                    professflag:false,
                    enterflag:true,
                    vipflag:true
                },{
                    sectionTitle:'基础服务组件'
                },{
                    section:'SaaS应用框架',
                    freeflag:true,
                    baseflag:true,
                    professflag:true,
                    enterflag:true,
                    vipflag:true
                },{
                    section:'API网关',
                    content1:'10000次/月',
                    content2:'10000次/月',
                    content3:'无限制',
                    content4:'无限制',
                    content5:'无限制',
                },{
                    section:'实时数据库（共享）',
                    content1:'100MB',
                    content2:'100MB',
                    content3:'500MB',
                    content4:'2GB',
                    content5:'500MB',
                },{
                    section:'统一消息队列',
                    content1:'50000条/月',
                    content2:'50000条/月',
                    content3:'无限制',
                    content4:'无限制',
                    content5:'无限制',
                },{
                    section:'API代理',
                    content1:'1个',
                    content2:'1个',
                    content3:'可配置',
                    content4:'可配置',
                    content5:'可配置',
                },{
                    sectionTitle:'扩展能力组件',
                },{
                    section:'API沙箱',
                    content1:'无',
                    content2:'无',
                    content3:'有',
                    content4:'有',
                    content5:'有',
                },{
                    section:'FlexBroker',
                    content1:'无',
                    content2:'无',
                    content3:'有',
                    content4:'有',
                    content5:'有',
                },{
                    section:'短信验证',
                    content1:'无',
                    content2:'无',
                    content3:'每日每人6条',
                    content4:'可升级',
                    content5:'可升级',
                },{
                    section:'图片加水印',
                    content1:'无',
                    content2:'无',
                    content3:'可升级',
                    content4:'可升级',
                    content5:'可升级',
                },{
                    section:'身份验真',
                    content1:'无',
                    content2:'无',
                    content3:'可升级',
                    content4:'可升级',
                    content5:'可升级',
                },{
                    section:'RestAPI 接入',
                    content1:'无',
                    content2:'无',
                    content3:'有',
                    content4:'有',
                    content5:'有',
                },{
                    section:'公有云资源',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'有',
                    content5:'有',
                },{
                    sectionTitle:'服务',
                },{
                    section:'技术支持',
                    content1:'无',
                    content2:'无',
                    content3:'Email',
                    content4:'Email / IM',
                    content5:'Email / IM / Tel',
                },{
                    section:'服务合同',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'有',
                    content5:'有',
                },{
                    section:'异地数据备份',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'额外付费',
                    content5:'额外付费',
                },{
                    section:'实时数据库（独享）',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'额外付费',
                    content5:'额外付费',
                },{
                    section:'性能优化',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'有',
                    content5:'有',
                },{
                    section:'99.99% 可用 SLA',
                    content1:'无',
                    content2:'无',
                    content3:'无',
                    content4:'额外付费',
                    content5:'额外付费',
                },{
                    sectionTitle:'工业智能硬件'
                },{
                    section:'标准硬件',
                    content1:'',
                    content2:'',
                    content3:'均衡版',
                    content4:'超能版',
                    content5:'超能版',
                    freeflag:false,
                    baseflag:false,
                    professflag:false,
                    enterflag:false,
                    vipflag:false
                },{
                    section:'订制硬件',
                    content1:'',
                    content2:'',
                    content3:'',
                    content4:'',
                    content5:'',
                    freeflag:false,
                    baseflag:false,
                    professflag:false,
                    enterflag:true,
                    vipflag:true
                }]
        }
      }
    }
</script>
<style scoped>
.content_wrapper{
    max-width: 1200px;
    margin: 0 auto;
}
div{
    color: #444;
}
table{
    margin-bottom: 3rem;
}
table td{
    border: 1px solid #ddd;
    padding: 0 0 20px 0;
}
div>h2{
    padding: 2rem;
    font-weight:500;
    text-align: center;
}
table{
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
}
table td:nth-child(1){
    text-indent:1rem;
}
.pricing-pkg td{
    border-bottom: none;
    text-align: center;
    font-size: 1rem;
}
.pricing-pkg td:first-child{
    border: none;
}
.pricing-pkg td>span{
    font-size:1.6rem;
    font-weight:800;
}
.pricing-pkg td>button{
    width: 88px;
    height:28px ;
    border: 1px solid #fff;
    color: #fff;
    font-size: 14px;
    padding: 0;
    line-height: 28px;
}
.btn1{
  background-color: #ff9933;
}
.btn2{
  background-color: #00cc65;
}
.btn3{
  background-color: #33aeff;
}
.btn1:hover{
  background-color: #fff;
  color: black;
}
.btn2:hover{
  background-color: #fff;
  color: black;
}
.btn3:hover{
  background-color: #fff;
  color: black;
}

.pricing-pkg.pric-one td.bug1{
  padding-bottom: 8px;
  background-color: #ff9933;
  padding-top: 20px;
}
.pricing-pkg.pric-one td.bug2{
  background-color: #00cc65;
  padding-bottom: 8px;
  padding-top: 20px;
}
.pricing-pkg.pric-one td.bug3{
  padding-bottom: 8px;
  background-color: #33aeff;
  padding-top: 20px;
}
.pric-two td.bug4{
  background-color: #ff9933;
}
.pric-two td.bug5{
  background-color: #00cc65;
}
.pric-two td.bug6{
  background-color: #33aeff;
}
.pric-two td{
    border-top:none;
}
.sub_head{
    background: #ccc;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
}
.sub_head td{
    border-left:none;
    border-right:none;
}
.sub_head td:nth-child(1){
    text-indent:1rem;
    padding: 0.4rem; 
}
.text_aligh{
    text-align: center;
}

/* */
.el-icon-check {
    font-size: 1rem;
    font-weight: 800;
    color: #1a7d12
}
</style>

