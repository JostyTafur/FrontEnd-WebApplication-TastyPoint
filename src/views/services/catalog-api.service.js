import http from '/core/services/http-common.js';

export class PostsApiService {
    getAll() {
        return http.get('/posts');
    }

    getById(id) {
        return http.get(`/posts/${id}`);
    }

    create(data) {
        return http.post('/posts', data);
    }

    update(id, data) {
        return http.put(`/posts/${id}`, data);
    }

    patch(id, data){
        return http.patch(`/posts/${id}`, data);
    }

    delete(id) {
        return http.delete(`/posts/${id}`);
    }

}
