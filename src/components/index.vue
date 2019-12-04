<template>
    <el-container direction="vertical">
        <cpnHeader></cpnHeader>
        <el-container>
            <cpnAside></cpnAside>
            <el-container direction="vertical">
                <cpnMain></cpnMain>
                <cpnFooter></cpnFooter>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    //组件头部
    import cpnHeader from "@/components/header";
    //组件侧边栏
    import cpnAside from "@/components/aside";
    //组件主体
    import cpnMain from "@/components/main";
    //组件底部
    import cpnFooter from "@/components/footer";

    export default {
        name: "index",
        components: {
            cpnHeader,
            cpnAside,
            cpnMain,
            cpnFooter
        }
    }
</script>

<style scoped>
    body > .el-container {
        margin-bottom: 40px;
    }
</style>