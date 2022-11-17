<template>
  <div class="sidebar">
    <div class="title">
      <img src="../../assets/images/logo-dashb.png" alt="logo" class="logo-dashb"/>
      <div>
        <h2>TastyPoint</h2>
      </div>
    </div>

    <div class="subtitle">
      <h3>Menu</h3>
    </div>
    <div class="menu-items">
      <router-link to="/business/catalogue" active-class="active" exact tag="button" class="side-btn">
        <div class="link-container">
          <i class=" pi pi-list"></i>
          Catalogue
        </div>
      </router-link>
      <router-link to="/business/Profiles" active-class="active" exact tag="button" class="side-btn">
        <div class="link-container">
          <i class=" pi pi-user"></i>
          Profile
        </div>
      </router-link>

      <router-link to="/business/promotions" active-class="active" exact tag="button" class="side-btn">
        <div class="link-container">
          <i class=" pi pi-percentage"></i>
          Promotions
        </div>
      </router-link>

      <router-link to="/business/orders" active-class="active" exact tag="button" class="side-btn">
        <div class="link-container">
          <i class=" pi pi-briefcase"></i>
          Orders
        </div>
      </router-link>

    </div>

    <div class="subtitle">
      <h3>Account</h3>
    </div>
    <div class="menu-items">
      <router-link to="/business/settings" active-class=active exact tag="button" class="side-btn">
        <div class="link-container">
          <i class=" pi pi-cog"></i>
          Settings
        </div>
      </router-link>

      <button @click="seeDialog=true" class="btn-dialog">
        <router-link to="" active-class=active exact tag="button" class="side-btn">
          <div class="link-container">
            <i class=" pi pi-sign-out"></i>
            Sign out
          </div>
        </router-link>
      </button>

      <pv-dialog v-model:visible="seeDialog"
                 :style="{ width: '450px'}"
                 header="Sign Out"
                 :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3"
             style="font-size: 2rem"/>
          <span style="font-family: 'Montserrat', sans-serif">
          Are you sure you want to log out?
        </span>
        </div>
        <template #footer>
          <pv-button :label="'No'.toUpperCase()"
                     icon="pi pi-times"
                     class="p-button-text"
                     style="font-family: 'Montserrat', sans-serif"
                     @click="seeDialog = false"/>
          <pv-button :label="'Yes'.toUpperCase()"
                     icon="pi pi-check"
                     class="p-button-text"
                     style="font-family: 'Montserrat', sans-serif"
                     @click="signOut()"/>
        </template>
      </pv-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar-business",
  data(){
    return{
      seeDialog: false,
    }
  },
  methods:{
    signOut(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.logo-dashb{
  margin: 0 5px;
}
.title{
  color:rgba(63, 22, 2, 1);
  margin: 30px 60px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
.subtitle{
  margin-top: 10px;
  color: white;
}
.sidebar{
  margin: 5px 0;
  position: fixed;
  padding: 10px;
  width: 17vw;
  height: 94vh;
  border-radius: 10px;
  background-color: rgba(233, 65, 82, 1);
}

.menu-items{
  color: white;
  display: flex;
  flex-direction: column;
}

.link-container{
  margin: 10px;
}

.side-btn:focus{
  outline:none;
}
.side-btn{
  margin-bottom: 5px;
  background-color: transparent;
}
.side-btn.active{
  background-color: white;
  border-radius: 10px;
}
.btn-dialog{
  border:none;
  background-color: transparent;
  font-family: 'Montserrat';
  font-size: 15px;
  text-align: start;
}
.btn-dialog:hover{
  background-color: white;
  border-radius: 10px;
}

.p-button{
  color: black;
}
.confirmation-content{
  background-color: #FDFBEF;
  color: #3F1602;
}

</style>