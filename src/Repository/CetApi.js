import router from '@/router';
import Api from './Api'

export default {

  userLogin(data, role) {
    if (role.includes('teacher')) {
      return Api().post('/api/teacher/login', data)
        .then((res) => {
          return res
        })

    } else if (role.includes('admin')) {
      return Api().post('/api/admin/login', data)
        .then((res) => {
          return res
        })

    } else {
      return Api().post('/api/student/login', data)
        .then((res) => {
          return res
        })
    }
  },

  studentSchedule(id) {
    return Api().get('/api/student/Schedules/' + id)
      .then((res) => {
        return res
      })
  },

  absenseRatio(id) {
    return Api().get('/api/student/absence/' + id)
      .then((res) => {
        return res
      })
  },

  studentGrades(id) {
    return Api().get('/api/student/grades/' + id)
      .then((res) => {
        return res
      })
  },
  teacherLectures(id){
    return Api().get('/api/teacher/lectures/'+id)
    .then((res)=>{
        return res
    })
  },

}
