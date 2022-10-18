import http from '/core/services/http-common.js';

export class NotificationsApiService {
    getAll() {
        return http.get('/notifications');
    }

    getById(id) {
        return http.get(`/notifications/${id}`);
    }

    create(data) {
        return http.post('/notifications', data);
    }

    update(id, data) {
        return http.put(`/notifications/${id}`, data);
    }

    patch(id, data) {
        return http.patch(`/notifications/${id}`, data);
    }

    delete(id) {
        return http.delete(`/notifications/${id}`);
    }

    findByTitle(title) {
        return http.get(`/notifications?title=${title}`);
    }

    findBy(title, condicion) {
        return http.get(`/notifications?${title}=${condicion}`);
    }
}
