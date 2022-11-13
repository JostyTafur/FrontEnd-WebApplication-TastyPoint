<template>
  <div class="notifications">
    <div class="title">
      <h2>Close to your area:</h2>
    </div>
    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="cards">
        <pv-card  v-for="notif of notifications" :key="notif.id">
          <template #header>
            <img class="image-card" :src="notif.image" alt="">
          </template>
          <template #title>
            <div class="title-card">
              <div class="title-noti">{{notif.title}}</div>
              <div class="subtitle-noti">{{notif.subtitle}}</div>
            </div>
          </template>
          <template #content>
            <div class="content-card">
              <div class="content-card">{{notif.content}}</div>
            </div>
          </template>
        </pv-card>
      </div>
    </pv-scrollpanel>
  </div>
</template>

<script>
import {PromotionsApiService} from "../services/promotions-api.service.js"
export default{
  name: "Notifications",
  data(){
    return {
      notifications:[],
      notifService: null,
      notif: {},
    };
  },
  created(){
    try{
      this.notifService = new PromotionsApiService();
      this.notifService.getAll().then((response)=>{
        this.notifications = response.data;
        console.log(this.notifications);
      });
    }
    catch(e){
      console.error(e);
    }
  },
}
</script>

<style scoped>
.notifications{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
}
.title{
  margin: 20px 40px 0 60px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}
.cards{
  padding: 20px 40px;
  column-count: 2;
  column-gap: 10px;
  justify-content: center;
  grid-row: 2;
}
.image-card{
  padding: 10px;
}

.p-card{
  width: 30vw;
  height:fit-content;
  margin: 15px;
  border-radius: 20px;
  justify-self: center;
  display: inline-block;
}
.title-noti{
  font-family: 'Montserrat';
  font-size: 30px;
  text-align: start;
  padding: 0px -10px;
  color: rgba(63, 22, 2, 1);
}
.subtitle-noti{
  font-family: 'Montserrat';
  font-size: 18px;
  text-align: start;
}
.content-card{
  font-family: 'Montserrat';
  text-align: start;
}

.p-scrollpanel-bar{
  background-color: antiquewhite;
}

</style>