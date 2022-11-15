<template>
  <div class="bg">
    <div style="display: grid; grid-template-columns: 10% 90%; margin: 10px">
      <router-link to="/consumer/list" style="justify-self: center; align-self: center">
        <i class="pi pi-arrow-left" style="font-size: 2rem;"></i>
      </router-link>
      <h1 style="color: #3f1602">Details Product</h1>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh">
      <div class="Detail">
        <div class="product">
          <div class="image">
            <img src="https://www.diariamenteali.com/medias/receta-de-papas-sancochadas-con-aroma-de-pachamanca-1900Wx500H?context=bWFzdGVyfGltYWdlc3wyMjEwMTd8aW1hZ2UvanBlZ3xoOTYvaGZhLzkwNzQxMzAxNTc1OTgvcmVjZXRhLWRlLXBhcGFzLXNhbmNvY2hhZGFzLWNvbi1hcm9tYS1kZS1wYWNoYW1hbmNhXzE5MDBXeDUwMEh8NTM3MTJiMzI2YmQ2OTAyY2UzOGNkNDFlNTIxZTg4ZmRmZWVhMDE5OWM2YmI0Y2I1NmE4ZDNmYmRkZTg2Yzc1Nw">
          </div>
          <div class="btn-rest">
            <router-link to="/consumer/Profiles-food-store">
              <pv-button class="btn-restaurant" label="Restaurant: "></pv-button>
            </router-link>
          </div>
          <pv-card class="descrip">
            <template #content>
              <p>Pack name: </p>
              <p>Price: </p>
              <p> Description: </p>
            </template>
          </pv-card>
        </div>

        <div class="order">
          <pv-card class="card-order">
            <template #header>
              <h2>Make an Order</h2>
            </template>
            <template #content>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <h4>Quantity</h4>
                <pv-inputnumber showButtons buttonLayout="horizontal" :step="1"
                                decrementButtonClass="p.button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus"
                                decrementButtonIcon="pi pi-minus"></pv-inputnumber>
              </div>
              <br>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <label for="method">Method of delivery</label>
                <pv-dropdown inputId="method"></pv-dropdown>
              </div>
              <br>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <label for="delivery">Delivery Adress</label>
                <pv-inputtext inputId="delivery"></pv-inputtext>
              </div>
              <br>
              <div style="display: grid; grid-template-columns: 1fr 1fr;">
                <label for="price">Price</label>
                <pv-inputtext inputId="price"></pv-inputtext>
              </div>

              <pv-card class="tarjeta">
                <template #content>
                  <div style="display: grid; grid-template-columns: 1fr 1fr;">
                    <h4>Cardholder</h4>
                    <pv-inputtext></pv-inputtext>
                  </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr;">
                    <h4>Card number</h4>
                    <pv-inputtext></pv-inputtext>
                  </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr;">
                    <div>
                      <h4>Expiration Date</h4>
                      <pv-inputtext></pv-inputtext>
                    </div>
                    <div>
                      <h4>Security Code</h4>
                      <pv-inputtext></pv-inputtext>
                    </div>
                  </div>
                </template>
              </pv-card>
              <div class="btnsFooter">
              <pv-button label="Cancel"></pv-button>
              <pv-button label="Pay and Finish"></pv-button>
            </div>
            </template>
          </pv-card>
        </div>
      </div>
    </pv-scrollpanel>
  </div>


</template>

<script>
export default {
  name: "DetailsDish",
  data(){
    return {
      id: Number
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

.bg{
  background-color: white;
  border-radius: 15px;
  margin: 15px;
}
.Detail{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.image img{
  width: 38vw;
  border-radius: 20px;
}

.product{
  width: 100%;
}

.order{
  width: 100%;
}
.btn-rest{
  width: 40vw;
  border-radius: 20px;
}
.btn-restaurant{
  width: 38vw;
  font-size: 30px;
  border-radius: 20px;
  background-color: #f7721c;
  color: #3f1602;
}
.descrip{
  width: 38vw;
  height: 35vh;
  border-radius: 20px;
  margin: 1vw;
  background-color: #e74051;
}

.card-order{
  width: 35vw;
  border-radius: 20px;
  background-color: #e74051;
  height: 80vh;
}
.tarjeta{

}
.p-inputnumber{
  height: 18px;
}
.p-dropdown{
  height: 30px;
}
.p-inputtext{
  height: 9px;
  justify-self: center;
  align-self: center;
}
.btnsFooter{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>