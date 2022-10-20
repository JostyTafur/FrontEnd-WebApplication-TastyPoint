<template>
  <div class="segmentation">
    <div class="brand">
      <h1>Tasty Point</h1>
      <img src="../../assets/images/logoLog-in.png" alt="Company Logo">
    </div>
    <form @submit.prevent="checkForm(!v$.$invalid)" class="forms">
      <pv-card class="cardForm">
        <template #header>
          <h2 class="titleCard">In order to provide you with a better service, please tell us which segment you identify with.</h2>
        </template>
        <template #content>
          <div class="radioBtn">
            <div class="radioBtn1">
              <pv-radiobutton inputId="consumer" name="segmento" value="Consumer" v-model="segmento"></pv-radiobutton>
              <label for="consumer">
                <span>Consumer</span> <br> <span style="font-size: 12px;">Find food products at low prices, and help reduce food waste</span>
              </label>

            </div>
            <div class="radioBtn2">
              <pv-radiobutton inputId="business" name="segmento" value="Business" v-model="segmento"></pv-radiobutton>
              <label for="business">
                <span>Business</span> <br> <span style="font-size: 12px">It seeks to increase its income by reducing the losses caused by the rest of the food</span>
              </label>

            </div>
            <div class="inputs">
              <h5>Specify your type of business</h5>
              <pv-dropdown id="typeBusiness"
                           :options="options" optionLabel="name"
                            v-model="v$.typeBusiness.$model"
                            type="text" placeholder="Enter username"
                            :class="{'p-invalid': v$.typeBusiness.$invalid && submitted}"
                            class="inp" :disabled="!(segmento === 'Business')"
                            :editable="true"></pv-dropdown>

              <small v-if="(v$.typeBusiness.$invalid && submitted && (segmento === 'Business')) || v$.typeBusiness.$pending.$response"
                     class="p-error">{{v$.typeBusiness.required.$message.replace('Value', 'This camp')}}</small>
            </div>
          </div>

        </template>
        <template #footer>
          <div>
            <pv-button class="btnSegmento" type="submit" label="Continue"></pv-button>
          </div>
        </template>

      </pv-card>
    </form>
  </div>
</template>

<script>
import {email,required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
export default{
  setup: () => ({ v$: useVuelidate() }),
  data(){
    return{
      segmento: '',
      typeBusiness: '',
      submitted: false,
      options: [
        {name: 'Restaurant'},
        {name: 'Cafeteria'},
        {name: 'Soda Fountain'},
        {name: 'Drives inn'},
        {name: 'Bar'}
      ]
    }
  },
  validations(){
    return {
      typeBusiness: {
        required
      }
    }
  },
  methods:{
    checkForm(isFormValid){
      this.submitted = true;

      if(this.segmento === 'Consumer'){
        this.$router.push('/consumer/list');
      }
      if(this.segmento === 'Business'){
        if (!isFormValid) {
          return;
        }
        this.$router.push('/business/catalogue')
      }
    }
  }
}
</script>

<style scoped>
.segmentation{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
  height: 90vh;
  text-align: center;
}
.brand{
  justify-self: center;
  align-self: center;
  color: rgba(63, 22, 2, 1);
  font-size: 30px;
  font-weight: bold;
}
.forms{
  justify-self: center;
  align-self: center;
}
.cardForm{
  width: 30vw;
  height: fit-content;
  background-color: rgba(249, 115, 28, 1);
  border-radius: 20px;
}
.inputs{
  text-align: start;
  margin: 0px 0px 0px 35px;
  gap: 10px;
}
.inp{
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
}
.btnSegmento{
  width: 26vw;
  border-radius: 10px;
  background-color: rgba(63, 22, 2, 1);
  color: white;
}
.btnSegmento:enabled{
  background-color: rgba(63, 22, 2, 1);
}
.btnSegmento:hover{
  cursor: pointer;
}
.titleCard{
  font-size: 18px;
  font-weight: bold;
  color: rgba(63, 22, 2, 1);
  padding: 20px 30px 0 20px;
}
.radioBtn{
  display: grid;
  gap: 20px;
  margin: 0 40px;
}
.radioBtn1{
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
}
.radioBtn2{
  display: flex;
}
label{
  font-size: 24px;
  text-align: start;
  margin-left: 15px;
}
</style>