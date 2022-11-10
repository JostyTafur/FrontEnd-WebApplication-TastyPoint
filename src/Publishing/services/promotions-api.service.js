import http from '/core/services/http-common.js';

export class PromotionsApiService {
    getAll() {
        return http.get('/promotions');
    }

    getById(id) {
        return http.get(`/promotions/${id}`);
    }

    create(data) {
        return http.post('/promotions', data);
    }

    update(id, data) {
        return http.put(`/promotions/${id}`, data);
    }

    patch(id, data) {
        return http.patch(`/promotions/${id}`, data);
    }

    delete(id) {
        return http.delete(`/promotions/${id}`);
    }

    findByTitle(title) {
        return http.get(`/promotions?title=${title}`);
    }

    findBy(title, condicion) {
        return http.get(`/promotions?${title}=${condicion}`);
    }
}
