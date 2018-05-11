import axios from 'axios'
import router from '@/router'

//axios 配置
axios.defaults.timeout = 500000;
axios.defaults.baseURL = window.API_URL+'/qy/api/';


let instance = axios.create()
let token='213345dsdsddfdgdyyrtsdsdwew32335t';
//let token=window.localStorage.getItem('token');

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use = instance.interceptors.request.use;

 //http request 拦截器
 instance.interceptors.request.use(
        config =>{
        	if(token){
        		//config.headers.token = token
        	}
        	return config
        },
        err => {
        	return Promise.reject(err);
        }
    );
    
    
 //http response 拦截器
 instance.interceptors.response.use(
    response =>{
    	if(response.data.code===200 || response.data.code==='200'){
    		//console.log(response)
    		return response
    	}else if(response.data.code==='-1' || response.data.code===-1){
    		//console.log(response.data)
    		window.location.href = API_URL+':8081/login'
    	}
    },
        err => {
        	
        });

 export default instance;
