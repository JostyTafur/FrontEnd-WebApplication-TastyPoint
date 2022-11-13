<template>
  <div class="Forgotpassword">
    <div class="brand">
      <h1>Tasty Point</h1>
      <img src="../../assets/images/logoLog-in.png" alt="Company Logo">
    </div>
    <form @submit.prevent="checkForm(!v$.$invalid)" class="forms">
      <pv-card class="cardForm">
        <template #header>
          <h2 class="titleCard">Forgot your Password?</h2>
        </template>
        <template #content>
          <div class="inputs">
            <h4>Enter your new password</h4>
            <pv-password id="password"
                         v-model="v$.passwordNew.$model"
                         :class="{'p-invalid':v$.passwordNew.$invalid && submitted}"
                         placeholder="Enter new password" toggleMask></pv-password>
            <small v-if="(v$.passwordNew.$invalid && submitted) || v$.passwordNew.$pending.$response"
                   class="p-error">{{v$.passwordNew.required.$message.replace('Value', 'Password')}}</small>
          </div>
        </template>
        <template #footer>
          <div class="grid">
            <div class="grid-col">
              <router-link to="/">
                <pv-button class="btnSegmento" label="Cancel"></pv-button>
              </router-link>
            </div>
            <div class="grid-col">
              <pv-button class="btnSegmento" type="submit" label="Confirm"></pv-button>
            </div>
          </div>
        </template>

      </pv-card>
    </form>
  </div>
</template>

<script>
import {required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
export default{
  setup: () => ({ v$: useVuelidate() }),
  data(){
    return{
      passwordNew: '',
      submitted: false,
    }
  },
  validations(){
    return {
      passwordNew: {
        required
      }
    }
  },
  methods:{
    checkForm(isFormValid){
      this.submitted = true;

      if (!isFormValid) {
          return;
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.Forgotpassword{
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
  margin: 0px 0px 0px 20px;
  gap: 10px;
}
::v-deep(.p-password input){
  width: 24vw;
  border-radius: 12px;
}

.inp{
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
}
.btnSegmento{
  width: 100%;
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
label{
  font-size: 24px;
  text-align: start;
  margin-left: 15px;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.grid-col{
  justify-self: center;
  align-self: center;
  width: 12vw;
}
</style>