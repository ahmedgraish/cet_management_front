import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useLectureStore= defineStore('LectureStore',{
    state:()=>{
        students:null
        isLoading:false
    },
    actions:{
       async getStudents(id){
        try {
            this.isLoading =true;
            const response = await CetApi.lectureStudents(id);
            this.students = response.data;
        } catch (error) {
            throw error
        }finally{
            this.isLoading =false
        }
       },
      
    },

})