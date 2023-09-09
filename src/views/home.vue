<template>
    <el-container class="container" v-loading="false" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-spinner="el-icon-loading">
        <!-- 侧边栏 -->
        <Aside :foldAside="foldAside" />
        <!--
            direction="vertical"  用于垂直布局
        -->
        <el-container direction="vertical">
            <!-- 头部导航栏 -->
            <el-header height="50"> <Header /></el-header>
            <!-- 内容 -->
            <el-container class="wrapper">

                <Content />
            </el-container>
            <!-- 底部 -->
            <div class="footer">
                <Footer />
            </div>
        </el-container>

    </el-container>
</template>

<script>
import Header from '@/components/common/header.vue';
import Aside from '@/components/common/aside.vue';
import Footer from '@/components/common/footer.vue';
import Content from '@/components/common/content.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Aside,
        Footer,
        Content,
    },
    data() {
        return {
            foldAside: true,
        };
    },
    methods: {
        foldOrOpen(data) {
            this.foldAside = data;
        },
    },
};
</script>
<style>
.container {
    height: 100%;
}
.wrapper {
    height: calc(100vh - 100px);
}
.wrapper_con {
    padding-bottom: 0;
}
</style>
