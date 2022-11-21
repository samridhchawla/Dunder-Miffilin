import http from "../http-common.js";

class JsonService {
  getJson() {
    return http.get("data/products.json");
  }
}

export default new JsonService();
