import { defineStore } from "pinia";
import CetApi from "../Repository/CetApi";
import { useLocalStorage } from "@vueuse/core";

export const useTeacherStore = defineStore("TeacherStore", {
  state: () => ({
    Data: useLocalStorage("teacherInfo", {}),
    lectures: null,
    subjects: null,
    isLoading: false,
    isAuthenticated: false,
  }),
  actions: {
    async login(data) {
      try {
        this.isLoading = true;
        const response = await CetApi.teacherLogin(data);
        this.Data = response.data;

        if (response.status == 200) {
          this.isAuthenticated = true;
        }
      } catch (error) {
        throw error.response.status;
      } finally {
        this.isLoading = false;
      }
    },
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
    async getSubjects(id) {
      try {
        this.isLoading = true;
        const response = await CetApi.teacherSubjects(id);
        this.subjects = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
