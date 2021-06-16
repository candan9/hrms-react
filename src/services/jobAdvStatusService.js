import axios from "axios";

export default class JobAdvStatusService {
    add(jobAdvStatus) {
        console.log(jobAdvStatus);
        return axios.post(
          "http://localhost:8080/api/jobadvstatuses/add",
          jobAdvStatus
        );
      }
    
      getAll() {
        return axios.get("http://localhost:8080/api/jobpostingstatuses/getall");
      }
    
      getLastByJobAdvId(jobAdvId) {
        return axios.get(
          "http://localhost:8080/api/jobpostingstatuses/getlastbyjobadvid?jobAdvId=" +
          jobAdvId
        );
      }
}
