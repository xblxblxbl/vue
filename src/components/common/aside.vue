<template>
    <div>
        <!-- 系统 Logo -->
        <el-aside class="header-logo" :width="foldAside?'200px':'100px'"@click="toggleAside">
            <div @click="$router.push({ name: 'main' })">
                <a v-if="foldAside">CMS SYSTEM</a>
                <a v-else>CMS</a>
            </div>
        </el-aside>
        <el-aside class="aside" :width="foldAside?'200px':'100px'" :class="'icon-size-' + iconSize">
            <el-scrollbar style="height: 100%; width: 100%;">
                <!--
                    default-active 表示当前选中的菜单，默认为 home。
                    collapse 表示是否折叠菜单，仅 mode 为 vertical（默认）可用。
                    collapseTransition 表示是否开启折叠动画，默认为 true。
                    background-color 表示背景颜色。
                    text-color 表示字体颜色。
                -->
                <el-menu :default-active="menuActiveName || 'main'" :collapse="!foldAside" :collapseTransition="false" background-color="#263238" text-color="#8a979e">
                    <el-menu-item index="main" @click="$router.push({ name: 'main' })">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="demo" >
                        <template slot="title">
                            <i class="el-icon-star-off"></i>
                            <span>Demo</span>
                        </template>
                        <el-menu-item index="demo-echarts" @click="$router.push({ name: 'echarts' })">
                            <i class="el-icon-s-data"></i>
                            <span slot="title">echarts</span>
                        </el-menu-item>
                        <el-menu-item index="demo-ueditor" @click="$router.push({ name: 'ueditor' })">
                            <i class="el-icon-document"></i>
                            <span slot="title">ueditor</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            foldAside: true,
            // 保存当前选中的菜单
            menuActiveName: 'main',
            // 用于拼接当前图标的 class 样式
            iconSize: 'true',
        };
    },
  methods:{

  },
  mounted() {
    this.$eventBus.$on('toggleAside', () => {
      this.foldAside = !this.foldAside;
    });
  },
};
</script>

<style>
.aside {
    margin-bottom: 0;
    height: 100%;
    max-height: calc(100% - 50px);
    width: 100%;
    max-width: 200px;
    background-color: #263238;
    text-align: left;
    right: 0;
}

.header-logo {
    background-color: #17b3a3;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 200px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0;
    cursor: pointer;
}
.el-submenu .el-menu-item {
    max-width: 200px !important;
}
.el-scrollbar__wrap {
    overflow-x: hidden !important;
}
.icon-size-false i {
    font-size: 30px !important;
}
.icon-size-true i {
    font-size: 18px !important;
}
</style>
