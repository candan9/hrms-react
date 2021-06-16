import axios from "axios";

export default class EmploymentService {
    getAll() {
        return axios.get("http://localhost:8080/api/employments/getall");
      }
}
