import axios from "axios";
import { Student } from "@/types/student";


export default class StudentService {
    static URL = "http://localhost:3000/api/post"

    static fetchAllStudent(): Promise<any> {
        const dataURL = `${this.URL}`
        return axios.get(dataURL)
    }

    static fetchStudent(studentId: number): Promise<any> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.get(dataURL)
    }

    static createStudent(student: Student): Promise<any> {
        const dataURL = `${this.URL}`
        return axios.post(dataURL, student)
    }

    static deleteStudent(studentId: any) : Promise<any> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.delete(dataURL);
    }

    static updateStudent(studentId: number): Promise<any> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.put(dataURL);
    }
}