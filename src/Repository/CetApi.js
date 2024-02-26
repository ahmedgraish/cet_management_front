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

    studentSchedule(id){
        return Api().get('/student/Schedules/'+id)
        .then((res)=>{
            return res
        })
    },

    absenseRatio(id){
        return Api().get('student/absence/'+id)
        .then((res)=>{
            return res
        })
    },

    studentGrades(id){
        return Api().get('/student/grades/'+id)
        .then((res)=>{
            return res
        })
    }
 
}