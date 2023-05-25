import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/user/${id}`);
    }

    create(data) {
        return http.post("/users", data);
    }

    update(id, data) {
        return http.put(`/user/${id}`, data);
    }

    delete(id) {
        return http.delete(`/user/${id}`);
    }

    findById(id) {
        return http.get(`/users?id=${id}`);
    }
}