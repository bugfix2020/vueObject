<template>
    <div>
        <h2>首页</h2>
        <p>首页内容</p>
        <router-link to="/index/news.html">新闻</router-link>
        <router-link to="/index/message.html">消息</router-link>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>