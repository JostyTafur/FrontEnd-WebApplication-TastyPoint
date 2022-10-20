<template>
  <div class="catalog">
    <div class="title">
      <h2>Catalog of products and supplies:</h2>
    </div>
    <div class="buttons-catalog">
      <router-link to="/business/consumerView">
        <pv-button class="consumer-view">Consumer View</pv-button>
      </router-link>
      <pv-button class="post-new">Post New</pv-button>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="cards">
        <pv-card >
          <template #header>
            <div class="image-upload">
              <label for="file-input">
                <img class="image-post" src="../../assets/images/AddImage.png" alt="">
              </label>
              <input id="file-input" type="file" />
            </div>
          </template>
          <template #content>
            <div class="content-card">
              <div class="content-card">Product Type:
                <pv-dropdown v-model="post.producttype" :options="productTypes" optionLabel="name" optionValue="code" style="width:17.4vw;"></pv-dropdown>
              </div>
              <br>
              <div class="content-card">Product Name:
                <pv-inputtext v-model="post.productname" style="width:16.7vw;height:1vw;align-content:center" type="text" id="product-type" ></pv-inputtext>
              </div>
              <br>
              <div  class="content-card">Description:</div>
              <pv-inputtext v-model="post.description" style="height:4vw;width:25vw" type="text" id="product-type" ></pv-inputtext>
              <br>
              <br>
              <div class="content-card">Delivery Methods:
                <br>
                <br>
                <pv-radiobutton name="delivery" value="Face-to-face" v-model="post.deliverymethod" />
                <label for="delivery1">Face-to-face</label>
                <br>
                <pv-radiobutton name="delivery" value="Delivery" v-model="post.deliverymethod" />
                <label for="delivery2">Delivery</label>
              </div>
              <br>
              <div class="content-card">Price:
                <pv-inputtext v-model="post.price" style="width:10vw;height:1vw;margin-left: 11.7vw" type="number" min="1" id="product-type" ></pv-inputtext></div>
              <br>
              <div class="post-button">
                <router-link to="/business/catalogue">
                  <pv-button class="cancel-button">Cancel</pv-button>
                </router-link>
                <router-link to="/business/catalogue">
                  <pv-button class="add-button" @click="savePost">Post</pv-button>
                </router-link>
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

  methods:{
    getDisplayablePost(post) {
      return post;
    },
    getStorablePost(newpost) {
      return {
        id: newpost.id,
        restaurantname: "Cevichando",
        producttype: newpost.producttype,
        productname: newpost.productname,
        description: newpost.description,
        deliverymethod: newpost.deliverymethod,
        price: newpost.price,
        favourite:false,
        image:"https://elcomercio.pe/resizer/ii0EiWdpMP9_DsJzJ3whAirXg3U=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WKLKU6YQTJEZJLSWM3CUZZ37AA.jpg",
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
  justify-content: start;
}

.image-upload>input {
  display: none;
}

.title{
  margin: 10px 40px 0 60px;
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
  margin-right:5.5vw;

}
.post-button{
  justify-self: end;
  margin-left:0vw;
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
  margin-left: 20px;
  font-family: 'Montserrat';
}
.cards{
  display: inline-block;
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
  cursor: pointer;
}

.p-card{

  display: inline-flex;
  align-items: end;
  justify-content: center;
  width:56vw;
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