import axios from "axios";
// import { Student } from "@/types/student";
import { ResponseData } from "@/types/responseData";
import { NewStudent } from "@/types/newStudent";
import { StudentIdRes } from "@/types/studentIdRes";

export default class StudentService {
    static URL = "http://localhost:3000/api/post"

    static fetchAllStudent(): Promise<ResponseData> {
        const dataURL = `${this.URL}`
        return axios.get(dataURL)
    }

    static fetchStudent(studentId: string): Promise<StudentIdRes> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.get(dataURL)
    }

    static createStudent(student: NewStudent): Promise<ResponseData> {
        const dataURL = `${this.URL}`
        return axios.post(dataURL, student)
    }

    static deleteStudent(studentId: string) : Promise<ResponseData> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.delete(dataURL);
    }

    static updateStudent(studentId: string, studentDetails: NewStudent): Promise<StudentIdRes> {
        const dataURL = `${this.URL}/${studentId}`
        return axios.patch(dataURL, studentDetails);
    }
}