<template>
  <div class="Promotions">
    <div class="title">
      <h1>Promotions</h1>
    </div>
    <div>
      <pv-scrollpanel style="width:99%; height: 80vh">
        <pv-card v-if="!adding" class="promotionCard">
          <template #content>
            <pv-button style="background-color: transparent" @click="adding= true;">
              <h1 style="color: rgba(233, 65, 82, 1); font-family: Montserrat, sans-serif;">+ Add Promotion</h1>
            </pv-button>
          </template>
        </pv-card>

        <form @submit.prevent="checkForm(!v$.$invalid)" class="forms" v-if="adding">
          <pv-card class="promotionCard">
            <template #content>
              <div class="inputs">
                <h4>Title of the promotion or offer</h4>
                <pv-inputtext id="username"
                              v-model="v$.title.$model"
                              type="text" placeholder="Enter title"
                              :class="{'p-invalid': v$.title.$invalid && submitted}"
                              v-on:keydown.enter.prevent
                              class="inp"></pv-inputtext>
                <br>
                <small v-if="(v$.title.$invalid && submitted) || v$.title.$pending.$response"
                       class="p-error">{{v$.title.required.$message.replace('Value', 'Title')}}</small>
              </div>

              <div class="inputs">
                <h4>Subtitle (Optional)</h4>
                <pv-inputtext type="text" v-on:keydown.enter.prevent v-model="subtitle" placeholder="Enter subtitle" class="inp"></pv-inputtext>
              </div>

              <div class="inputs">
                <h4>Description (Optional)</h4>
                <pv-textarea type="text" v-model="description" placeholder="Enter description" class="inp"></pv-textarea>
              </div>

              <div class="inputs">
                <h4>Image (Optional)</h4>
                <pv-inputtext type="text" v-on:keydown.enter.prevent v-model="image" placeholder="Enter link of your image here" class="inp"></pv-inputtext>
              </div>
            </template>

            <template #footer>
              <div class="btns">
                <div class="">
                  <pv-inputtext class="btnSubmit" type="submit" value="Add"></pv-inputtext>
                </div>
                <div class="">
                  <pv-button class="btnCancel" label="Cancel" @click="onCancel"></pv-button>
                </div>
              </div>

            </template>
          </pv-card>
        </form>

        <pv-card v-for="notifi of notifications" :key="notifi.id" class="promotionCard">
          <template #header>
            <a class="deleteX" v-on:click="deleteNotification(notifi.id)">
              <i class="pi pi-times-circle" style="font-size: 2rem; margin: 10px"></i>
            </a>
          </template>
          <template #content class="text-contenido">
            <h1>{{notifi.title}}</h1><br>
            <h3>{{notifi.subtitle}}</h3><br>
            <h5>{{notifi.content}}</h5>
          </template>
          <template #footer>
            <img class="image-card" :src="notifi.image" alt="">
          </template>
        </pv-card>

      </pv-scrollpanel>

    </div>


    <div >

    </div>
  </div>
</template>

<script>
import {required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
import {PromotionsApiService} from "../services/promotions-api.service";

export default {
  setup: () => ({ v$: useVuelidate() }),
  name: "Promotions",
  data(){
    return{
      title: '',
      subtitle:'',
      description: '',
      image: '',
      adding: false,
      submitted: false,
      notifications: [],
      notifService: null,
      notif: {}
    }
  },
  validations(){
    return{
      title: {
        required
      }
    }
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
  methods:{
    checkForm(isFormValid){
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
      this.notif = {
        id: this.id,
        title: this.title,
        subtitle: this.subtitle,
        content: this.description,
        image: this.image
      }
      this.notifService.create(this.notif).then((response) =>{
        this.notifications.push(response);
        console.log(response);
      });
      this.title = '';
      this.subtitle = '';
      this.description = '';
      this.image = '';
      this.notif = {};
      window.location.reload();
    },
    onCancel(){
      this.title = '';
      this.subtitle = '';
      this.description = '';
      this.image = '';

      this.adding = false;
    },
    deleteNotification(id){
      this.notifService.delete(id)
          .then((response) => {
            this.notifications.filter((n) => n.id !== id);
            this.notif = {};
            console.log(response);
          });
      window.location.reload();
    }
  }
}

</script>

<style scoped>
  .Promotions{
    display: grid;
    grid-template-columns: 1fr;
    justify-content: start;
  }
  .promotionCard{
    margin: 4vw;
  }
  .title{
    margin: 20px 40px 0 60px;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
  }
  .inp{
    border-radius: 12px;
  }
  .inputs{
    text-align: start;
    margin: 20px 10px;
  }
  .btnRegister{
    width: 28vw;
    border-radius: 10px;
    background-color: rgba(63, 22, 2, 1);
    color: white;
  }
  .btnRegister:enabled{
    background-color: rgba(63, 22, 2, 1);
  }
  .btnRegister:hover{
    cursor: pointer;
  }
  .p-inputtext{
    width: 65vw;
  }
  .btns{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btnSubmit{
    width: 65vw;
    height: 45px;
    border-radius: 10px;
    background-color: rgba(63, 22, 2, 1);
    color: white;
  }

  .btnSubmit:hover{
    background-color: rgb(100, 47, 22);
    cursor: pointer;
  }
  .btnCancel{
    width: 65vw;
    border-radius: 10px;
    background-color: rgb(162, 111, 85);
    color: white;
  }
  .btnCancel:hover{
    background-color: rgba(162, 111, 85, 0.62);
  }
  .image-card{
    padding: 20px;
    border-radius: 20px;
    width: 45vw
  }
  h1,h3,h5{
    font-family: Montserrat, sans-serif;
  }
  .text-contenido{
    padding: 30px;
  }
  .p-card{
    border-radius: 20px;
  }
  .deleteX{
    display: flex;
    justify-content: end;
    padding-right: 20px;
    cursor: pointer;
  }
</style>