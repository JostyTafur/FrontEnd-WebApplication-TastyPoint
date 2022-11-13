<template>

  <div class="list">
    <div class="title">
      <h2>Catalog of products and supplies:</h2>
    </div>
    <div class="buttons-catalog">
      <router-link to="/business/catalogue">
        <pv-button class="my-view">My View</pv-button>
      </router-link>
      <router-link to="/business/postDish">
        <pv-button class="post-new">Post New</pv-button>
      </router-link>
    </div>
    <pv-scrollpanel style="width:99%; height: 80vh">
      <div class="cards">
        <pv-card  v-for="dish of filteredDishes" :key="dish.id">
          <template #header>
            <a href="/business/catalogue">
              <img class="img-card" :src="dish.image"/>
            </a>
            <div class="price">Price: {{dish.price}}</div>

          </template>
          <template #title>
            <div class="title-card">
              <div class="rest-name">{{dish.restaurantname}}</div>
              <div class="icon-card">
                <a v-on:click="updateFavorite(dish)">
                  <i :class="[dish.favorite? 'pi pi-heart-fill' : 'pi pi-heart']" style="font-size: 2rem"></i>
                </a>
              </div>
            </div>

          </template>
          <template #content>
            <div class="content-card">
              <div>
                Product type: {{dish.producttype}}
              </div>
              <div>
                Product name: {{dish.productname}}
              </div>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>

  </div>
</template>

<script>
import {PostsApiService} from "../services/catalog-api.service";
export default {
  name: "ConsumerView",
  data() {
    return {
      search: "",
      dishes: [],
      dishesService: null,
      dish: {},
      textS: "",
    };
  },
  created() {
    try {
      this.dishesService = new PostsApiService();
      this.dishesService.getAll().then((response) => {
        this.dishes = response.data;
        console.log(this.dishes);
      });
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    filteredDishes() {
      return this.dishes.filter((dish => (dish.productname.includes(this.search) || dish.restaurantname.includes(this.search))))

    }
  },
}
</script>

<style scoped>
.title{
  margin: 10px 40px 0 30px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  color:black;

}
.list{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
}
.my-view{
  background: #F9731C;
  margin-right:20px;
  font-family: 'Montserrat';
}
.buttons-catalog{
  justify-self: end;
  margin-right:4vw;
  margin-bottom: 0.4vw;
  margin-top: 1vw;

}
.post-new{
  background: #3F1602;
  margin-left: 20px;
  font-family: 'Montserrat';
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
  height: 35vh;
  margin: 15px;
  border-radius: 20px;
  justify-self: center;
}
.title-card{
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 20px;
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