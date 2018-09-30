<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="banner_customer">
            <h2>智能温室大棚监控</h2>
        </div>
            <div class="customer_text" >
                <div>
                    <h3>应用场景</h3>
                    <p>温室大棚内温度、湿度、光照强弱以及土壤的温度和含水量等因素，对温室的作物生长起着关键性作用。对于温室大棚，需要实时监控各个环境数据的变化，确保温室环境始终达到农作物最适合的要求范围。当出现异常时，可及时通知相关人员，并可自动进行相应控制，以调节室内环境。</p>
                </div>
            </div>
            <div class="customer_text" >
                <div>
                    <h3>产品方案</h3>
                    <img style="margin-bottom:20px;" src="../../static/dev_slices/farm.jpg" width="80%" height="80%">
                    <p>本系统通过包含多个环境节点，部署在大棚中，通过无线传感器、网络将当前环境的温度、湿度、二氧化碳含量等信息上传到leapAI.com平台。平台将收到的采样数据以表格、图形等形式显示，对于异常情况可进行报警，并对部分环境调节模块进行调整。解决了对于大量大棚的自动化监控需求，减少人力成本，提高生产效率。</p>
                </div>
            </div>
            <div class="customer_text" >
                <div>
                    <h3>产品特点</h3>
                    <p>整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</p>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'case1',
    mounted(){
        window.scrollTo(0,0);
    }
}
</script>
