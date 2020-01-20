<template>
    <div>
        <v-head />
       <el-container>
           <router-view />
       </el-container>
    </div>
</template>

<script>
    import vHead from 'components/Header.vue';
    export default {
        components: {
            vHead
        }
    }
</script>

<style lang="less" scoped>
    .el-container{
        width:80%;
        margin: 20px auto;
    }
</style>
