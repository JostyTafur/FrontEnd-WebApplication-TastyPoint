<template>
  <div class="orders">
    <div class="title">
      <h2>Orders:</h2>
    </div>

    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="order-cards">
        <pv-card v-for="order of orders" class="element-card-order">
          <template #title>
            <div class="p-card-title">
              <h3>Product: {{order.product}}</h3>
              <h4>Restaurant: {{order.restaurant}}</h4>
            </div>
          </template>
          <template #content>
            <div class="p-card-content">
              <li>Product type: {{order.productType}}</li>
              <li>Delivery Method: {{order.deliveryMethod}}</li>
              <li>Payment Method: {{order.paymentMethod}}</li>
              <li>Consumer: {{order.consumer}}</li>
              <li>Unit Price: {{order.unitPrice}}</li>
              <li>Quantity: {{order.quantity}}</li>
              <li>Total Price: {{order.totalPrice}}</li>
              <li>Date and Time: {{order.dateTime}}</li>
            </div>
          </template>
          <template #footer>
            <div class="p-card-footer">
              <button class="btn-accept" @click="acceptOrder(order)">To accept</button>
              <button class="btn-decline" @click="declineOrder(order)">Decline</button>

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
      orderService: null,
      order: {}
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
    acceptOrder(order){
      order.orderAccepted = true;
    },
    declineOrder(order){
      order.delete(this);


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

.btn-accept{
  background: #3F1602;
  transform: translate(-90%, 0%) scale(1);
}
.btn-decline{
  background: #3F1602;
  transform: translate(-65%, 0%) scale(1);
}

</style>
