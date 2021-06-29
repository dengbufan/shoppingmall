import axios from 'axios'


//传入配置信息，包含URL
export function request(config){
   //1.创建一个axios实例
   const netInstance = axios.create({
    //设置默认信息 全局配置
    //  baseURL:'http://152.136.185.210:7878/api/m5',
    //  timeout:5000,
     baseURL: 'http://152.136.185.210:7878/api/m5',
     timeout: 5000
  })

   //2.设置拦截器
   //请求拦截器
  netInstance.interceptors.request.use(config=>{
    return config
  },error=>{

  })

  //响应拦截器
  netInstance.interceptors.response.use(res=>{
    return res.data
  },error=>{

  })

  return netInstance(config)  //axios 本身返回一个promise
}


