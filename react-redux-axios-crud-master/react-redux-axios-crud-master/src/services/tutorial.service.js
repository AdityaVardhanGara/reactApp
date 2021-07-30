import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/allCompany");
  }

  get(id) {
    return http.get(`/getCompany/${id}`);
  }

  create(data) {
    return http.post("/addCompany", data);
  }

  update(id, data) {
    return http.put(`/updateCompany`, data);
  }

  delete(id) {
    return http.delete(`/Company/${id}`);
  }

  deleteAll() {
    return http.delete(`/Company`);
  }

  findByTitle(title) {
    return http.get(`/searchCompany/${title}`);
  }
}

export default new TutorialDataService();