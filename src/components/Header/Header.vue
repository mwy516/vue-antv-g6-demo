<template>
   <div class="header">
      <div class="left">
          <img src="../../assets/imgs/logo.png" alt="" class="logo">
          <h5>数据地图</h5>
      </div>
      <user-info />
   </div>
</template>

<script>
    import userInfo from './UserInfo.vue'
    export default {
        data() {
            return {}
        },
      components: {
            userInfo
      }
    }
</script>
<style lang="less" scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        box-shadow: 0 4px 4px rgba(0,0,0,.2);
        .left{
            display: flex;
            align-items: center;
            .logo{
                height: 30px;
                margin-right: 20px;
            }
        }
    }
</style>
