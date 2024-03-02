import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useLectureStore= defineStore('LectureStore',{
    state:()=>{
        lecture_id:null
        students:null
        isLoading:false
        submitionStatus:null
    },
    actions:{
       async getStudents(id){
        try {
            this.isLoading =true;
            const response = await CetApi.lectureStudents(id);
            this.students = response.data;
            this.lecture_id = id;
        } catch (error) {
            throw error
        }finally{
            this.isLoading =false
        }
       },
       async submitAttendence(data){
        try {
            const response = await CetApi.attendenceSubmition(data);
            this.submitionStatus =response.data;
        } catch (error) {
            throw error
        }
       }
      
    },

})