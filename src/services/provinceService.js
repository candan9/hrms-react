import axios from "axios";

export default class ProvinceService {
    getAll() {
        return axios.get("http://localhost:8080/api/provinces/getall");
      }
}
