<!--
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-14 21:11:58
 * @LastEditTime: 2020-06-21 12:09:29
 * @LastEditors: zhangcunxia
 * @Description: 
--> 
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader';
import NavFooter from './../components/NavFooter';
export default {
    name: 'nav-home',
    components: {
        NavHeader,
        NavFooter,
    }
}
</script>