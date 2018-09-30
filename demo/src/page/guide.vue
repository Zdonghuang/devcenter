<template>
    <div>
        <div style="height:60px; background:#000"></div>
        <div class="rule">
            <ul class="list">
                <li @click="showSectionOne" :class="{'section_part':sectionText}">联想工业智能硬件</li>
                <li @click="showSectionTwo" :class="{'section_part':!sectionText}">联想LeapAI工业互联网平台</li>
            </ul>
            <div class="section" v-show="sectionText">
                <button class="guide_btn" @click="guide_down('https://www.leapai.com/images/LeapAIHardware.pdf')">下载pdf</button>
                <h2>联想工业智能硬件</h2>
                <p>随着“中国制造2025”战略的不断推进，作为基石的大数据和工业物联网也得到蓬勃发展，与之配套的工业智能硬件也在不断地演进。</p>
                <p>联想作为中国信息技术产业和制造业的领军者，正在工业智能领域大展拳脚。发挥自身硬件研发制造的优势，结合跨越发展的大数据和工业物联网软件体系，打造出一套联想工业智能硬件。</p>
                <p>联想联合一线专业工业中央处理器厂商，按照工业标准设计制造了基于ARM平台集成运算存储工业输入输出接口的全功能嵌入式开发板，可运行Linux，Android，RTOS，WinCE等各种操作系统，在软硬件设计上完全开源，同时它与联想LeapAI，LeapIoT，LeapEdge有机结合，不再像传统开发板只局限在点，而是点，边缘，云的打通，可应用的场景更加广泛，拓展开发者的无限想象，所以我们称之为工业智能开发板。</p>
                <p>与之匹配的是联想运营的智能开发板社区和生态，无论你是是行业客户还是个人用户，无论你是否有开发需求，联想开发者社区都会像大家庭一样欢迎和鼓励大家讨论各类问题和分享经验，同时我们也会提供丰富和专业的官方支持和资源，让大家用简单的方式开发出最理想的产品。</p>
                <p>联想工业智能开发板专业于工业，但不局限于工业，在农业，科研，教育，智能家庭领域都能发挥它的能力。</p>
                <div class="imgInfo">
                    <img src="../../static/dev_slices/guide1.jpg" alt="联想工业智能开发板5708"/>
                    <div>联想工业智能开发板5708</div>
                </div>
                <h3>技术架构</h3>
                <p>联想工业智能开发板中央处理器采用德州仪器(Texas Instruments) Sitara系列AM5708型号，AM5708处理器采用ARM + DSP异构多核架构，集成ARM Cortex-A15@500M-1GHz处理器和C66x™ Floating-Point VLIW DSP@ 750MHz、两个ARM Cortex-M4的协处理器、四个支持多种工业协议的PRU-ICSS。异构多核，各专其能，协同高效，广泛应用于机器视觉、电力自动化、智能交通、医疗器械、自动分拣装置、高精度仪器仪表、高端数控系统等多种工业应用场合。</p>
                <div class="imgInfo">
                    <img src="../../static/dev_slices/guide2.jpg" alt="" style="width:700px;"/>
                </div>
                <div class="imgInfo">
                    <img src="../../static/dev_slices/guide3.jpg" alt="" style="width:500px;"/>
                </div>
                <h3>联想工业智能开源硬件系列</h3>
                <div class="hardlist">
                    <div class="item">
                        <img src="../../static/dev_slices/guide1.jpg" alt="">
                        <p>联想工业智能开发板_标准版</p>
                        <p>TI Sitara AM5708异构多核处理器</p>
                        <p>1GB DDR3L 1333高速内存</p>
                        <p>TF卡扩展存储</p>
                        <p>1个千兆以太网口</p>
                        <p>工业接口</p>
                    </div>
                    <div class="item">
                        <img src="../../static/dev_slices/2.png" alt="">
                        <p>联想工业智能开发板_专业版</p>
                        <p>TI Sitara AM5708异构多核处理器</p>
                        <p>1GB DDR3L 1333高速内存</p>
                        <p>8GB eMMC高速存储</p>
                        <p>2个千兆以太网口</p>
                        <p>工业接口</p>
                    </div>
                    <div class="item">
                        <img src="../../static/dev_slices/3.png" alt="">
                        <p>联想工业智能开发板_超能版</p>
                        <p>TI Sitara AM5748异构多核处理器</p>
                        <p>2GB DDR3L 1333高速内存</p>
                        <p>16GB eMMC高速存储</p>
                        <p>2个千兆以太网口</p>
                        <p>工业接口</p>
                    </div>
                </div>
                <div class="hardlist">
                    <div class="item">
                        <img src="../../static/dev_slices/4.png" alt="">
                        <p>联想工业边缘智能网关</p>
                        <p>均衡低功耗ARM/X86处理器</p>
                        <p>无风扇架构, 适用各种现场</p>
                        <p>丰富配置可选择</p>
                        <p>千兆以太网口,数字显示接口, 工业接口均可选配</p>
                    </div>
                    <div class="item">
                        <img src="../../static/dev_slices/6.png" alt="">
                        <p>联想工业边缘智能网关_定制版</p>
                        <p>X86/ARM处理器按需选择</p>
                        <p>外观,结构,按需定制</p>
                        <p>输入输出接口按需定制</p>
                    </div>
                    <div class="item">
                        <img src="../../static/dev_slices/5.png" alt="">
                        <p>联想工业边缘智能服务器</p>
                        <p>高性能X86/ARM处理器可选</p>
                        <p>宽温支持, 工业适配</p>
                        <p>丰富配置可选择</p>
                        <p>PCIE接口功能扩展卡, 按需定制</p>
                    </div>
                </div>
            </div>
            <div class="section" v-show="!sectionText" >
                 <button class="guide_btn" @click="guide_down('https://www.leapai.com/images/LeapAIPlatform.pdf')">下载pdf</button>
                <h2>联想LeapAI工业互联网平台</h2>
                <h3>一、了解联想LeapAI平台</h3>
                <h4>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leapAI平台定义</h4>
                <ul>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI是一个同时具备硬件开放平台和软件开放平台的综合性平台。专属面向开发者及软/硬件服务商，为有开发能力的用户提供一个工业App开发的完整解决方案，特别是降低软件开发人员在硬件开发领域的门槛。系统采用分布式微服务架构，能够为工业App提供安全、稳定、高效的运行支撑。灵活的前端框架和丰富的API能力组件，为工业App的开发提供了强有力的手段。通过LeapAI，开发者可以将工业应用快速上云，并对现有解决方案进行能力扩展，轻松应对工业应用的复杂场景和需求的不断变化。</span>
                    </li>
                </ul>
                <h4>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台架构</h4>
                <ul>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <img src="../../static/dev_slices/pp.jpg" alt="" style="width:800px;"/>
                    </li>
                </ul>
                <h4>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品规格</h4>
                <ul>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <img src="../../static/dev_slices/guide4.jpg" alt="" style="width:800px;"/>
                    </li>
                </ul>
                <h4>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名词解释</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI 智能API网关</span>
                        <br>
                        <p>用户可以调用LeapAI 智能API 网关进行业务配置，无需自行搭建 API 网关部署所需要的设备。根据LeapAI平台提供的帮助文档，用户可快速搭建所需 API 网关服务。</p>
                    </li>
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>统一消息队列UCQ</span>
                        <br>
                        <p>消息队列中间件是分布式系统中重要的组件，主要解决应用耦合，异步消息，流量削峰等问题。实现高性能，高可用，可伸缩和最终一致性架构。LeapAI平台统一使用的消息队列是Kafka。</p>
                    </li>
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>FlexBroker/API Broker</span>
                        <br>
                        <p>除了提供直接对接厂商API功能，LeapAI平台还提供灵活的代理功能直接调用多个API，以简化开发流程，提高开发效率。</p>
                    </li>
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>HyperHub API访问控制引擎</span>
                        <br>
                        <p>通过HyperHub API控制API的访问权限。</p>
                    </li>         
                </ul>
                <h4>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品优势</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>一站式开发体验极大提高了工作效率</span>
                        <br>
                        <p>LeapAI平台给开发者提供工业PaaS微服务的调用、组合、封装及来自第三方和开源社区的应用服务及多种开发工具，以便支持开发人员快速实现应用的开发与部署，并在平台上得到发布。</p>
                    </li>
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>分布式微服务架构轻松应对大数据量高并发需求</span>
                        <br>
                        <p>LeapAI平台采用行业最佳实践的Sping Cloud分布式微服务框架。</p>
                    </li>
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>对接工业领域成熟解决方案，实现能力扩展</span>
                        <br>
                        <p>对接行业领先厂商的解决方案和能力组件，大大提高特定行业特定场景的APP开发效率。</p>
                    </li>
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>结合联想工业智能硬件解决方案，提供端到端交付能力</span>
                        <br>
                    </li>         
                </ul>
                <h4>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品定价：免费使用</h4>
                <h3>二、快速入门（使用指南）</h3>
                <ul class="install">
                    <li>
                        <span>1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>安装 Node.js 8.11.x 或更新的 LTS 版. （可以通过 nvm 来同时维护多个Node.js 版本）</span>        
                    </li>
                    <li>
                        <span>2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>安装 Meteor</span>   
                        <br>                    
                        <ul>
                            <li style="margin-left: 30px;">Mac/Linux：<ul><li>curl https://install.meteor.com/ | sh</li></ul></li>
                            <li style="margin-left: 30px;">Windows： 首先安装Chocolatey, 然后用管理员命令行运行：<ul><li>choco install meteor</li></ul></li>
                        </ul>
                    </li>
                    <li>
                        <span>3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>克隆Leaplate</span>              
                        <br>         
                        <ul><li style="margin-left: 30px;">git clone https://github.com/leapai/leaplate.git</li></ul>
                    </li>
                    <li>
                        <span>4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>开始创建属于你的应用吧！</span>                       
                    </li>
                </ul> 
                <h3>三、API介绍</h3> 
                <h4>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如何搭建开发环境</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI.com应用开发推荐使用Microsoft Visual Studio Code作为代码编辑器，请前往<a href="https://code.visualstudio.com">https://code.visualstudio.com</a> 下载你的操作系统对应的版本。</span>
                    </li>
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI.com应用开发过程需要NodeJS环境，请前往<a href="https://nodejs.org/">https://nodejs.org/</a> 下载你的操作系统对应的版本，下载时请选择LTS版本（目前的版本号是8.11.4）</span>
                    </li>      
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI.com应用使用meteorjs框架。请访问<a href="">https://www.meteor.com</a> 获取meteorjs。</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.Mac/Linux： curl https://install.meteor.com/ | sh</li>
                            <li>ii.Windows： 首先安装Chocolatey, 然后用管理员命令行运行：choco install meteor</li>
                        </ul>
                    </li>      
                </ul>
                <h4>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如何建立你的第一个开发程序</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI平台为开发者提供了应用模版（leaplate），使得快速应用开发成为可能。模版使用了meteorjs应用框架和vuejs前端框架，使开发者可以用最小代价开发出美观，高效的实时应用。</span>
                    </li>
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>访问github的leaplate项目：<a href="https://github.com/leapai/leaplate">https://github.com/leapai/leaplate</a></span>
                    </li>      
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>将leaplate代码克隆到本地：git clone https://github.com/leapai/leaplate.git</span>
                    </li>      
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>安装代码依赖库：meteor npm install</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.注意：由于meteorjs使用了自己的包管理系统，所以不能直接使用：npm install</li>
                        </ul>
                    </li>
                    <li>
                        <span>e. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>运行：meteor</span>
                    </li>      
                    <li>
                        <span>f. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>打开浏览器（推荐使用Chrome），访问localhost：3000即可查看应用框架。</span>
                    </li>      
                    <li>
                        <span>g. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>在框架中添加相应代码实现业务功能。</span>
                        <br>
                        <img src="../../static/dev_slices/guide5.jpg" alt="" style="width:700px;margin-top:15px;"/>
                    </li>      
                </ul>
                <h4>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哪些是你要注意的重要API</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI通过API网关、UCQ、API Broker/FlexBroker实现从云端访问用户环境的API。返回的数据由API Broker/FlexBroker直接推送到云端的实时数据库，再通过动态数据交换协议（DDP）实现与UI同步。</span>
                    </li>
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>/appusers/login：登陆应用，获取AccessToken。用户可以通过开发者控制台管理可登陆的最终用户。</span>
                    </li>      
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>API需要在API商店里购买后，才能绑定到应用。API每次被调用时将被记录，对于引入的第三方API， LeapAI平台将有可能收取一定的费用。</span>
                    </li>      
                </ul>
                <h3>四、LeapAI.com接入流程</h3>
                <h4>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册成为LeapAI.com开发者</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style="float:none;">LeapAI通过API网关、UCQ、API Broker/FlexBroker实现从云端访问用户环境的API。返回的数据由API Broker/FlexBroker直接推送到云端的实时数据库，再通过动态数据交换协议（DDP）实现与UI同步。</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.使用LeapAI.com平台进行开发之前，您需要先注册一个LeapAI.com开发账号。</li>
                            <li>ii.注册LeapAI.com时需要您的手机号进行短信验证，设置密码后便可使用系统功能。</li>
                            <li>iii.在注册过程中，您需要查看并接受《使用协议》及《隐私政策》</li>
                            <li>iv.在创建应用并上传应用进行审核之前，您必须完善您的个人信息或所在企业的相关信息，包括您的身份证正反面的图片和营业执照的图片。系统会为上传的文件添加水印，防止文件被用于其它用途。</li>
                        </ul>
                    </li>   
                </ul>
                <h4>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册成为LeapAI.com开发者</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>在首页点击开发者控制台，进入应用开发向导</span>
                    </li>   
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style="float:none;">点击开始创建，在应用基本信息页面填写以下内容：</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.应用名称：不超过30个字符的中英文和数字，不能包含特殊字符（@#¥%），不能以下划线 _ 或数字开始。应用名称不应该与其它用户的应用相同或类似（如“微信”，“支付宝”等），否则将影响应用审核发布。</li>
                            <li>ii.应用标识：格式为反转域名（com.leaoai.app1），必须唯一。</li>
                            <li>iii.添加图标：尺寸100x100，大小不超过1MB，格式：JPG/PNG/GIF</li>
                            <li>iv.版本号：版本号由2到4段数字组成。格式为n.n/n.n.n/n.n.n.n。版本号在应用发布更新的时必须递增。</li>
                            <li>v.应用描述：填写200字以内的应用描述。</li>
                        </ul>
                    </li>   
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style="float:none;">点击下一步进入“绑定API”页面</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.LeapAI.com为开发者提供了丰富的API，您可以点击“去API商店购买更多API”或通过“API商店”菜单浏览并购买API。并在我的信息的“已购买的API”中查看。</li>
                            <li>ii.已购买的API将显示在页面左侧的可绑定API列表中，通过“选择API类别”可对列表中项目进行过滤。</li>
                            <li>iii.点击API条目的“详情”可查看API的详细信息。</li>
                            <li>iv.点击“绑定”。已绑定的API将出现在右侧的已绑定API列表中。</li>
                            <li>v.在右侧的已绑定API列表中点击“解绑”，可以解除App与API的绑定</li>
                        </ul>
                    </li>   
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style="float:none;">点击“下一步”进入“开发中”页面</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.在此页面可查看应用名称，描述，和已绑定API等信息。</li>
                            <li>ii.o如果需要可以点击“绑定API”，修改API绑定</li>
                        </ul>
                    </li>   
                </ul>
                <h4>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发App</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>参照 三.1 三.2 准备开发环境并下载项目模版</span>
                    </li>   
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>将项目名称改为与应用标识的最后一段一致（如应用标识为com.leapai.testApp1，则项目名称为testApp1）</span>
                    </li>   
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>参照开发文档，和代码示例进行App开发。</span>
                    </li>   
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>参照开发文档对App进行构建和打包，得到testApp1.tar.gz文件</span>
                    </li>   
                    <li>
                        <span>e. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>登录LeapAI.com，点击“我的信息”中“我的应用”</span>
                    </li>   
                    <li>
                        <span>f. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>找到testApp1，点击查看应用详情。</span>
                    </li>   
                    <li>
                        <span>g. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>点击“查看”按钮，跳转到“应用开发 开发中”页面</span>
                    </li>   
                    <li>
                        <span>h. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>点击“浏览”，选择testApp1.tar.gz并上传</span>
                    </li>   
                </ul>
                <h4>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布App</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>应用上传成功后，系统进入“审核中”页面</span>
                    </li>   
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>LeapAI.com运营团队将对您提交的应用进行审核，并有权决定您的应用是否能发布。</span>
                    </li>   
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>审核通过之后，LeapAI.com的运维团队将在平台上部署您的应用。</span>
                    </li>   
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>在审核过程中，您可以随时点击“撤回”取消审核流程。撤回后的App将不能重新提交。必须对App进行升级后重新提交新的版本。</span>
                    </li>   
                    <li>
                        <span>e. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>部署完成后，您可以通过“我的信息”中“我的应用”查看已发布的App。并通过App详情页面访问App。</span>
                    </li>   
                    <li>
                        <span>f. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>您可以直接在浏览器中打开App的URL进行访问。如果您不对App用户进行限制。任何访问此URL的人都可以查看App的内容并使用App的功能。</span>
                    </li>   
                    <li>
                        <span>g. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>如果您需要对App的访问用户进行限制，请参照开发文档中“如何管理App用户“部分。</span>
                    </li>   
                    <li>
                        <span>h. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>应用上线后，LeapAI.com有权根据相关法律法规或第三方的要求将应用下架。</span>
                    </li>   
                </ul>
                <h4>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新/升级App</h4>
                <ul>
                    <li>
                        <span>a. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>当您为您开发的应用增加了新功能，或修复了缺陷后，您需要重新提交App。</span>
                    </li>   
                    <li>
                        <span>b. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>通过“我的信息”中“我的应用”查看已发布的App。在App详情页面点击“升级App”</span>
                    </li>   
                    <li>
                        <span>c. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>在应用基本信息页面填写升级后App信息：</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.页面默认显示的信息与原App相同，您至少需要更改版本号之后才能进入下一步。</li>
                            <li>ii.应用名称：应用名称应尽量和已发布版本保持一致，但允许添加一些修饰文字。（例如：原App名称“KA智能制造”，新App名称“KA智能制造 – 中秋版”）</li>
                            <li>iii.应用标识： 升级后应用标识保持不变，不允许修改</li>
                            <li>iv.添加图标：可以修改</li>
                            <li>v.版本号：升级版的版本号必须递增。例如原App版本号为1.3.1，则升级版的版本号必须是1.3.2，1.4.1，2.0.0这样的形式。</li>
                            <li>vi.应用描述：可以修改</li>
                        </ul>
                    </li>   
                    <li>
                        <span>d. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>点击下一步进入“绑定API”页面</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.页面显示的API绑定信息与原App版本相同。您可以在这里修改升级后的App对API的绑定信息。</li>
                            <li>ii.在页面左侧的可绑定API列表中，点击“绑定”。已绑定的API将出现在右侧的已绑定API列表中。</li>
                            <li>iii.o在右侧的已绑定API列表中点击“解绑”，可以解除App与API的绑定。</li>
                        </ul>
                    </li>   
                    <li>
                        <span>e. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>点击“下一步”进入“开发中”页面</span>
                        <br>
                        <ul class="guide_step">
                            <li>i.在此页面可查看应用名称，描述，和已绑定API等信息。</li>
                            <li>ii.点击“浏览”，上传升级后的App程序包。点击上传，进入审核状态。</li>
                        </ul>
                    </li>   
                    <li>
                        <span>f. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>审核通过后，升级后的App将替换原有App，继续为您提供服务。</span>
                    </li>   
                </ul>
                <h3>五、开发文档下载的入口和使用教程</h3>
                <h4>相关文档可直接访问：<a href="https://github.com/leapai">https://github.com/leapai</a></h4>
                <h3>六、常见开发问题的FAQ</h3>
                <h4>常见问题可直接访问：<a href="https://github.com/leapai">https://github.com/leapai</a></h4>
                <h3>七、产品可应用到主要场景的案例介绍</h3>
                <h4>1、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公园景区人流监控</h4>
                <ul class="guide_scene">
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>当公共场所或收费场所出现人流拥堵时，极易发生推搡和踩踏事件，很多不可控制的行为因为场所的安保、收费人员不够导致局面失控的现象时有发生。“公园景区人流监控系统”是针对大批量人流进行入场控制，类似于地铁和地面上的交通管制，让人流和车流有序地正常流动。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>具体的解决方案是：在景区的的主要通道处安装人流传感器（推荐采用具备人脸识别的摄像头），统计在单位时间经过检测点的人次。传感器通过网络设施（使用以太网，无线网络，4G，NB-IoT或LoRa等协议）将数据传输到LeapAI.com云平台上。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>公园管理处的工作人员可以通过LeapAI.com网站打开公园景区人流监控系统，通过系统界面查看各检测点的人流量。每个检测点的状态由不同颜色显示：绿色表示人流量正常；橙色表示人流量增多，接近临界值，需要通过管理措施；红色表示人流量超过警戒值，必须采取紧急预案。否则可能发生踩踏等严重事件。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>有了“公园景区人流监控系统”，公园管理部门可以做到防患于未然，极大程度地减少发生重大安全事件的可能性。整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。[建议统一放在系统介绍后面]</span>
                    </li>
                </ul>
                <h4>2、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能温室大棚</h4>
                <ul class="guide_scene">
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>温室大棚内温度、湿度、光照强弱以及土壤的温度和含水量等因素，对温室的作物生长起着关键性作用。对于温室大棚，需要实时监控各个环境数据的变化，确保温室环境始终达到农作物最适合的要求范围。当出现异常时，可及时通知相关人员，并可自动进行相应控制，以调节室内环境。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>本系统通过包含多个环境节点，部署在大棚中，通过无线传感器、网络将当前环境的温度、湿度、二氧化碳含量等信息上传到leapAI.com平台。平台将收到的采样数据以表格、图形等形式显示，对于异常情况可进行报警，并对部分环境调节模块进行调整。解决了对于大量大棚的自动化监控需求，减少人力成本，提高生产效率。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>整个系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</span>
                    </li>
                </ul>
                <h4>3、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PM2.5在线监测分析平台</h4>
                <ul class="guide_scene">
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>空气质量（air quality）的好坏反映了空气污染程度，它是依据空气中污染物浓度的高低来判断的。 PM2.5即细颗粒物，它能较长时间悬浮于空气中，其在空气中含量浓度越高，就代表空气污染越严重。PM2.5在线监测分析平台运行在LeapAI.com的云平台上，目前收录了全国各个城市的PM2.5信息数据，所有数据每隔一小时自动更新一次。  PM2.5情况统计排名，通过地图方式直观地显示PM2.5空气质量最差的5个城市，便于大家直接方便了解空气质量较差城市的情况。</span>
                    </li>
                </ul>
                <h4>4、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能机械臂降温</h4>
                <ul class="guide_scene">
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>许多工业重点设备设施在运行一段时间后部件就会发热，部件长时间处在发热状态，容易导致设备出现故障，影响正常业务的运作。运行在LeapAI.com平台上的智能机械臂降温系统能对发热部位温度进行实时监控。温度传感器将他们收集来的信号传输给控制器，控制器将数据传输到LeapAI.com云平台上的工业设备温度监控平台进行显示，报警，查询。监控平台以直观的图表和曲线方式显示温度的变化情况，当温度持续超过45°以上，在显示图中出现报警提示，同时监控平台可向现场机械手臂发出控制指令，机械手臂根据指令控制风机等设备进行降温等操作。</span>
                    </li>
                </ul>
                <h4>5、&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能预测性维护</h4>
                <ul class="guide_scene">
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>随着物联网技术的创新和发展，工程制造设备变得更加高效与智能，但设备本身维护工作却仍面临巨大挑战。维护不善会使工厂的生产率降低5-20%，而计划之外的生产中断会使一些大型制造商每年损失500亿美元。传统维护模式中的故障后维护与定期维护将影响生产效率与产品质量，并大幅提高制造商的成本。随着物联网、大数据、云计算、机器学习与传感器等技术的成熟，预测性维护技术应运而生。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>所谓预测性维护，就是借助算法分析检测故障发生前的机械状态，并预测故障发生的时间。除此之外，还能够确定可延长机械使用寿命的主动性任务类型。要预测出一套设备出故障的可能性，除了从设备数据中整理出关键的指标，还要结合更多的历史经验进行分析，最终形成一个与设备对应预测性维护模型。预测性维护的复杂性在于这套基于机器学习的生产系统模型必需随着时间而改变。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>本系统通过监测普通手电筒用白炽灯泡的外部参数，温度，亮度，预测灯泡会不会在15分钟内发生故障。系统采用了监督学习的解决方案。通过对收集后的传感器数据加标签，将灯泡的状态区分为：0-15分钟内可能发生故障，15分钟至3小时之间可能发生故障和3小时内不会发生故障。我们将采集传感器的数据进行整理加工后，用其中70%的数据训练机器学习算法，再使用剩余30%的数据进行验证，从而得出了较为理想的模型。将模型应用到系统中后，可以对当前使用中的灯泡进行寿命预测。整套方案用极低的成本模拟了工业互联网领域的预测性维护技术。</span>
                    </li>
                    <li>
                        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>以上这些系统结构简单，安装，维护方便。由于采用了LeapAI.com云平台，省去了在本地部署，维护服务器硬件及操作系统软件的繁琐工作。云平台运行的应用可靠性高，可以在任何地点安全访问。LeapAI.com高效的应用框架也使得应用的开发，升级及维护变得异常轻松。</span>
                    </li>
                </ul>
            </div>            
        </div>
    </div>
</template>
<script>
export default {
  name: "rule",
  data() {
    return {
      sectionText: true
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    if (this.$route.query) {
      if (this.$route.query.two) {
        this.sectionText = false;
      } else {
        this.sectionText = true;
      }
    } else {
      this.sectionText = true;
    }
  },
  methods: {
    showSectionOne() {
      this.sectionText = true;
    },
    showSectionTwo() {
      this.sectionText = false;
    },
    guide_down(url) {
      if (!this.$store.state.isLogin) {
        this.$router.push("/login");
      } else {
        window.open(url);
      }
    }
  }
};
</script>
<style scoped>
.rule {
  width: 1200px;
  margin: 30px auto;
  margin-top: 30px;
  overflow: hidden;
}
.rule .section {
  width: 80%;
  padding-top: 30px;
  padding-left: 30px;
  color: #333;
  position: relative;
}
.rule .section .guide_btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  border: none;
  background-color: #f7f7f7;
}
.rule .section .guide_btn:hover {
  color: #39a3d4;
}
.rule .section h2 {
  text-align: left;
  margin: 15px 0;
}
.section h4 {
  margin: 15px 0;
}
.rule .list,
.rule .section {
  float: left;
}
.section > ul {
  overflow: hidden;
  padding-left: 30px;
}
.section > ul li {
  line-height: 22px;
  overflow: hidden;
}
.section > ul span:nth-child(1) {
  float: left;
  vertical-align: top;
}
.section > ul span:nth-child(2) {
  float: left;
  width: 93%;
}
.rule .list li {
  padding: 5px 10px;
  background: #b7b5b6;
  cursor: pointer;
}
.section_part {
  background: #e53e37 !important;
}
p {
  padding: 5px;
}
.imgInfo {
  margin-top: 30px;
  text-align: center;
}
.imgInfo > img {
  width: 300px;
}
.rule h3 {
  font-size: 18px;
  margin: 30px 0 20px 0;
}
.hardlist > .item {
  display: inline-block;
  width: 300px;
  margin-left: 20px;
  text-align: center;
  float: left;
  padding: 20px 0;
}
.hardlist > .item > img {
  width: 150px;
  height: 100px;
}
.hardlist > .item > p {
  padding: 2px;
}
ul > li > p {
  margin-left: 30px;
}
.section > .install {
  padding-left: 0;
}
.section > .install > li > ul {
  margin-left: 35px;
}
.section > .install > li > ul > li > ul {
  margin-left: 70px;
}
.section a {
  color: #39a3d4;
}
ul.guide_step {
  margin-left: 55px;
}
.section ul.guide_scene {
  text-indent: 28px;
  padding-left: 0;
}
</style>


