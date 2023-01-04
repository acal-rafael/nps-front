import axios from "axios";


export const api = axios.create({
  baseURL: "https://apiacal.acalhomecenter.com.br:8124/",
  headers: {
    'Content-Type': 'application/json'
  }
});

