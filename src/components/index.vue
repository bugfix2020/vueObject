<template>
    <cpnContain></cpnContain>
</template>
<script>
    import cpnContain from "@/components/main";

    export default {
        name: "index",
        components: {
            cpnContain
        }
    }
</script>

<style scoped>

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside {
        line-height: 260px;
    }
</style>