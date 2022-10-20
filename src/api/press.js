import myaxios from '@/utils/myaxios'
export default{ 
    search(page,size,searchWhere){
        return myaxios({
            url:`/press/list/search/${page}/${size}`,
            method:'post',
            data:searchWhere
        })
    },   
}