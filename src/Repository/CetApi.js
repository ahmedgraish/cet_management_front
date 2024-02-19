import Api from './Api'

export default {

    userLogin(data,currentUrl){
        if (currentUrl.includes('teacher')) {
            return Api().post('/teacher/login',data);
        }else if(currentUrl.includes('admin')){
            return Api().post('/admin/login',data);
        }else{
            return Api().post('/student/login',data);
        }
    },
 
}