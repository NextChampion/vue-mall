/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-14 21:10:26
 * @LastEditTime: 2020-06-21 12:25:16
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/home';
import Index from './page/index';
import Product from './page/product';
import Detail from './page/detail';
import Cart from './page/cart';
import Order from './page/order';
import OrderList from './page/orderList';
import OrderPay from './page/orderPay';
import OrderConfirm from './page/orderConfirm';
import Alipay from './page/alipay'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: Index, 
                },
                {
                    path: 'product/:id',
                    name: 'product',
                    component: Product, 
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    component: Detail, 
                },
            ],
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: Alipay,
                },
            ]
        },
    ]
})