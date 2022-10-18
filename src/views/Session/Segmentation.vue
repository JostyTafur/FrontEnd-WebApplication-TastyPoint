<template>
  <div class="segmentation">
    <div class="brand">
      <h1>Tasty Point</h1>
      <img src="../../assets/images/logoLog-in.png" alt="Company Logo">
    </div>
    <div class="forms">
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
              <h4>Email</h4>
              <pv-inputtext type="text" placeholder="Enter email" class="inp"></pv-inputtext>
            </div>


          </div>

        </template>
        <template #footer>
          <div>
            <pv-button class="btnSegmento" type="submit" label="Continue" @click="Segmentation"></pv-button>
          </div>
        </template>

      </pv-card>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return{
      segmento: ''
    }
  },
  methods:{
    Segmentation(){
      if(this.segmento === 'Consumer'){
          this.$router.push('/consumer/list');
      }
      if(this.segmento === 'Business'){
          this.$router.push('/business')
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
  margin: 0px 0px 0px 30px;
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