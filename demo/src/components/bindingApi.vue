<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 80%">
            <el-table-column
            prop="apiname"
            label="名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="price"
            label="价格"
            width="180">
            </el-table-column>
            <el-table-column
            prop="description"
            label="描述">
            </el-table-column>
        </el-table>
        <el-pagination small layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="pageSize" :total="total"></el-pagination>
        <!-- <table class="api_list">
            <tr>
                <td>名称</td>
                <td>价格</td>
                <td>描述</td>
            </tr>
            <tr v-for="(item,index) in bindingApi" :key="index">
                <td>{{item.apiname}}</td>
                <td>{{item.price}}</td>
                <td>{{item.description}}</td>
            </tr>
            <el-pagination small layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="pageSize" :total="total"></el-pagination>
        </table> -->
    </div>
</template>
<script>
export default {
    name:'bindingApi',
    data(){
        return{
            currentPage:1,
            pageSize:5,
            tableData:[]
        }
    },
    props:['bindingApi','total'],
    created(){
        this.tableData=this.bindingApi.slice(0,5);
    },
    methods:{
        handleCurrentChange(val){
            this.pageSize=5;
            this.currentPage=val;
            this.tableData=[];
            var alllen=this.bindingApi.length;
            var len=((this.currentPage*this.pageSize)<alllen)?(this.currentPage*this.pageSize):alllen;
            for(let i=(this.currentPage-1)*this.pageSize;i<len;i++){
                this.tableData.push(this.bindingApi[i]);
            }
        }
    }
}
</script>

<style>
.api_list {
  /* border: 1px solid #eaeaea; */
  border-collapse: collapse;
}
.api_list > tr > td {
  padding: 10px 30px;
  border: 1px solid #ebebeb;
}
.tar_btn{
    margin-top:40px;
    text-align: left;
}
</style>

