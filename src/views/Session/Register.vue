<template>
  <div class="register">
    <div class="brand">
      <h1>Tasty Point</h1>
      <img src="../../assets/images/logoLog-in.png" alt="Company Logo">
    </div>
    <form @submit.prevent="checkForm(!v$.$invalid)" class="forms">
      <pv-card class="cardForm">
        <template #content>
          <div class="btnsChanged">
            <router-link to="/" class="btn-login">
              <pv-button class="btninactive" label="Log in"></pv-button>
            </router-link>
            <pv-button class="btnactive" label="Register"></pv-button>
          </div>
          <div class="inputs">
            <h4>Username</h4>
            <pv-inputtext id="username" 
                          v-model="v$.username.$model" 
                          type="text" placeholder="Enter username" 
                          :class="{'p-invalid': v$.username.$invalid && submitted}"
                          class="inp"></pv-inputtext>

            <small v-if="(v$.username.$invalid && submitted) || v$.username.$pending.$response"
                   class="p-error">{{v$.username.required.$message.replace('Value', 'Name')}}</small>
          </div>
          <div class="inputs">
            <h4>Email</h4>
            <pv-inputtext id="Email"
                          v-model="v$.Email.$model"
                          :class="{'p-invalid':v$.Email.$invalid && submitted}"
                          aria-describedby="email-error"
                          placeholder="Enter email"
                          class="inp"></pv-inputtext>

            <span v-if="v$.Email.$error && submitted">
                            <span id="email-error" v-for="(Error, index) of v$.Email.$errors" :key="index">
                              <small class="p-error">{{Error.$message}}</small>
                            </span>
                        </span>
            <small v-else-if="(v$.Email.$invalid && submitted) || v$.Email.$pending.$response"
                   class="p-error">{{v$.Email.required.$message.replace('Value', 'Email')}}</small>
          </div>
          <div class="inputs">
            <h4>Password</h4>
            <pv-password id="password"
                         v-model="v$.password.$model"
                         :class="{'p-invalid':v$.password.$invalid && submitted}"
                         placeholder="Enter password" class="inp" toggleMask></pv-password>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
                   class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>

          <div class="checks">
            <pv-checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
            <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}" class="label-terms">I agree to the terms and conditions*</label>
          </div>

          <div>
              <pv-inputtext class="btnRegister" type="submit" value="Register"></pv-inputtext>
          </div>
        </template>
        <template #footer>
          <div class="box">
            <span class="line"></span>
            <span class = "text"> or register with </span>
            <span class="line"></span>
          </div>
          <div class="btnsFooter">
            <pv-button class="btnfoot btnG" label="Google" icon="pi pi-google"></pv-button>
            <pv-button class="btnfoot btnF" label="Facebook" icon="pi pi-facebook"></pv-button>
            <pv-button class="btnfoot btnA" label="Apple" icon="pi pi-apple"></pv-button>
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
      username: '',
      Email: '',
      password: '',
      submitted: false,
      accept: null
    }
  },
  validations(){
    return{
      username: {
        required
      },
      Email: {
        required,
        email
      },
      password: {
        required
      },
      accept: {
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
      this.$router.push('/segmentation');
    }
  }
}
</script>

<style scoped>
.register{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90vh;
  width: 90vw;
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
  width: 32vw;
  height: fit-content;
  background-color: rgba(249, 115, 28, 1);
  border-radius: 20px;
}
.btnsChanged{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  gap: 10px;
}
.btnactive{
  background-color: rgba(249, 115, 28, 1);
  width: 100%;
  color: rgba(63, 22, 2, 1);
  font-family: Montserrat, sans-serif;
}
.btn-login{
  width: 100%;
}
.btninactive{
  background-color: white;
  width: 100%;
  color: rgba(63, 22, 2, 1);
  font-family: Montserrat, sans-serif;
}
.btnactive:enabled{
  background-color: rgba(249, 115, 28, 1);
  color: rgba(63, 22, 2, 1);
}
.btninactive:enabled{
  background-color: white;
  color: rgba(63, 22, 2, 1);
}
.inputs{
  text-align: start;
  margin: 20px 10px;
}
.p-inputtext{
  width: 28vw;
}
::v-deep(.p-password input){
  width: 28vw;
  border-radius: 12px;
}
.inp{
  border-radius: 12px;
}
.fyp{
  color: rgba(65, 65, 65, 1);
}
.fyp:hover{
  background-color: transparent;
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
.box{
  display:flex;
  align-items:center;
}
.line{
  border-top:1px solid #000;
  flex-grow:1;
}
.text{
  margin:0 10px;
}
.btnsFooter{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
  gap: 10px;
}
.btnfoot{
  justify-self: center;
  width: 9vw;
}
.btnG{
  background-color: #ce3333;
}
.btnF{
  background-color: #1b38c4;
}
.btnA{
  background-color: black;
}
.checks{
  display: grid;
  grid-template-columns: 10% 90%;
  padding: 10px 20px
}
#accept{
  justify-self: center;
  align-self: center;
}
.label-terms{
  justify-self: start;
  align-self: center;
}
</style>