<!--
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-14 21:15:39
 * @LastEditTime: 2020-06-21 12:22:14
 * @LastEditors: zhangcunxia
 * @Description: 
--> 
<template>
    <div>
         <order-header></order-header>
        cart
        <router-view />
        <order-footer></order-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader';
import OrderFooter from '../components/OrderFooter';
export default {
    name: 'nav-cart',
    components: {
        OrderHeader,
        OrderFooter,
    }
}
</script>