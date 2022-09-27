import http from '/core/services/http-common.js';

export class DishesApiService {
    getAll() {
        return http.get('/dishes');
    }

    getById(id) {
        return http.get(`/dishes/${id}`);
    }

    create(data) {
        return http.post('/dishes', data);
    }

    update(id, data) {
        return http.put(`/dishes/${id}`, data);
    }

    patch(id, data){
        return http.patch(`/dishes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/dishes/${id}`);
    }

    findByTitle(title) {
        return http.get(`/dishes?title=${title}`);
    }

    findBy(title,condicion) {
        return http.get(`/dishes?${title}=${condicion}`);
    }
}
