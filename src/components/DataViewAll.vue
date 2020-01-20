<template>
   <div class="dataViewAll" :style="{background: this.$props.views.bc}">
      <h3>{{this.$props.views.title}}</h3>
      <div class="count">{{this.$props.total}}</div>
      <div class="icon">
         <i class="iconfont" :class="[this.$props.views.icon]" />
      </div>
   </div>
</template>

<script>
    export default {
        name:'dataViewAll',
        data() {
            return {
            }
        },
       props:{
          total: Number,
          views: Object
       },
    }
</script>
<style lang="less" scoped>
   .dataViewAll{
      padding: 20px;
      margin: 0 10px;
      flex-grow: 1;
      color: #fff;
      h3{
         font-weight: 700;
         font-size: 16px;
      }
      .count{
         text-align: center;
         font-size: 30px;
      }
   }
</style>
