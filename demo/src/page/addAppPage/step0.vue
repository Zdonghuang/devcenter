<template>
    <div class="stepbg">
        <div style="height:60px; background:#000"></div>
        <div class="step_content">
            <h3 class="step_title step_titles">应用开发<span>向导</span></h3>
            <div class="step_select">
                <div class="step_item" @click="goto('/userpage/step1')">
                    <img src="../../../static/dev_slices/step_icon.png" alt="">
                    <p>开始创建</p>
                </div>
                <div class="step_item2">
                    <img src="../../../static/dev_slices/guide_icon.png" alt="">
                    <p>开发者指南</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'step0',
    mounted(){
        sessionStorage.removeItem('appid');
    },
    methods:{
        goto(path){
            this.$router.push(path);
        }
    }
}
</script>
<style>
    .stepbg{
        background: url(../../../static/dev_slices/stepbg.png) left repeat-y;
        background-size: contain;
    }
    .step_content{
        width: 969px;
        margin: 0 auto;
        color: #333;
        text-align: center;
    }
    .step_title{
        font-size: 32px;    
        margin-top: 36px;   
    }
    .step_titles{
        margin-top: 50px;
    }
    .step_title>span{
        font-size: 20px;
        margin-left: 12px;
    }
    .step_select{
        padding: 30px 0 50px 0;
    }
    .step_select>div{
        display: inline-block;
        width: 378px;
        height: 498px;
        border-radius: 10px;
        background-color: #fff;
        font-size: 34px;
        text-align: center;
    }
    .step_select>.step_item2{
        margin-left: 200px;
    }
    .step_select>.step_item:hover{
        box-shadow:  0 1px 20px #bdb7b6;
        cursor: pointer;
    }
    .step_select>.step_item2:hover{
        box-shadow:  0 12px 20px #bdb7b6;
        cursor: pointer;
    }
    .step_item>img{
        margin-top: 130px;
    }
    .step_item2>img{
        margin-top: 130px;
    }
    .step_select>div>p{
        text-align: center;
        margin-top: 30px;
    }
</style>
