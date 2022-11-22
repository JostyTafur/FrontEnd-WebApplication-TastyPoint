<template>
  <div class="search">
    <input class="Input"
           type="text"
           v-model="search"
           placeholder=" Search foods dishes, supplies  or restaurants"
           v-on:click="putSearch(true)" v-on:mouseenter="putSearch(true)" v-on:mouseleave="unputSearch(true)">
    <i class="pi pi-search"  style="font-size: 1rem; color:#000000;position:absolute; margin: -1.5rem 10rem 0rem 31.5rem;"></i>
  </div>
  <div class="list">
    <div class="title">
      <h2 v-if="textS==''">Close to your area</h2>
      <h2 v-else>{{textS}}</h2>
    </div>

    <pv-scrollpanel style="width:99%; height: 80vh">
      <div class="cards">
        <pv-card  v-for="product of filteredProducts" :key="product.id">
          <template #header>
            <router-link :to="{ name: 'detail', params: {id:product.id}}">
              <img class="img-card" src="https://cdn-icons-png.flaticon.com/512/2937/2937032.png" alt=""/>
            </router-link>

          </template>
          <template #title>
            <div class="title-card">
              <div class="rest-name font-Mont">{{product.name}}</div>
              <div class="price font-Mont">Price: S/{{product.price}}</div>
              <div class="icon-card">
                <!--<a v-on:click="updateFavorite(product)">
                  <i :class="[product.favorite? 'pi pi-heart-fill' : 'pi pi-heart']" style="font-size: 2rem"></i>
                </a>-->
              </div>
            </div>

          </template>
          <template #content>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>

  </div>
</template>

<script>
import {PacksApiService} from "../services/packs-api.service";

export default {
  name: "List",
  data() {
    return {
      search: "",
      products: [],
      productsService: null,
      product: {},
      textS: "",
    };
  },
  created() {
    try {
      this.productsService = new PacksApiService();
      this.productsService.getAll().then((response) => {
        this.products = response.data;
        console.log(response);
      });
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product => (product.name)))

    }
  },
  methods: {
    updateFavorite(product) {
      this.productsService.patch(product.id, {"favorite": !product.favorite});
      product.favorite = !product.favorite;
    },
    putSearch() {
      this.textS = "Search Results";
    },
    unputSearch() {
      this.textS = "Close to your area";
    }
  }
}
</script>

<style scoped>
.title{
  margin: 10px 40px 0 60px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}
.font-Mont{
  font-family: 'Montserrat', sans-serif;
}
input{
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;
  width: 77vw;
  height: 2rem;
  border-radius: 10px;
  font-family: Montserrat;
}
.list{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
}
.cards{
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-row: 2;
}
.img-card{
  height: 18vh;
  width: 21vw;
  margin: 10px;
  border-radius: 10px;
}
.header-card{
  position: relative;
  display: inline-block;
}
.price{
  position: absolute;
  top: 70%;
  left: 65%;
  color: #000000;
  font-size: 18px;
}
.p-card{
  width: 23vw;
  height: 35vh;
  margin: 15px;
  border-radius: 20px;
  justify-self: center;
}
.title-card{
  display: grid;
  grid-template-columns: 3fr 1fr;
  font-size: 18px;
  margin-top: -25px;
}
.rest-name{
  grid-column: 1/2;
  justify-self: start;
  margin-left: 10px;
}
.icon-card{
  grid-column: 3/3;
  justify-self: end;
  margin-right: 20px;
}
.content-card{
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 15px;
  margin: -30px 10px 0px 10px;
}
</style>
