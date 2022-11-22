<template>
  <div class="catalog">
    <div class="title">
      <h2>Catalog of products and supplies:</h2>
    </div>
    <div class="buttons-catalog">
      <router-link to="/business/consumerView">
        <pv-button class="consumer-view">Consumer View</pv-button>
      </router-link>
      <pv-button class="post-new" style="margin-left: 20px">Post New</pv-button>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="cards">
        <pv-card>
          <template #content>
            <div style="display: grid; grid-template-columns: 1fr 1fr;">
              <div class="content-card" style="margin: 2vw; display: grid;">
                <div class="content-card">Product Type:
                  <pv-dropdown v-model="post.producttype" :options="productTypes" optionLabel="name" optionValue="code" style="width:17.4vw;"></pv-dropdown>
                </div>
                <br>
                <div class="content-card">Product Name:
                  <pv-inputtext v-model="post.productname" style="width:16.7vw;height:1vw" type="text" id="product-type" ></pv-inputtext>
                </div>
                <br>
                <div class="post-button">
                  <router-link :to="{ name: 'catalogue', params: {userProfileId:userProfileId}}">
                    <pv-button class="cancel-button">Cancel</pv-button>
                  </router-link>
                  <router-link :to="{ name: 'catalogue', params: {userProfileId:userProfileId}}">
                    <pv-button class="add-button" @click="savePost">Add</pv-button>
                  </router-link>
                </div>
              </div>
              <div class="content-card" style="margin: 2vw;">
                <div class="content-card">Pack Name:
                  <pv-inputtext v-model="post.name" style="width:16.7vw;height:1vw" type="text" id="product-type" ></pv-inputtext>
                </div>
                <br>
                <div class="content-card">Price:
                  <pv-inputtext v-model="post.price" style="width:10vw;height:1vw;margin-left: 11.7vw" type="number" min="1" id="product-type" ></pv-inputtext></div>
                <br>
                <div class="post-button">
                  <router-link :to="{ name: 'catalogue', params: {userProfileId:userProfileId}}">
                    <pv-button class="cancel-button">Cancel</pv-button>
                  </router-link>
                  <router-link :to="{ name: 'catalogue', params: {userProfileId:userProfileId}}">
                    <pv-button class="add-button" @click="savePost">Create Pack</pv-button>
                  </router-link>
                </div>
                <br>
                <h2>Products: </h2>
                <ul>
                  <li>Product 1 (Supply)</li>
                  <li>Product 2 (Dish)</li>
                </ul>
              </div>
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
  name: "PostDish",
  components: {},
  data(){
    return {
      posts:[],
      catalogService: null,
      post: {},
      productTypes:[
        {name: 'Dinner Plate', code: 'Dinner Plate'},
        {name: 'Supplies', code: 'Supplies'}
      ],
      delivery:null,
      userProfileId: 0
    };
  },
  created(){
    this.userProfileId = this.$route.params.userProfileId;
    try{
      this.catalogService = new PacksApiService();
      this.catalogService.getAll().then((response)=>{
        this.posts = response.data;
        console.log(this.posts);
      });
    }
    catch(e){
      console.error(e);
    }
  },

  methods:{
    getDisplayablePost(post) {
      return post;
    },
    getStorablePost(newpost) {
      return {
        id: newpost.id,
        price: newpost.price,
        name: newpost.name,
        userProfileId: this.userProfileId
      };
    },
    findIndexById(id) {
      console.log(`current id: ${id}`);
      return this.posts.findIndex((tutorial) => tutorial.id === id);
    },
    savePost() {

        this.post.id = 0;
        console.log(this.post);
        this.post = this.getStorablePost(this.post);
        this.catalogService.create(this.post)
            .then((response) => {
              this.post = this.getDisplayablePost(response.data);
              this.posts.push(this.post);
              console.log(response);
            });

      this.post = {};
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

.image-upload>input {
  display: none;
}
.packs{
  margin: 2vw;
  justify-self: center;
  align-self: center;
}
.title{
  margin: 10px 40px 0 60px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}
.consumer-view{
  background: #F9731C;
  font-family: 'Montserrat';
}
.consumer-view:hover{
  background: #fa8f4b;
}
.buttons-catalog{
  justify-self: end;
  margin-right:5.5vw;

}
.post-button{
  justify-self: end;
  display:grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Montserrat';

}
.cancel-button,.add-button{
  background: #3F1602;
  font-family: 'Montserrat';
  width: 8rem;
}
.add-button{
  margin-left: 8.4vw;
}
.post-new{
  background: #3F1602;
  font-family: 'Montserrat';
}
.post-new:hover{
  background: #702905;
}
.cards{
  display: grid;
  padding: 20px 40px;
  margin-left:1vw;
}
.image-post{
  height: auto;
  width: auto;
  margin-bottom:8vw;
  margin-left: -4vw;
  padding: 10px;
  border-radius:10%;
}

.p-card{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  justify-self: center;
  width:66vw;
  height:fit-content;
  margin: 15px;
  border-radius: 20px;
}
.content-card{
  font-family: 'Montserrat';
  text-align: start;
}



.p-scrollpanel-bar{
  background-color: antiquewhite;
}

</style>