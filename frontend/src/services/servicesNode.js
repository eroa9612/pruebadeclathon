import axios from "axios";
import API from "./apiURL";

//let header = { headers: { Token: localStorage.getItem("token") } };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async login(email, pwd) {
    const response = await axios.post(API.node + "users/login", {
      email: email,
      password: pwd,
    });
    return response;
  },

  async registerUser(name, email, pwd) {
    const response = await axios.post(API.node + "users/add", {
      name,
      email,
      password: pwd,
    });
    return response.data;
  },

  async getProductos() {
    let header = { headers: { token: localStorage.getItem("token") } };
    const response = await axios.get(API.node + "productos/list", header);
    return response.data;
  },
};
