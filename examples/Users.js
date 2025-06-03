import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export class Users {
  static getAll() {
    // Solo debe devolver usuaros
    return axios.get(`${BASE_URL}/users`).then((res) => res.data);
  }
}
