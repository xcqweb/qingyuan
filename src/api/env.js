<<<<<<< HEAD
var config = require('../../config')  
// 判断开发环境  
// if(process.env.NODE_ENV!='production'){
//     console.log(process.env.NODE_ENV);
// };

export const API_HZ = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://120.55.190.57/bigdata/'
=======
var config = require('../../config')  
// 判断开发环境  
 if(process.env.NODE_ENV!='production'){
     console.log(process.env.NODE_ENV);
 };

export const API_HZ = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://120.55.190.57'
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
