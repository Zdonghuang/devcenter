<template>
    <div>
        <detail :showinfo="showinfo"></detail>
    </div>
</template>
<script>
    import detail from '../components/appDetails.vue'
    export default {
        name: 'appStoreDetails',
        data(){
            return{
                showinfo:''
            }
        },
        created(){
            
        },
        mounted(){
            this.showData();
            document.getElementsByClassName('appDetailDiv')[0].style.padding='50px 0 0 100px';
        },
        methods:{
            showData(){
                let _this = this;
                _this.$ajax.get('/v2/apps/appinfo/'+this.$route.query.id).then((res)=>{
                    this.showinfo = res.data.result;
                })
            },
        },
        components:{
            detail
        }
    }
</script>
