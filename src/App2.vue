<script setup>
    import {getCurrentInstance, onMounted} from 'vue'

    const app = getCurrentInstance()
    const submit = () => {
        app.appContext.config.globalProperties.$message.success({message: '确定', duration: 0})
    }
    const submit2 = () => {
        app.appContext.config.globalProperties.$$message('确定')
    }
</script>

<template>
    <el-button @click="submit" type="primary">确定</el-button>
    <el-button @click="submit2" type="primary">确定2</el-button>
</template>

<style scoped>

</style>
