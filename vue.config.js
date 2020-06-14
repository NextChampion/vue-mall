/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-14 20:39:41
 * @LastEditTime: 2020-06-14 20:44:23
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/': {
                target: 'https://www.baidu.com/',
                changeOrigin: false,
            }
        }
    }
}