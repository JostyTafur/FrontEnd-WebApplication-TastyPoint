<template>
  <div style="display: grid; grid-template-columns: 10% 90%; margin: 10px">
    <router-link to="/consumer/list" style="justify-self: center; align-self: center">
      <i class="pi pi-arrow-left" style="font-size: 2rem;"></i>
    </router-link>
    <h1>Details Product</h1>
  </div>
  <pv-scrollpanel style="width:99%; height: 82vh">
    <div class="Detail">
      <div>
        <div class="container-card">
          <div class="card">
            <figure>
              <img src="https://www.diariamenteali.com/medias/receta-de-papas-sancochadas-con-aroma-de-pachamanca-1900Wx500H?context=bWFzdGVyfGltYWdlc3wyMjEwMTd8aW1hZ2UvanBlZ3xoOTYvaGZhLzkwNzQxMzAxNTc1OTgvcmVjZXRhLWRlLXBhcGFzLXNhbmNvY2hhZGFzLWNvbi1hcm9tYS1kZS1wYWNoYW1hbmNhXzE5MDBXeDUwMEh8NTM3MTJiMzI2YmQ2OTAyY2UzOGNkNDFlNTIxZTg4ZmRmZWVhMDE5OWM2YmI0Y2I1NmE4ZDNmYmRkZTg2Yzc1Nw">
            </figure>
            <div class="contenido-card">
              <router-link to="/consumer/profile-food-store">
                <a href="1">Restaurant: 7 Sopas</a>
              </router-link>

              <p>Product type: Supplies</p>
              <p>Product name: Parboiled</p>
              <p>Description: Boiled potatoes left over from the preparation of  a soup  of the day</p>
              <p>Delivery methods:</p>
              <p>Face-to-face</p>
              <p>This store does not offer delivery</p>
            </div>
          </div>

          <div class="segunda- card">
            <div class="segunda- contenido-card">
              <h3> Make an order: </h3>
              <form>
                <p>Quantity:</p>     <input type="text">
                <p>Method Of Delivery:</p>  <input type="text">
                <p>Delivery Adress :</p>  <input type="text">
                <p>Total Price:      S./ </p>  <input type="text">
                <p>Payment Method :</p>  <input type="text">
                <p>Card Holder :</p>  <input type="text">
                <p>Card number :</p>  <input type="text">
                <p>Expiration Date :</p>  <input type="text">

              </form>
              <div>
                <a href="2">Cancel</a>
                <div class="space">
                </div>
                <a href="3">Pay and finish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </pv-scrollpanel>

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
.title{
  margin: 00px
}
.detail{
  display: grid;
  justify-content: start;
  text-align:center;
}
.cards{
  margin: 00px;
  display: flex;
  justify-content: center;
}


.container {
  margin: 10px;
}

input {
  outline: 30px;
  box-sizing: border-box;
  height: 35px;
  width: 90px;
  padding: 0 100px;
  color: #000;
  border-radius: 30px;
  font-size: 20px;
  border: 2px solid #D50000;
  transition: all .7s ease;
}

::placeholder {
  color: grey;
}

.btn {
  position: absolute;
  right: -10px;
  top: 0px;
  width: 50px;
  height: 50px;
  background: #D50000;
  line-height: 70px;
  border-radius: 45%;
  text-align: center;
  cursor: pointer;
  transition: .7s;
}

.btn2 {
  position: absolute;
  right: -10px;
  top: 0px;
  width: 50px;
  height: 50px;
  background: #D50000;
  line-height: 70px;
  border-radius: 45%;
  text-align: center;
  cursor: pointer;
  transition: .7s;
}

.btn p {
  font-size: 10px;
  color: white;
  line-height: 200px;
  transition: all .7s ease;

}

.container input {
  width: 1450px;
  height: 50px;
}
.container input {
  width: 1515px;
  height: 50px;
}

.container:hover i{
  transform: rotate(-360deg);
}

.btn:hover{
  background: black;

}
.container-card{
  display: flex;
  margin: auto;
}
.title-cards{
  width: 100%;
  max-width: 1080px;
  margin: auto;
  padding: 100px;
  margin-top: 30px;
  text-align: center;
  color: black;
}
.card{
  width: 100%;
  margin: 90px;
  border-radius: 29px;
  overflow: hidden;
  background:white;
  box-shadow: 0px 1px 80px rgba(0,0,0,0.2);
  transition: all 400ms ease-out;
  cursor: default;

}

.segunda-card{
  width: 100%;
  margin: 60px;
  border-radius: 29px;
  overflow: hidden;
  background:brown;
  box-shadow: 0px 1px 80px rgba(0,0,0,0.2);
  transition: all 400ms ease-out;
  cursor: default;
}
.card:hover{
  box-shadow: 15px 15px 80px rgba(0,0,0,0.4);
  transform: translateY(-3%);
}
.card img{
  width: 100%;
  height: 330px;
}
.card .contenido-card{
  padding: 30px;
  text-align:center;
}

.card .contenido-card{
  padding: 30px;
  text-align:-moz-center;
}
.card .contenido-card h3{
  margin-bottom: 30px;
  color: black;

}
.card .contenido-card p{
  line-height: 1.3;
  color: brown;
  font-size: 18px;
  margin-bottom: 5px;
}
.card .contenido-card a{
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: saddlebrown;
  border: 1px solid sandybrown;
  border-radius: 10px;
  transition: all 400ms ease;
  margin-bottom: 40px;
}
.card .contenido-card a:hover{
  background: brown;
  color: black;
}
@media only screen and (min-width:320px) and (max-width:768px){
  .container-card{
    flex-wrap: wrap;
  }
  .card{
    margin: 80px;
  }
}
.space {
  width: 20px;
  height: 40px;
  display: inline-block;
}

list{
  display: grid;
  justify-content: start;
  text-align:left;
}


.blue {
  background: #fff;
  text-align: center;
}

.contact {
  max-width: 1200px;
  margin: 0 auto;
}

.contact input, .contact textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #D4D7E0;
  color: black;
  -webkit-transition: .5s ease all;
  transition: .5s ease all;
}

.contact textarea {
  height: 160px;
  resize: none;
}

.contact button {
  display: block;
  width: 100%;
  background: black;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  color: brown;
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: .5s ease all;
  transition: .5s ease all;
}
</style>