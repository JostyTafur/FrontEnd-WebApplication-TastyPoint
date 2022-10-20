<template>
  <div class="catalog">
    <div class="title">
      <h2>Catalog of products and supplies:</h2>
    </div>
    <div class="buttons-catalog">
      <router-link to="/business/consumerView">
        <pv-button class="consumer-view">Consumer View</pv-button>
      </router-link>
      <router-link to="/business/postDish">
        <pv-button class="post-new">Post New</pv-button>
      </router-link>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="cards">
        <pv-card  v-for="post of posts" :key="post.id">
          <template #header>
            <img class="image-card" :src="post.image" alt="">
          </template>
          <template #content>

            <div class="content-card">
              <router-link :to="{ name: 'edit', params: {id:post.id}}">
                <i  class="pi pi-pencil" style="font-size: 2rem;margin-left: 25vw;cursor:pointer"></i>
              </router-link>
              <i class="pi pi-minus-circle" @click="deletePost(post)" style="font-size: 2rem;margin-left: 1.5vw;cursor:pointer"></i>
              <div class="content-card" style="margin-top:-2vw">Product Type: {{post.producttype}} </div>
              <br>
              <div class="content-card">Product Name: {{post.productname}}</div>
              <br>
              <div class="content-card">Description: {{post.description}}</div>
              <br>
              <div class="content-card">Delivery Methods: {{post.deliverymethod}}</div>
              <br>
              <div class="content-card">Price: {{post.price}}</div>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>
  </div>
</template>

<script>
import {PostsApiService} from "../services/catalog-api.service";
export default{
  name: "Catalog",


  data(){
    return {
      posts:[],
      catalogService: null,
      post: {},
      valueReceived:null,
    };
  },
  created(){
    try{
      this.catalogService = new PostsApiService();
      this.catalogService.getAll().then((response)=>{
        this.posts = response.data;
        console.log(this.posts);
      });
    }
    catch(e){
      console.error(e);
    }
  },
  methods: {
    deletePost(post) {
      this.catalogService
          .delete(post.id)
          .then((response) => {
            this.posts.filter((t) => t.id !== this.post.id);
            console.log(response.data.id);
            this.post = {};
            console.log(response);
          });
      this.reloadPage();
    },
    reloadPage() {
      window.location.reload();
    },


  }
}
</script>

<style scoped>
h2{
  color:black;
  font-weight: bold;
}
.catalog{
  display: grid;
  justify-content: start;
}
.title{
  margin: 10px 40px 0 50px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}
.consumer-view{
  background: #F9731C;
  margin-right:20px;
  font-family: 'Montserrat';
}
.buttons-catalog{
  justify-self: end;
  margin-right:15.5vw;
  margin-top:-0.4vw;
  margin-bottom:0.4vw;

}
.post-new{
  background: #3F1602;
  margin-left: 20px;
  font-family: 'Montserrat';
}
.cards{
  display: inline-block;
  padding: 20px 20px;
  margin-left: -10vw;
}
.image-card{
  height: 19vw;
  width: 26vw;
  margin-bottom:20px;
  padding: 10px;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius:10%;
  position:relative;

}

.p-card{

  display: inline-flex;
  align-items: end;
  justify-content: center;
  width:60vw;
  height:fit-content;
  margin: 15px;
  border-radius: 20px;
  position:relative;
}
.content-card{
  font-family: 'Montserrat';
  text-align: start;
  position:relative;
}
.p-scrollpanel-bar{
  background-color: antiquewhite;
}

</style>