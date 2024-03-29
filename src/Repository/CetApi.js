import router from '@/router';
import Api from './Api'

export default {

  studentLogin(data) {
    return Api().post('/api/student/login', data)
      .then((res) => {
        return res
      })
  },

  teacherLogin(data) {

    return Api().post('/api/teacher/login', data)
      .then((res) => {
        return res
      })
  },

  admnLogin(data) {

    return Api().post('/api/admin/login', data)
      .then((res) => {
        return res
      })

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
  teacherLectures(id) {
    return Api().get('/api/teacher/lectures/' + id)
      .then((res) => {
        return res
      })
  },
  lectureStudents(id) {
    return Api().get('/api/teacher/lectureStudents/' + id)
      .then((res) => {
        return res
      })
  },
  attendenceSubmition(data) {
    return Api().post('/api/teacher/attendence', data)
      .then((res) => {
        return res
      })
  },
  teacherSubjects(id) {
    return Api().get('/api/teacher/teacherSubjects/' + id)
      .then((res) => {
        return res
      })
  },
  subjectStudents(id) {
    return Api().get('/api/teacher/subjectStudents/' + id)
      .then((res) => {
        return res
      })
  },
  gradesSubmition(data) {
    return Api().post('/api/teacher/addingStudentGrades', data)
      .then((res) => {
        return res
      })
  },

}
