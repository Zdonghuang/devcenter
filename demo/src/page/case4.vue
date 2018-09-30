<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="banner_customer">
            <h2>云终端温度控制系统</h2>
        </div>
        <div class="customer_text">
            <div>
                <h3>应用场景</h3>
                <p>许多工业重点设备设施在运行一段时间后部件就会发热，部件长时间处在发热状态，容易导致设备出现故障，影响正常业务的运作。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品方案</h3>
                <img style="margin-bottom:20px;" src="../../static/dev_slices/machine.jpeg" alt=""  width="80%" height="80%">    
                <p>运行在LeapAI.com平台上的智能机械臂降温系统能对发热部位温度进行实时监控。温度传感器将他们收集来的信号传输给控制器，控制器将数据传输到LeapAI.com云平台上的工业设备温度监控平台进行显示，报警，查询。监控平台以直观的图表和曲线方式显示温度的变化情况，当温度持续超过45°以上，在显示图中出现报警提示，同时监控平台可向现场机械手臂发出控制指令，机械手臂根据指令控制风机等设备进行降温等操作。</p>
            </div>
        </div>
        <div class="customer_text">
            <div>
                <h3>产品特点</h3>
                <p>整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'case4',
    mounted(){
        window.scrollTo(0,0);
    }
}
</script>
