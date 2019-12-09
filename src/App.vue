<template>
    <div id="app">
        <h2>App组件</h2>
        <!--        router-link 指定跳转的路径 并由router-view进行渲染（对应的组件）-->
        <!--        补充
                    tag 如果这里希望渲染成别的标签（默认渲染成a标签）加一个tag="标签名"
                    replace 如果希望用户点击后不能返回上一页 添加replace属性  默认是采用history.pushState() 设置了replace 就采用history.replaceState
                    active-class 如果希望按钮的路径 与 地址栏url匹配的时候添加自定义类 则使用 active-class="自定义类" 如果标签很多也可以在Vue实例中传入
        -->
        <router-link to="/index.html" tag="button" replace active-class="active">首页</router-link>
        <router-link to="/about.html" tag="button" replace active-class="active">关于我们</router-link>
        <router-link :to="'/user/'+id+'-'+cat_id+'.html'" tag="button" replace active-class="active">用户</router-link>
        <router-link :to="{path:'/profile.html',query:{'name':'张三丰'}}" tag="button" replace active-class="active">
            个人中心
        </router-link>

        <!--        <router-link to="/index" tag="button" replace>首页</router-link>-->
        <!--        <router-link to="/about" tag="button" replace>关于我们</router-link>-->

        <!--        实测 这里直接写个a标签也能跳-->
        <!--        <a href="/index.html">这里啊啊啊</a>-->

        <!--        <button @click="updatePath('/index')">首页</button>-->
        <!--        <button @click="updatePath('/about')">关于我们</button>-->
        <!--        router-view是一个占位标签 决定该组件在哪里展示-->
        <!--        keep-alive标签内的组件渲染后会被保持
                    不会重新加载 也不会再触发created
                    也可以通过 在标签中添加 exclude="组件name" 属性 指定不进行缓存的组件
                    在标签中添加 include="组件name" 指定进行缓存的组件
        -->
        <keep-alive exclude="ProFile">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                id: 21,
                cat_id: 88
            }
        },
        methods: {
            updatePath(path) {
                // push => history.pushState
                // this.$router.push(path);
                // replace => history.replaceState
                this.$router.replace(path);
            }
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .active {
        color: red;
    }
</style>
