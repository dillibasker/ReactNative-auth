import {axios} from "axios";

const API_URL = "http://10.0.2.2:5000"; // For Android Emulator



export const student=(data) => axios.post(`${API_URL}/student`,data)
export const studentList=()=>axios.get(`${API_URL}/student`)
export const register=(data) => axios.post(`${API_URL}/register`)
export const login=(data)=>axios.post(`${API_URL}/login`)
