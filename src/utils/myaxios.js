import axios from "axios"

const myaxios = axios.create({
  baseURL:"https://mock.presstime.cn/mock/6346cbd710c8440077353dd7/library",
  timeout:5000
})

/* myaxios.get('data.json')
  .then(resp => {
    console.log(resp.data)
  }).catch(err => {
    console.log("请求失败")
  })
 */
  const loading={
    loadingInstance:null,
    open:function(){
      if(this.loadingInstance===null)
      {    
      this.loadingInstance=Loading.service({
        target:'.main',
        text:'玩命加载中',
        background:'rgba(0,0,0,0.5)'
      });
      }
    },
    close:function(){
      if(this.loadingInstance!==null)
      {
        this.loadingInstance.close()
      }
      this.loadingInstance=null
    }
  }
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  loading.open()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  loading.close()
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default myaxios