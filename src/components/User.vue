<template>
    <div>
        <h2>用户</h2>
        <h2>用户内容{{id}}</h2>
        <h2>用户内容{{$route.params.id}} --- {{$route.params.cat_id}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            id() {
                /*
                 * 这里是route 不是 router
                 * route 表示当前(活跃)的路由
                 * router 表示整体router实例
                 */
                console.log(this.$route.params);
                return this.$route.params.id + this.$route.params.cat_id;
            }
        }
    }
</script>

<style scoped>

</style>