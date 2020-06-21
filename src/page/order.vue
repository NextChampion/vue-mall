<!--
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-14 21:14:49
 * @LastEditTime: 2020-06-21 12:21:10
 * @LastEditors: zhangcunxia
 * @Description: 
--> 
<template>
    <div>
        <order-header></order-header>
        order
        <router-view />
        <order-footer></order-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader';
import OrderFooter from '../components/OrderFooter';
export default {
    name: 'nav-order',
    components: {
        OrderHeader,
        OrderFooter,
    }
}
</script>