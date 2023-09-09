<template>
    <div class="my_footer">Copyright © {{ startYear }}-{{ endYear }} GoldSunny 版权所有</div>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            startYear: new Date().getFullYear(),
            endYear: new Date().getFullYear() + 1,
        };
    },
};
</script>
<style scoped>
.my_footer {
    background: #eee;
    color: #666;
    font-size: 14px;
    line-height: 36px;
}
</style>