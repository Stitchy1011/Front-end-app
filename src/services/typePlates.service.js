import http from "../http-common";

class TypePlateDataService {
    getAll() {
        return http.get("/typePlates");
    }

    get(id) {
        return http.get(`/typePlate/${id}`);
    }

    create(data) {
        return http.post("/typePlates", data);
    }

    update(id, data) {
        return http.put(`/typePlate/${id}`, data);
    }

    delete(id) {
        return http.delete(`/typePlate/${id}`);
    }

    findById(id) {
        return http.get(`/typePlates?id=${id}`);
    }
}