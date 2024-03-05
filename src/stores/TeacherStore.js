import { defineStore } from "pinia";
import CetApi from "../Repository/CetApi";
import { useLocalStorage } from "@vueuse/core";

export const useTeacherStore = defineStore("TeacherStore", {
  state: () => ({
    lectures: null,
    isLoading: false,
    teacherInfo: useLocalStorage("teacherInfo", {}),
  }),
  actions: {
    async getLectures(id) {
      try {
        this.isLoading = true;
        const response = await CetApi.teacherLectures(id);
        this.lectures = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    async login(data, role) {
      try {
        this.isLoading = true;
        const response = await CetApi.userLogin(data, role);
        this.Data = response.data;
        this.Role = role;

        if (response.status == 200) {
          this.userAuth = true;
        }
        console.log(response);
        // this.teacherInfo = response;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
