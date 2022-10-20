//导入VueRouter对象
import router from "./router/index.js";
import { getUserInfo } from "./api/login";
//利用VueRouter的beforeEach方法进行校验
//提交用户名、密码到后端校验、校验成功后获取token、通过token到后端获取用户信息
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("ym-manager-token")
    if(!token) {
        if(to.path!='/login'){
            next({path:'/login'})
        } else {
            next()
        }
    }else {
        //获取到token
        //请求登录路由/login，那就让其进入目标路由login
        if(to.path=='/login'){
            next();
        }else {
            //请求的是非登录界面，token已查，查看用户信息
            const userinfo = localStorage.getItem("ym-manager-user")
            // 如果用户名存在
            if(userinfo) {
                next()
            }else {//如果没有信息就通过token获取
                getUserInfo(token).then(response =>{
                    const resp= response.data
                    if(resp.flag) {
                        localStorage.setItem('ym-manager-user',JSON.stringify(resp.data))
                        next()
                    }else {
                        //如果token失效，建议重新登录
                        next({path:'/login'})
                    }
                })
            }
        }
    }
});
