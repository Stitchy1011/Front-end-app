import http from "../http-common";

class MenuDataService {
    getAll() {
        return http.get("/menus");
    }

    get(id) {
        return http.get(`/menu/${id}`);
    }

    create(data) {
        return http.post("/menus", data);
    }

    update(id, data) {
        return http.put(`/menu/${id}`, data);
    }

    delete(id) {
        return http.delete(`/menu/${id}`);
    }

    findById(id) {
        return http.get(`/menus?id=${id}`);
    }
}

export default new MenuDataService();
