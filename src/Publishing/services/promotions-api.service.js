import http from '/core/services/http-common.js';

export class PromotionsApiService {
    getAll() {
        return http.get('/promotion');
    }

    getById(id) {
        return http.get(`/promotion/${id}`);
    }

    getByUserProfileId(id) {
        return http.get(`/userprofile/${id}/promotions`);
    }

    create(data) {
        return http.post('/promotion', data);
    }

    update(id, data) {
        return http.put(`/promotion/${id}`, data);
    }

    delete(id) {
        return http.delete(`/promotion/${id}`);
    }
}
