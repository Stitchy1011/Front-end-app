import http from "../http-common";

class ProcurementDataService {
    getAll() {
        return http.get("/procurements");
    }

    get(id) {
        return http.get(`/procurement/${id}`);
    }

    create(data) {
        return http.post("/procurements", data);
    }

    update(id, data) {
        return http.put(`/procurement/${id}`, data);
    }

    delete(id) {
        return http.delete(`/procurement/${id}`);
    }

    findById(id) {
        return http.get(`/procurements?id=${id}`);
    }
}