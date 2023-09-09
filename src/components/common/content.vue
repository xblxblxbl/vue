<template>
    <el-main class="content">
        <keep-alive>
            <router-view />
        </keep-alive>
    </el-main>
</template>

<script>
export default {
    name: 'Content',
};
</script>

<style>
.el-main {
    padding: 15px !important;
}
.content {
    background-color: #fff;
}
</style>