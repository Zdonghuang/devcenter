<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="banner_customer">
            <h2>煤矿井下安全作业监测平台</h2>
        </div>
        <div class="customer_text">
            <div>
                <h3>应用场景</h3>
                <p>现有煤矿井下的作业环境主要依靠老旧有线式的瓦斯传感器进行安全监测，监控点固定，监测范围有限。本平台包含便携式安全监测仪，随矿工佩戴，通过无线传感器网络将当前环境的瓦斯气体浓度、温湿度以及矿工个人身体状况数据上传到大数据平台。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品方案</h3>
                <img src="../../static/dev_slices/WechatIMG2060.jpeg" width="70%" height="70%" class="img">
                <p>本平台包含便携式安全监测仪，随矿工佩戴，通过无线传感器网络将当前环境的瓦斯气体浓度、温湿度以及矿工个人身体状况数据上传到LeapAI.com大数据平台。本平台满足了对矿下不同地点的环境实时监测，通过物联网技术将每个矿工周围的环境数据和身体状况联系起来，通过大数据服务精准预测危险信息。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品特点</h3>
                <p>解决了传统有线传感器安装繁琐，扩展进度慢的缺点，为井下作业人员的人身安全提供数据保证，提高安全生产效率。便携式安全监测仪具有低功耗、自组网等特点，相比传统有线传感器监测的项目更加丰富，后台有大数据服务作为支撑，可以在监测的基础上提供预警信息。</p>
                <p>整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'clientCase1',
    mounted(){
        window.scrollTo(0,0);
    }
}
</script>
<style scoped>
    .img {
        margin: 0 auto;
        display: block;
    }
</style>


