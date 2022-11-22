import http from '/core/services/http-common.js';

export class PacksApiService {
    getAll() {
        return http.get('/packs');
    }

    getById(id) {
        return http.get(`/packs/${id}`);
    }

    getByUserId(id){
        return http.get(`/userprofiles/${id}/packs`)
    }

    getProductsByPackId(id){
        return http.get(`/packs/${id}/products`)
    }

    create(data) {
        return http.post('/packs', data);
    }

    update(id, data) {
        return http.put(`/packs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/packs/${id}`);
    }

}
