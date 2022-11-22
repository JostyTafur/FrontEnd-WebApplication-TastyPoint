<template>
  <div class="catalog">
    <div class="title">
      <h2>Catalog of products and supplies:</h2>
    </div>
    <div class="buttons-catalog">
      <router-link :to="{ name: 'consumerView', params: {userProfileId:userProfileId}}">
        <pv-button class="consumer-view" label="Consumer View"></pv-button>
      </router-link>
      <router-link :to="{ name: 'postDish', params: {userProfileId:userProfileId}}" style="margin-left: 20px">
        <pv-button class="post-new" label="Post New"></pv-button>
      </router-link>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="cards">
        <pv-card  v-for="post of posts" :key="post.id">
          <template #header>
            <img class="image-card" src="https://cdn-icons-png.flaticon.com/512/2937/2937032.png" alt="">
          </template>
          <template #content>
            <div class="content-card">
              <router-link :to="{ name: 'edit', params: {id:post.id}}" style="cursor:pointer">
                <i  class="pi pi-pencil" style="font-size: 2rem;margin-left: 25vw;"></i>
              </router-link>
              <a v-on:click="deletePost(post)" style="cursor:pointer">
                <i class="pi pi-minus-circle" style="font-size: 2rem;margin-left: 1.5vw;"></i>
              </a>
              <div class="content-card fontSize">Pack Name: {{post.name}}</div>
              <br>
              <div class="content-card fontSize">Price: {{post.price}}</div>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>
  </div>
</template>

<script>
import {PacksApiService} from "../services/packs-api.service";
export default{
  name: "Catalog",
  data(){
    return {
      posts:[],
      post: {},
      valueReceived:null,
      packService: null,
      userProfileId: 0
    };
  },
  created(){
    this.userProfileId = this.$route.params.userProfileId;
    try{
      this.packService = new PacksApiService();
      this.packService.getByUserId(this.userProfileId).then((response)=>{
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
      this.packService
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
  grid-template-columns: 1fr;
  justify-content: start;
}
.title{
  margin: 10px 40px 0 50px;

  justify-self: start;
}
.consumer-view{
  background: #F9731C;
  font-family: 'Montserrat';
}

.consumer-view:hover{
  background: #ffa46e;
}
.buttons-catalog{
  justify-self: end;
  margin-right:15.5vw;
  margin-top:-0.4vw;
  margin-bottom:0.4vw;

}
.post-new{
  background: #3F1602;
  font-family: 'Montserrat';
}

.post-new:hover{
  background: #933404;
}
.cards{
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 20px;
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
  justify-self: center;
  width:60vw;
  height:fit-content;
  margin: 15px;
  border-radius: 20px;
  position:relative;
}
.content-card{
  font-family: 'Montserrat';
  text-align: start;
  margin-bottom: 8vh;
  width: fit-content;
}

.fontSize{
  font-size: 20px
}
.p-scrollpanel-bar{
  background-color: antiquewhite;
}

</style>