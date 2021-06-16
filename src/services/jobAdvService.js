import axios from "axios";

export default class JobAdvService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobadvs/getall");
      }
    
      getAllApprovedStatus() {
        return axios.get(
          "http://localhost:8080/api/jobadvs/getallapprovedstatus"
        );
      }
    
      getById(id) {
        return axios.get("http://localhost:8080/api/jobadvs/getbyid?id=" + id);
      }
    
      getAllByEmployerId(employerId) {
        return axios.get(
          "http://localhost:8080/api/jobadvs/getallbyemployerid?employerId=" +
            employerId
        );
      }
    
      add(jobPosting) {
        return axios.post("http://localhost:8080/api/jobadvs/add", jobPosting);
      }
}
