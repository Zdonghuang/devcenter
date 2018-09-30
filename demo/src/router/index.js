import Vue from "vue";
import Router from "vue-router";

import Home from "../App.vue";
import login from "../login.vue"; //登陆页
import register from "@/page/register.vue"; //注册页
import userpage from "@/page/userpage.vue"; //应用列表
import index from "@/page/index.vue"; //首页
import companyproof from "@/page/companyProof.vue"; //企业认证平台
import companymaintain from "@/page/companymaintain.vue"; //企业用户维护页面
import api from "@/page/api.vue"; //api分类管理
import detailapp from "@/page/detailapp.vue"; //应用详情
import designDev from "@/page/designDev.vue"; //应用设计开发
import personInfo from "@/page/personInfo.vue"; //个人信息
import amendPw from "@/page/amendPw.vue"; //修改密码
import myApp from "@/page/myApp.vue"; //我的应用
import appStore from "@/page/appStore.vue"; //应用商店
import myAppDetails from "@/page/myAppDetails.vue"; //我的应用详情页（已购买）
import appStoreDetails from "@/page/appStoreDetails.vue"; //应用商店应用详情页
import popup from "../page/popup.vue";
import addAppuser from "@/page/addAppuser.vue"; //添加个人用户管理
import appDevelop from "@/page/appDevelop.vue"; //App 开发平台
import resetPwd from "@/page/resetPwd.vue"; //重置密码页
import quickStart from "@/page/quickStart.vue";
import rule from "../page/rule.vue"; //法律条款
import case1 from "../page/case1.vue"; //案例一
import case2 from "../page/case2.vue"; //案例二
import case3 from "../page/case3.vue"; //案例三
import case4 from "../page/case4.vue"; //案例四
import case5 from "../page/case5.vue"; //案例五
import clientCase1 from "../page/clientCase1.vue"; //煤矿app
import clientCase2 from "../page/clientCase2.vue"; //冷链app
import clientCase3 from "../page/clientCase3.vue"; //智能钥匙app
import clientCase4 from "../page/clientCase4.vue"; //智能钥匙app
import customerCase from "../page/customerCase.vue"; //天泽智云案例解析


import step0 from "../page/addAppPage/step0.vue"; //步骤零

// userpage子页面
import step1 from "../page/addAppPage/step1.vue"; //步骤一
import step2 from "../page/addAppPage/step2.vue"; //步骤二
import step from "../page/addAppPage/step.vue"; //步骤三
import step3 from "../page/addAppPage/step3.vue"; //步骤四
import step4 from "../page/addAppPage/step4.vue"; //步骤五

import scene from "../page/scene.vue"; //场景解决方案
import product from "../page/product.vue"; //备选产品页
import news from "../page/news.vue"; //最新资讯页
import productInfo from "../page/productInfo.vue"; //产品页
import hardware from "../page/hardware.vue"; //智慧硬件
import hardwareDetail from "../page/hardwareDetail.vue"; //智慧硬件详情
import hardwareDetail2 from "../page/hardwareDetail2.vue"; //智慧硬件详情
import hardwareDetail3 from "../page/hardwareDetail3.vue"; //智慧硬件详情
import hardwareDetail4 from "../page/hardwareDetail4.vue"; //智慧硬件详情
import hardwareDetail5 from "../page/hardwareDetail5.vue"; //智慧硬件详情
import hardwareDetail6 from "../page/hardwareDetail6.vue"; //智慧硬件详情
import guide from "../page/guide.vue"; //智慧硬件详情
import checkemail from "../page/checkemail.vue"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: index
        },
        {
          path: "/register",
          name: "register",
          component: register
        },
        {
          path: "/login",
          name: "login",
          component: login
        },
        {
          path: "/resetPwd",
          name: "resetPwd",
          component: resetPwd
        },
        {
          path: "/userpage/step0",
          name: "step0",
          component: step0
        },
        {
          path: "/userpage",
          name: "userpage",
          component: userpage,
          redirect: "userpage/step1",
          children: [
            {
              path: "/userpage/step1",
              name: "step1",
              component: step1
            },
            {
              path: "/userpage/step2",
              name: "step2",
              component: step2
            },
            {
              path: "/userpage/step3",
              name: "step3",
              component: step3
            },
            {
              path: "/userpage/step4",
              name: "step4",
              component: step4
            },
            {
              path: "/userpage/step",
              name: "step",
              component: step
            }
          ]
        },
        {
          path: "/companyproof",
          name: "companyproof",
          component: companyproof
        },
        {
          path: "/companymaintain",
          name: "companymaintain",
          component: companymaintain
        },
        {
          path: "/api",
          name: "api",
          component: api
        },
        {
          path: "/detailapp",
          name: "detailapp",
          component: detailapp
        },
        {
          path: "/designDev",
          name: "designDev",
          component: designDev
          // meta: {
          //   requiresAuth: true
          // }
        },
        {
          path: "/personInfo",
          name: "personInfo",
          component: personInfo
        },
        {
          path: "/amendPw",
          name: "amendPw",
          component: amendPw
        },
        {
          path: "/myApp",
          name: "myApp",
          component: myApp
        },
        {
          path: "/appStore",
          name: "appStore",
          component: appStore
          // meta: {
          //   requiresAuth: true
          // }
        },
        {
          path: "appStoreDetails",
          name: "appStoreDetails",
          component: appStoreDetails
        },
        {
          path: "/myAppDetails",
          name: "myAppDetails",
          component: myAppDetails
        },
        {
          path: "/addAppuser",
          name: "addAppuser",
          component: addAppuser
        },
        {
          path: "/popup",
          name: "popup",
          component: popup
        },
        {
          path: "/hardware",
          name: "hardware",
          component: hardware
        },
        {
          path: "/scene",
          name: "scene",
          component: scene
        },
        {
          path: "/news",
          name: "news",
          component: news
        },
        {
          path: "/hardwareDetail",
          name: "hardwareDetail",
          component: hardwareDetail
        },
        {
          path: "/hardwareDetail2",
          name: "hardwareDetail2",
          component: hardwareDetail2
        },
        {
          path: "/hardwareDetail3",
          name: "hardwareDetail3",
          component: hardwareDetail3
        },
        {
          path: "/hardwareDetail4",
          name: "hardwareDetail4",
          component: hardwareDetail4
        },
        {
          path: "/hardwareDetail5",
          name: "hardwareDetail5",
          component: hardwareDetail5
        },
        {
          path: "/hardwareDetail6",
          name: "hardwareDetail6",
          component: hardwareDetail6
        },
        {
          path: "/checkemail",
          name: "checkemail",
          component: checkemail
        },
        {
          path: "/guide",
          name: "guide",
          component: guide
        },
        {
          path: "/product",
          name: "product",
          component: product
        },
        {
          path: "/productInfo",
          name: "productInfo",
          component: productInfo
        },
        {
          path: "/appDevelop",
          name: "appDevelop",
          component: appDevelop
        },
        {
          path: "/quickStart",
          name: "qucikStart",
          component: quickStart
        },
        {
          path: "/rule",
          name: "rule",
          component: rule
        },
        {
          path: "case1",
          name: "case1",
          component: case1
        },
        {
          path: "case2",
          name: "case2",
          component: case2
        },
        {
          path: "case3",
          name: "case3",
          component: case3
        },
        {
          path: "case4",
          name: "case4",
          component: case4
        },
        {
          path: "case5",
          name: "case5",
          component: case5
        },
        {
          path: "clientCase1",
          name: "clientCase1",
          component: clientCase1
        },
        {
          path: "clientCase2",
          name: "clientCase2",
          component: clientCase2
        },
        {
          path: "clientCase3",
          name: "clientCase3",
          component: clientCase3
        },
        {
          path: "clientCase4",
          name: "clientCase4",
          component: clientCase4
        },
        {
          path: "customerCase",
          name: "customerCase",
          component: customerCase
        }
      ]
    }
  ]
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
