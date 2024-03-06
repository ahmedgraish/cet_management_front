import { defineStore } from "pinia";
import CetApi from "../Repository/CetApi";
import AdminRepository from "../Repository/admin";
import { useLocalStorage } from "@vueuse/core";

export const useAdminStore = defineStore("AdminStore", {
  state: () => {
    Data:useLocalStorage("adminInfo", {});
    isAuthenticated:false;
    schedule: null;
    absenceRatio: null;
    grades: null;
    isLoading: false;
  },
  actions: {
    /*
        Creates a new student with the given information.
        @param {Object} studentData - The data for creating a student.
        @param {string} studentData.name - The name of the student.
        @param {string} studentData.refNumber - The reference number of the student.
        @param {string} studentData.password - The password for the student.
        @param {string} studentData.email - The email address of the student.
        @param {string} studentData.phone - The phone number of the student.
        @returns {Promise} A promise that resolves with the created student.
        @throws {Error} If there is an error creating the student.
    */
    async login(data) {
      try {
        this.isLoading = true;
        const response = await CetApi.admnLogin(data);
        this.Data = response.data;

        if (response.status == 200) {
          this.isAuthenticated = true;
        }
      } catch (error) {
        throw error.response.status
      }finally{
        this.isLoading =false
    }
    },
    async createStudent(data) {
      try {
        this.isLoading = true;
        const response = await AdminRepository.createStudent(data);
        this.student = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    async createTeacher(data) {
      try {
        this.isLoading = true;
        const response = await AdminRepository.createTeacher(data);
        return response.data;
      } catch (error) {
        throw error;
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
