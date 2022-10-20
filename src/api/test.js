import myaxios from "@/utils/myaxios";
// const BASE_URL='/dev-apis'
// const BASE_URL='http://localhost:8999'
const BASE_URL=[process.env.VUE_APP_BASE_API]
/* myaxios.get('data.json')
    .then(resp => {
        console.log(resp.data)
    }).catch(err => {
        console.log("请求失败")
    }) */
export default {
    getList() {
        const promise1 = myaxios({
            method:'get',
            url:BASE_URL+'/data.json',
        })
        return promise1
    }
}