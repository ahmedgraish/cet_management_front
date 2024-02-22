import {defineStore} from "pinia"
import CetApi from '../Repository/CetApi'


export const useUserStore = defineStore('UserStore',{
    state:()=>{
        userData:null
        isLoading:false
    },
    actions:{
       async login(data,Url)
       {    
            try {

                this.isLoading = true;
                const response = await CetApi.userLogin(data,Url);
                this.userData = response;
                
            } catch (error) {
                console.log(error);
                throw error
            }finally{
                this.isLoading =false;
            }
        },
    },

})