<template>
    <div class="register_box">
        <div>
            <h3>企业维护</h3>
            <div class="table_binding">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <th><input type="checkbox" />  全选</th>
                            <th>真实姓名</th>
                            <th>邮箱地址</th>
                            <th>职位</th>
                            <th>联系电话</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>章三</td>
                            <td>123456@163.com</td>
                            <td>开发</td>
                            <td>13366447588</td>
                        </tr>
                    </tbody>
                </table>
                <button>发送邀请</button>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'companymaintain',
        // data(){},
        mounted(){},
        methods:{}
    }
</script>
<style>
    .table_binding table{
        width:98%;
        margin:0.12rem auto;
        border: 1px solid #eaeaea;
        background: #FFF;
        font-size: 12px;
        text-align: center;
    }
    .table_binding th, .table_binding td{
        border-right: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        padding: 5px;
    }
</style>

