<template>
    <div class="login">
      <div class="brand">
        <h1>Tasty Point</h1>
        <img src="../../assets/images/logoLog-in.png" alt="Company Logo">
      </div>
      <form @submit.prevent="checkForm(!v$.$invalid)" class="forms">
        <pv-card class="cardForm">
          <template #content>
            <div class="btnsChanged">
              <pv-button class="btnactive" label="Log in"></pv-button>
              <router-link to="/register" class="btn-Register">
                <pv-button class="btninactive" label="Register"></pv-button>
              </router-link>
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
              <div style="display: flex; justify-content: space-between">
                <h4>Password</h4><router-link to="/forgotpassword" class="fyp" >Forgot your password?</router-link>
              </div>
              <pv-password id="password"
                            v-model="v$.password.$model"
                            :class="{'p-invalid':v$.password.$invalid && submitted}"
                           placeholder="Enter password" class="inp" :feedback="false" toggleMask></pv-password>
              <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
                     class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
            </div>

            <div>
                <pv-inputtext class="btnLog-in" type="submit" value="Log In"></pv-inputtext>
            </div>
          </template>
          <template #footer>
            <div class="box">
              <span class="line"></span>
              <span class = "text"> or </span>
              <span class="line"></span>
            </div>
            <div class="btnsFooter">
              <pv-button class="btnfoot btnG" label="Sign in with Google" icon="pi pi-google"></pv-button>
              <pv-button class="btnfoot btnF" label="Sign in with Facebook" icon="pi pi-facebook"></pv-button>
              <pv-button class="btnfoot btnA" label="Sign in with Apple" icon="pi pi-apple"></pv-button>
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
      Email: '',
      password: '',
      submitted: false
    }
  },
  validations(){
    return{
      Email: {
        required,
        email
      },
      password: {
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
    .login{
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
    .btn-Register{
      width: 100%;
    }
    .btninactive{
      background-color: white;
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
      width: 26vw;
    }
    ::v-deep(.p-password input){
      width: 26vw;
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
    .btnLog-in{
      width: 26vw;
      border-radius: 10px;
      background-color: rgba(63, 22, 2, 1);
      color: white;
    }
    .btnLog-in:enabled{
      background-color: rgba(63, 22, 2, 1);
    }
    .btnLog-in:hover{
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
      margin: 10px;
      gap: 10px;
    }
    .btnfoot{
      justify-self: center;
      width: 20vw;
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
</style>