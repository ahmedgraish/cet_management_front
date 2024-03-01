import router from '@/router';
import Api from './Api'

export default {

  /*
      Creates a new student with the given information.
      @param {Object} studentData - The data for creating a student.
      @param {string} studentData.name - The name of the student.
      @param {string} studentData.refNumber - The reference number of the student.
      @param {string} studentData.password - The password for the student.
      @param {string} studentData.email - The email address of the student.
      @param {string} studentData.phone - The phone number of the student.
      @returns {Promise} A promise that resolves with the created student.
      @throws {Error} If there is an error creating the student.
  */
  async createStudent(data) {
    return Api().post('/api/admin/students', data)
  },

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
    return Api().get('/student/Schedules/' + id)
      .then((res) => {
        return res
      })
  },

  absenseRatio(id) {
    return Api().get('student/absence/' + id)
      .then((res) => {
        return res
      })
  },

  studentGrades(id) {
    return Api().get('/student/grades/' + id)
      .then((res) => {
        return res
      })
  }

}
