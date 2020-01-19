<template>
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
</template>

<script>
    export default {
        name: "user-info",
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
    .user-info{
       .el-dropdown-link{
           cursor:pointer;
       }
    }
</style>
