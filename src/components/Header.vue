<template>
   <div class="header">
       <div class="left">
           <div class="logo">
               <img src="../assets/imgs/logo.png" alt="" class="img">
               <span class="name">数据地图</span>
           </div>
           <div class="topBar">
               <router-link :to="'/dm/overview'">数据总览</router-link>
               <router-link :to="'/dm/allData'">全部数据</router-link>
           </div>
       </div>
       <div class="user-info">
           <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                             欢迎:   {{ account || '' }}
                            <i class="el-icon-caret-bottom" />
                            </span>
               <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item command="logout"><span class="el-icon-remove" /> 退出</el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
       </div>
   </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {
                account: 'admin'
            }
        },
     methods: {
         handleCommand() {
             this.logoutAct();
         },
         logoutAct() {
             this.openMessage('您确定要退出吗？', '确定', () => {

             })
         },
         openMessage(message, confirmText, doit) {
             this.$confirm(message, '提示', {
                 cancelButtonText: '取消',
                 confirmButtonText: confirmText
             }).then(() => {
                 doit();
             }).catch(() => {});
         },
     }
    }
</script>
<style lang="less" scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 42px;
        line-height: 42px;
        padding: 0 20px 0 0;
        background: #10121a;
        color: #fff;
        font-weight: 300;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        .left{
            display: flex;
            align-items: center;
            .logo{
                min-width: 240px;
                display: flex;
                align-items: center;
                .img{
                    width:90px;
                    padding-left: 12px;
                    box-sizing:border-box;
                    border-right: 1px solid #2c2f40;
                }
                .name{
                    font-size: 14px;
                    color: #fff;
                    font-weight: 500;
                    line-height: 42px;
                    margin-left: 14px;
                    margin-right: 14px;
                }
            }
            .topBar{
                a{
                    color: #fff;
                    text-decoration: none;
                    padding: 0 10px;
                    height:100%;
                    display: inline-block;
                    &:hover{
                        background: #2c2f40;
                    }
                }
            }
        }
        .user-info{
            .el-dropdown-link{
                cursor:pointer;
                color: #fff;
            }
        }
    }
</style>
