import axios from "axios";

const API_URL = "http://192.168.129.136:5000/api"; // Use "http://192.168.x.x:5000" for physical devices

export const student = (data) =>
  axios.post(`${API_URL}/student`, data, {
    headers: { "Content-Type": "application/json" },
  });

export const studentList = () =>
  axios.get(`${API_URL}/student`);

export const register = (data) =>
  axios.post(`${API_URL}/register`, data, {
    headers: { "Content-Type": "application/json" },
  });

export const login = (data) =>
  axios.post(`${API_URL}/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
