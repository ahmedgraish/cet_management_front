import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useTeacherStore= defineStore('TeacherStore',{
    state:()=>{
        lectures:null
        subjects:null
        isLoading:false
    },
    actions:{
       async getLectures(id){
        try {
            this.isLoading =true
            const response = await CetApi.teacherLectures(id)
            this.lectures = response.data
        } catch (error) {
            throw error
        }finally{
            this.isLoading =false
        }
       },
       async getSubjects(id){
        try {
            this.isLoading =true
            const response = await CetApi.teacherSubjects(id)
            this.subjects = response.data
        } catch (error) {
            throw error
        }finally{
            this.isLoading =false
        }
       },
       
      
    },
    
    persist: true,

})