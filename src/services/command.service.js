import http from "../http-common";

class CommandDataService {
    getAll() {
        return http.get("/commands");
    }

    get(id) {
        return http.get(`/command/${id}`);
    }

    create(data) {
        return http.post("/commands", data);
    }

    update(id, data) {
        return http.put(`/command/${id}`, data);
    }

    delete(id) {
        return http.delete(`/command/${id}`);
    }

    findById(id) {
        return http.get(`/commands?id=${id}`);
    }
}

export default new CommandDataService();
