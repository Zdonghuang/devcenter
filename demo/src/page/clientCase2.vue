<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="banner_customer">
            <h2>冷链运输溯源监控平台</h2>
        </div>
        <div class="customer_text">
            <div>
                <h3>应用场景</h3>
                <p>特定的食品、药品以及农副产品在运输过程中需要保证在一定温度下保存，否则将影响产品的质量。很多生产企业将运输工作外包给第三方公司进行，然而我国对冷链物流行业的标准落实不到位，很多运输企业自律性差，容易导致产品在不合格的温度保存下产生质量问题。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品方案</h3>
                <img src="../../static/dev_slices/app2.jpg" width="70%" height="70%" class="img">
                <p>本产品通过将特制的监控节点与被运输产品一同放置，对产品温度、湿度、所在位置进行全程监控，并上传到LeapAI.com数据平台。本平台通过无线射频技术、传感器技术以及全球定位技术对目标产品进行监控，并通过移动数据网络将数据发送给LeapAI.com数据平台，供生产企业通过APP查看产品的冷链运输情况。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品特点</h3>
                <p>解决了产品生产企业对冷链运输的过程监控，对产品可能因保存方法不当而产生的问题进行历史追溯，查看各个时间点产品的温湿度变化，以及该时间点所在的地理位置。填补了产品从生产企业到消费者之间的冷链运输的监控空白，已数据的形式为产品的冷链运输环节提供溯源监控方案。</p>
                <p>整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'clientCase2',
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
