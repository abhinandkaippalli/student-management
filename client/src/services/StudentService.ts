import axios from "axios";
import Student from "@/types/student";

export default class StudentService {
    static URL = "http://localhost:3000/api/post"

    static fetchStudent(studentId: number) {
        let dataURL = `${this.URL}/${studentId}`
        return axios.get(dataURL)
    }

    static createStudent(student: Student) {
        let dataURL = `${this.URL}`
        return axios.post(dataURL, student)
    }

    static deleteStudent(studentId: number) {
        let dataURL = `${this.URL}/${studentId}`
        return axios.delete(dataURL);
    }

    static updateStudent(studentId: number) {
        let dataURL = `${this.URL}/${studentId}`
        return axios.put(dataURL);
    }
}