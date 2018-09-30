<template>
    <div>
        <!-- <div class="new_wapper">
            <div class="api_bread">
                <p>API分类</p>
                <div class="search">
                    <input type="text" placeholder="输入想要检索的API">
                    <span>搜索</span>
                </div>
            </div>
        </div> -->

        <iframe src="https://dev.leapai.com/apidocs" width="100%" height="800" frameborder="0" scrolling="auto" id="iframe"></iframe>
    </div>
</template>
<script>
    export default {
        name: 'api',
        data(){
            return{}
        },
        mounted(){
            var iframe = document.getElementById('iframe').contentWindow;
        },
        methods:{
        }
    }
</script>
<style>
    .search{
        float: right;
        border: 1px solid #c9c9c9;
        display: block;
        background-color: white;
        border-radius: 16px;
        padding-left: 15px;
    }
    .search input{
        float: left;
        width: 56px;
        padding-right: 15px;
        font-size: 12px;
        overflow: hidden;
        height: 32px;
        line-height: 32px;
        border: 0;
        box-shadow: none;
        background-color: transparent;
        width: 160px;
        cursor: text;
    }
    .search span{
        display: inline-block;
        height: 32px;
        line-height: 32px;
        padding: 0 7px;
        border-left: 1px solid #ccc;
        cursor: pointer;
    }
</style>
