<template>
    <div class="register_box">
        <div>
            <h3>应用信息</h3>
            <div class="main_box" style="background:#fff;width:360px;">
                <ul class="info_list">
                    <li>
                        <label >应用名称：</label> <span>app1</span>
                    </li>
                    <li>
                        <label>应用类型:</label> 
                        <span>应用软件</span>
                    </li>
                    <li>
                        <label >应用平台</label>
                        <span>ios</span>
                    </li>
                    <li>
                        <label>技术方案:</label> 
                        <span>Wi-Fi/移动网络方案</span>
                    </li>
                    <li>
                        <label>App ID:</label> 
                        <span>b1eb707fe67445c8bf83fcde1344563d</span>
                    </li>
                    <li>
                        <label>App Key:</label> 
                        <span>b1eb707fe67445c8bf83fcde1479cc4d</span>
                    </li>
                    <li>
                        <label>创建时间:</label> 
                        <span>2018-06-09</span>
                    </li>
                    <li>
                        <label>描述:</label> 
                        <span>无</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'detailapp'
    }
</script>
<style>
.info_list li {
    margin-bottom: 15px;
}
 .info_list li label{
    display: inline-block;
    width: 20%;
    color: #999;
 }
</style>
