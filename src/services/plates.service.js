import http from "../http-common";

class PlateDataService {
    getAll() {
        return http.get("/plates");
    }

    get(id) {
        return http.get(`/plate/${id}`);
    }

    create(data) {
        return http.post("/plates", data);
    }

    update(id, data) {
        return http.put(`/plate/${id}`, data);
    }

    delete(id) {
        return http.delete(`/plate/${id}`);
    }

    findById(id) {
        return http.get(`/plates?id=${id}`);
    }
}

export default new PlateDataService();
