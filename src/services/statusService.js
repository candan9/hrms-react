import React from 'react'
import axios from "axios";
export default class StatusService {
    
    getAll() {
        return axios.get("http://localhost:8080/api/statustypes/getall");
      }
     
}
