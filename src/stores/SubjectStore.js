import { defineStore } from "pinia";
import CetApi from "../Repository/CetApi";

export const useSubjectStore = defineStore("SubjectStore", {
  state: () => ({
    subject_id: null,
    students: null,
    isLoading: false,
    submitionStatus: null,
  }),
  actions: {
    async getStudents(id) {
      try {
        this.isLoading = true;
        const response = await CetApi.subjectStudents(id);
        this.students = response.data;
        this.subject_id = id;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    async submitGrades(data) {
      try {
        const response = await CetApi.gradesSubmition(data);
        this.submitionStatus = response.data;
      } catch (error) {
        throw error;
      }
    },
  },
  persist: true,
});
