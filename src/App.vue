<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
    export default {
        mounted() {
            this.checkIEFunc()
        },
        methods: {
            checkIEFunc() {
                function checkIE() {
                    return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
                }
                if (checkIE()) {
                    window.addEventListener('hashchange', () => {
                        var currentPath = window.location.hash.slice(1);
                        if (this.$route.path !== currentPath) {
                            this.$router.push(currentPath)
                        }
                    }, false)
                }
            }
        }
    }
</script>
<style lang="less">
    *{
        padding: 0;
        margin: 0;
        font-size: 14px;
    }
</style>
