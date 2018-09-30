<template>
    <div class="design_set">
        <div class="new_wapper" style="margin-bottom:30px;">
            <div class="api_bread">
                <p>应用设计开发</p> 
                <div class="new_pro">生成</div>
            </div>
        </div>
        <div class="design_box">
            <div class="app_left">
                <h3>应用控件</h3>
                <div class="design_content">
                    <ul>
                        <li>control1</li>
                        <li>control2</li>
                        <li>control3</li>
                        <li>control4</li>
                        <li>control5</li>
                        <li>control6</li>
                    </ul>
                </div>
            </div>
            <div class="app_right">
                <div>
                    <div class="tab-bar"></div>
                    <img src="../assets/new_page.png" alt="" width="320" height="251">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'designDev'
    }
</script>
<style>
.design_box {
    width: 86%;
    margin: 0 auto;
}
.design_set {
    color: #333;
}
.app_left {
    width:330px;
    height: 100%;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    background: #fff;
    float: left;
}
.design_content{
    padding: 10px;
}
.app_left h3{
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #bfbfbf;
}
.app_left ul{
   border: 1px solid #bfbfbf;
   border-radius: 5px;
}
.app_left ul li{
    padding: 5px;
    background: #208dc1;
    color: #fff;
    border-bottom: 1px solid #2aa9e8;
    cursor: pointer;
}
.app_left ul li:hover{
    background: #0570a4;
    border-bottom: 1px solid #2780ad;
}
.app_right {
    margin-left:20%;
    display: inline-block;
    padding: 64px 14px;
    border: 4px solid #fff;
    border-radius: 30px;
    box-shadow: 0 2px 30px rgba(0,0,0,.4);
    z-index: 120;
    box-sizing: content-box;
    width: 320px;
}
.app_right img {
    position: absolute;
    top:15%;
    left: 0;
}
.app_right>div{
    position: relative;
    height: 467px;
    background: url(https://www.apppark.cn/makeApp//update/user/43369/1397096839767_25926391.png) 0% 0% / 100% 100% no-repeat;
}
.app_right .tab-bar{
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 100%;
    background: #333;
    color: #fff;
    text-align: center;
    line-height: 20px;
}
</style>

