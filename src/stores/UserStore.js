import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useUserStore = defineStore('UserStore',{
    state:()=>{
        userData:null
        userRole:''
        isLoading:false
        userAuth:false
    },
    actions:{
       async login(data,role)
       {    
            try {

                this.isLoading = true;
                const response = await CetApi.userLogin(data , role);
                this.userData = response.data;
                this.userRole = role

                if (response.status == 200) {
                    this.userAuth = true
                }
                
            } catch (error) {
                console.log(error);
                throw error.response.status
            }finally{
                this.isLoading =false;
            }
        },
    },

})