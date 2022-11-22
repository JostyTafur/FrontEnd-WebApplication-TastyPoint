import http from '/core/services/http-common.js';

export class UserprofileApiService {
    getById(id) {
        return http.get(`/userprofile/${id}`);
    }

    getByUserId(userId){
        return http.get(`/user/${userId}/userprofile`);
    }

    create(data) {
        return http.post('/userprofile', data);
    }

    update(id, data) {
        return http.put(`/userprofile/${id}`, data);
    }

    delete(id) {
        return http.delete(`/userprofile/${id}`);
    }

}