<template>
  <div class="orders">
    <div class="title">
      <h2>My order:</h2>
    </div>

    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="order-cards font-Mont">
        <pv-card v-for="order of orders" v-bind:key="order.id" class="element-card-order">
          <template #title>
            <div class="p-card-title font-Mont">
              <h3>Product: {{order.product}}</h3>
              <h4>Status: {{order.status}}</h4>
            </div>
          </template>
          <template #content>
            <div class="p-card-content font-Mont">
              <li>Restaurant: {{order.restaurant}}</li>
              <li>Product type: {{order.productType}}</li>
              <li>Delivery Method: {{order.deliveryMethod}}</li>
              <li>Payment Method: {{order.paymentMethod}}</li>
            </div>
            <p class="label-details font-Mont" v-on:click="changeDetails">Less details <i class="pi pi-arrow-down" style="font-size: 1.5rem"></i> </p>
          </template>
          <template #footer>
            <div class="p-card-footer">
              <button class="btn-cancel-order font-Mont" @click="cancelOrder(order)">To cancel an order</button>
              <button class="btn-edit-order font-Mont" @click="editOrder(order)">Edit order</button>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>

  </div>
</template>

<script>

import {OrdersApiService} from "../services/orders-api.service";

export default{
  name:'Orders',
  data(){
    return{
      text: '',
      orders:[],
      orderService: null
    };
  },
  created() {
    try{
      this.orderService=new OrdersApiService();
      this.orderService.getAll().then((response)=>{
        this.orders=response.data;
        console.log(this.orders);
      });
    }
    catch (e){
      console.error(e);
    }
  },
  methods:{
    editOrder(order){
    },
    cancelOrder(order){
    }
  }

}
</script>

<style scoped>
.orders{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

}
.font-Mont{
  font-family: 'Montserrat', sans-serif;
}
.title{
  margin: 1%;
  grid-column: 1;
  justify-self: start;
}
.order-cards{
  justify-content: center;
  column-count: 1;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 4%;
}
.p-card{
  border-radius: 20px;
}
.element-card-order{
  margin: 2%;
}
.p-card-title{
  column-count: 2;
}
.p-card-title h3{
  text-align: left;
  margin-left: 4%;
}
.p-card-title h4{
  text-align: right;
  margin-right: 4%;
}
.p-card-content{
  column-count: 2;
  font-size: 20px;
  text-align: left;
  margin-left: 4%;
  list-style: none;
}
.p-card-footer button{
  width: 227px;
  height: 59px;
  outline:none;
  border: hidden;
  color: #FDFBEF;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
}

.btn-cancel-order{
  background: #3F1602;
  transform: translate(-90%, 0%) scale(1);
}
.btn-edit-order{
  background: #E94152;
  transform: translate(-65%, 0%) scale(1);
}
.label-details{
  cursor: pointer;
  color: #3F1602;
  font-size: 25px;
  text-align: right;
  transform: translate(-3%, 230%) scale(1);
}
</style>
