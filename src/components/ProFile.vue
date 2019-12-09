<template>
    <div>
        <p>个人中心</p>
        <button></button>
        <p>{{$route.query.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "ProFile",
        created(){
            //todo 创建时触发
        },
        mounted(){
            //todo 挂载完成后触发
            //$router全局路由对象 跳转路径用router push|replace
            //$route当前路由的相关信息 path query
            console.log(this.$router);
        },
        updated(){
            //todo 发生刷新时触发
        },
        beforeRouteLeave(to,from,next){
            let res = confirm('确认离开页面吗');
            if(res){
                next();
            }
        }
    }
</script>

<style scoped>

</style>