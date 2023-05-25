import http from "../http-common";

class StatusDataService {
    getAll() {
        return http.get("/statuss");
    }

    get(id) {
        return http.get(`/status/${id}`);
    }

    create(data) {
        return http.post("/statuss", data);
    }

    update(id, data) {
        return http.put(`/status/${id}`, data);
    }

    delete(id) {
        return http.delete(`/status/${id}`);
    }

    findById(id) {
        return http.get(`/statuss?id=${id}`);
    }
}