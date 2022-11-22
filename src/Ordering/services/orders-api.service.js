import http from '/core/services/http-common.js'

export class OrdersApiService{
    getByUserProfileId(id){
        return http.get(`/userprofile/${id}/orders`);
    }
    delete(id) {
        return http.delete(`/orders/${id}`);
    }
}