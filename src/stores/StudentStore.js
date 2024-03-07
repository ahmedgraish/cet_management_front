import { defineStore } from "pinia";
import CetApi from "../Repository/CetApi";
import { useLocalStorage } from "@vueuse/core";

export const useStudentStore = defineStore("StudentStore", {
  state: () => ({
    Data: useLocalStorage("studentInfo", {}),
    schedule: null,
    absenceRatio: useLocalStorage("absenceRatio", []),
    grades: null,
    isLoading: false,
  }),
  getters:{
    isAuthenticated: (state) => Boolean(state.Data.token),
  },
  actions: {
    async login(data) {
      try {
        this.isLoading = true;
        const response = await CetApi.studentLogin(data);
        this.Data = response.data;

      } catch (error) {
        throw error.response.status;
      } finally {
        this.isLoading = false;
      }
    },
    async getSchedule(id) {
      try {
        this.isLoading = true;
        const response = await CetApi.studentSchedule(id);
        this.schedule = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    async getAbsenceRatio(id) {
      try {
        this.loading = true;
        const response = await CetApi.absenseRatio(id);
        this.absenceRatio = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async getGrades(id) {
      try {
        this.loading = true;
        const response = await CetApi.studentGrades(id);
        this.grades = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
