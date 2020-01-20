<template>
   <div class="dataOverView">
       <div class="allViews">
           <table-views :total="893" :views="views[0]" />
           <table-views :total="893" :views="views[1]" />
       </div>
   </div>
</template>

<script>
    import tableViews from 'components/DataViewAll'
    export default {
        name:'dataOverView',
        data() {
            return {
                views:[
                    {title: '总表数', bc: '#16b6a4', icon: 'icon-17'},
                    {title: '占用存储量', bc: '#2283db', icon: 'icon-storage-capacity'}
                    ]
            }
        },
        components: {
            tableViews
        }
    }
</script>
<style lang="less" scoped>
    .dataOverView{
        width:100%;
        .allViews{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
