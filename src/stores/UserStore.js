import {defineStore} from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import CetApi from '../Repository/CetApi'


export const useUserStore = defineStore('UserStore',{
    state:()=>{
        Data:null
        Role:''
        isLoading:false
        userAuth:false
    },
    actions:{
       async login(data,role)
       {    
            try {

                this.isLoading = true;
                const response = await CetApi.userLogin(data , role);
                this.Data = response.data;
                this.Role = role

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
    persist: true,

})