import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false,
        username: '',
        usertoken: '',
        active:0 ,//创建应用步骤
        step:1, //应用步骤
        appId:sessionStorage.appid,
        isUserInfoCompleted: false,
    },
    mutations: {
        //登陆状态
        changeLoginState(state,res){
            state.isLogin = res;
        },
        setUsername(state,res){
            state.username = res;
            sessionStorage.username = res;
        },
        // 用户 token
        setToken(state,res){
            state.usertoken = res;
            sessionStorage.token = res
        },
        //创建应用步骤显示条
        changeStep(state,res){
            state.active = res;
        },
        //创建应用步骤修改
        appStep(state,res){
            state.step = res;
        },
        //创建应用id
        idSet(state,res){
            sessionStorage.appid = res
            state.appId = res;
        },
        setUserInfoCompleted(state, res) {
          state.isUserInfoCompleted = res;
        }
    }
})
export default store
