import http from '/core/services/http-common.js';

export class UserApiService {
    signup(data) {
        return http.post('/users/sign-up', data);
    }
    signin(data){
        return http.post('/users/sign-in', data);
    }
}
