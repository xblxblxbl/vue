<template>
    <div class="header">
        <!-- 是否展开侧边栏 -->
        <div class="header-title" @click="toggleAside">
            <a class="el-icon-s-fold" v-if="iscollapse" title="折叠侧边栏" />
            <a class="el-icon-s-unfold" v-else title="展开侧边栏" />
        </div>
        <!-- 设置、文档、用户设置等 -->
        <div class="header-menu">
            <el-menu mode="horizontal" class="header-menu-submenu">
                <el-menu-item title="设置" index="1" to="/">网站首页 </el-menu-item>
                <el-menu-item title="清除缓存" index="2" @click="onClear">清除缓存 </el-menu-item>
                <el-menu-item title="系统更新" index="3" @click="onUpdate"> 系统更新 </el-menu-item>
                <el-menu-item title="帮助" index="5">帮助</el-menu-item>
                <el-menu-item title="设置" index="4"> <i class="el-icon-setting"></i>设置 </el-menu-item>
                <!-- 用户设置 -->
                <el-submenu title="用户设置" index="6">
                    <template slot="title">
                        <span class="header-span"> <img src="@/assets/logo.png" :alt="userName" /> {{ userName }} </span>
                    </template>
                    <el-menu-item index="6-1" @click="showPasswordBox"> <i class="el-icon-edit"></i>修改密码 </el-menu-item>
                    <el-menu-item index="6-2" @click="logout"> <i class="el-icon-close"></i>退出 </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            // 是否展开侧边栏
            iscollapse: true,
            // 默认用户名
            userName: 'admin',
            // 是否展开密码框
            UpdatePasswordVisible: false,
        };
    },
    components: {

    },
    methods: {
        // 展开密码修改框
        showPasswordBox() {
            this.UpdatePasswordVisible = true;
            // this.$nextTick 表示数据渲染后，执行密码框初始化
            this.$nextTick(() => {
                this.$refs.updatePassowrd.init();
            });
        },
        // 展开、折叠侧边栏
      toggleAside() {
            this.iscollapse = !this.iscollapse;
            this.$eventBus.$emit('toggleAside');
        },
        // 退出登录，回到登录界面
        logout() {
            // TODO：退出逻辑待完成
            alert('退出逻辑未完成');
            this.$router.push({
                name: 'Login',
            });
        },
        // 清除缓冲
        onClear() {
            console.log('onClear');
        },
        // 系统更新
        onUpdate() {
            console.log('onUpdate');
        },
    },
};
</script>

<style>
.header {
    padding: 0 10px;
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #e6e6e6;
}

.header-title {
    height: 50px;
    width: 50px;
    float: left;
    font-size: 30px;
    cursor: pointer;
}

.header-menu {
    height: 50px;
    width: 100%;
    flex: 1;
    line-height: 50px;
    font-size: 30px;
}
.header-menu-submenu {
    float: right;
}
.header-submenu-a {
    text-decoration: none;
    color: #4cc4b8;
    font-weight: bold;
    font-size: 14px;
}
.header-submenu-a:hover {
    background-color: #2c3e50;
}
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 50px !important;
    line-height: 50px !important;
    padding: 0 10px !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
    min-width: auto !important;
}
.header-span img {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 5px 5px 10px 10px;
    border-radius: 50%;
}
.header-span {
    font-size: 20px;
    border-radius: 50%;
}
</style>
