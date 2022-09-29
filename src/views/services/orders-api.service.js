import http from '/core/services/http-common.js'

export class OrdersApiService{
    getAll(){
        return http.get('/orders');
    }
    delete(id) {
        return http.delete(`/orders/${id}`);
    }
}