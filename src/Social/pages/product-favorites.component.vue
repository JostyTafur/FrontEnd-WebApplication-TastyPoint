<template>
    <div class="favorites">
        <div class="title">
            <h2>Close to your area: </h2> 
        </div>
      <pv-scrollpanel style="width:99%; height: 80vh">
        <div class="cards">
          <pv-card  v-for="product of products" :key="product.favorite" v-show="product.favorite">
            <template #header>
              <div class="header-card">
                <router-link :to="{ name: 'detail', params: {id:product.id}}">
                  <img class="img-card" :src="product.image" alt=""/>
                </router-link>
                <div class="price">Price: {{product.price}}</div>

              </div>
            </template>
            <template #title>
              <div class="title-card">
                <div class="rest-name">{{product.restaurantname}}</div>
                <div class="icon-card">
                  <a v-on:click="updateFavorite(product)">
                    <i :class="[product.favorite? 'pi pi-heart-fill' : 'pi pi-heart']" style="font-size: 2rem"></i>
                  </a>
                </div>
              </div>

            </template>
            <template #content>
              <div class="content-card">
                <div>
                  Product type: {{product.producttype}}
                </div>
                <div>
                  Product name: {{product.productname}}
                </div>
              </div>
            </template>
          </pv-card>

        </div>
      </pv-scrollpanel>
        
    </div>
</template>

<script>
import {ProductsApiService} from "/src/Selling/services/products-api.service.js"
export default{
    name: "List",
    data(){
        return {
            products:[],
            productsService: null
        };
    },
    created(){
        try{
            this.productsService = new ProductsApiService();
            this.productsService.getAll().then((response)=>{
            this.products = response.data;
            console.log(this.products);
        });
        }
        catch(e){
            console.error(e);
        }
    },
    methods:{
        updateFavorite(product){
            this.productsService.patch(product.id, {"favorite": !product.favorite});
            product.favorite = !product.favorite;
        }
    }
}
</script>

<style scoped>
    .title{
       margin: 60px 40px 0 60px;
       grid-column: 1;
       grid-row: 1;
       justify-self: start;
    }
    .favorites{
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
        color: white;
        font-size: 18px;
    }
    .p-card{
        width: 23vw;
        height: 36vh;
        margin: 15px;
        border-radius: 20px;
        justify-self: center;
    }
    .title-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
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