import router from '@/router';
import Api from './Api'

export default {

    userLogin(data,role){
        if (role.includes('teacher')) {
            return Api().post('/teacher/login',data)
            .then((res) => {
                return res
             })

        }else if(role.includes('admin')){
            return Api().post('/admin/login',data)
            .then((res) => {
                return res
             })
             
        }else{
            return Api().post('/student/login',data)
            .then((res) => {
               return res
            })
        }
    },
 
}