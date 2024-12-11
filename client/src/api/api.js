import axios from "axios";

// Axios instance for API base URL
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Categories API
export const addCategory = (data) => API.post("/categories", data);
export const fetchCategories = () => API.get("/categories");
export const deleteCategory = (id) => API.delete(`/categories/${id}`);

// Questions API
export const addQuestion = (data) => API.post("/questions", data);
export const fetchQuestions = () => API.get("/questions");
