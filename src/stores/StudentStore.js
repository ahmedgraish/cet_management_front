import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useStudentStore = defineStore('StudentStore',{
    state:()=>{
        schedule:null
        absenceRatio:null
        grades:null
        isLoading:false
    },
    actions:{
       async getSchedule(id){
        try {
            this.isLoading =true
            const response = await CetApi.studentSchedule(id)
            this.schedule = response.data
        } catch (error) {
            throw error
        }finally{
            this.isLoading =false
        }
       },
       async getAbsenceRatio(id){
            try {
                this.loading = true;
                const response = await CetApi.absenseRatio(id);
                this.absenceRatio = response.data;
            } catch (error) {
                throw error;
            }finally{
                this.loading =false;
            }
       },
       async getGrades(id){
           try {
               this.loading = true;
               const response = await CetApi.studentGrades(id);
               this.grades = response.data;
           } catch (error) {
               throw error;
           }finally{
               this.loading =false;
           }
       },
    },
    persist: true,

})