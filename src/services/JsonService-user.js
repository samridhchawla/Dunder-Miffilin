import http from "../http-common.js";

class JsonServiceUser {
  getJson() {
    return http.get("data/customers.json");
  }
}

export default new JsonServiceUser();
