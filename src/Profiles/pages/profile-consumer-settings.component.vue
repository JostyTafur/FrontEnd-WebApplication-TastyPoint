<template>
  <div class="settings">
    <h1>Settings</h1>

  </div>
  <div class="perfil">
    <form @submit="saveChanges">
      <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="logo" class="profile-picture"/>
      <div class="inputs">
        <div class="grupo">
          <label for="" class="labels">Name and Surname</label>
          <input type="text" name="" id="name" class="barra"/>
        </div>

        <div class="grupo">
          <label for="" class="labels">Email</label>
          <input type="email" name="" id="email" class="barra"/>
        </div>

        <div class="grupo">
          <label for="" class="labels">Password</label>
          <input type="password" name="" id="password" class="barra"/>
        </div>

        <div class="grupo">
          <label for="" class="labels">Phone number</label>
          <input type="tel" name="" id="phone-number" class="barra"/>
        </div>

        <div class="grupo">
          <label for="" class="labels">Shipping address</label>
          <input type="text" name="" id="shipping-address" class="barra"/>
        </div>

        <div class="grupo">
          <label for="" class="labels">Date of Birth</label>
          <input type="date" name="" id="date" class="barra"/>
        </div>
      </div>

      <pv-button type="submit" class="btn" label="Save Changes"></pv-button>

    </form>
  </div>


</template>

<script>
/*futuro perfil de usuario*/
</script>

<style scoped>
  .perfil{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8vh;
    height: 66vh;
  }
  .settings {
    text-align: left;
    margin-left: 4%;
    margin-top: 2%;
    margin-bottom: 1%;
  }
  .profile-picture{
    width: 160px;
    height: 156px;
    margin: 1%;
    border-radius: 50px;
  }
  .inputs{
    display: grid;
    width: 73vw;
  }
  form{
    background-color: #fdfbef;
    height: 120%;
    width: 93%;
    border-radius: 21px;
  }
  label{
    font-size: 20px;
    margin-right:3%;
    color: #3F1602;
  }
  .grupo{
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 5px;
  }
  .labels{
    justify-self: start;
    padding-left: 15%;
  }
  .barra{
    margin-right: 10%;
  }
  .btn{
    width: 227px;
    height: 59px;
    top: 2%;
    background: #3F1602;
    border-radius: 10px;
    outline:none;
    border: hidden;
    font-size: 20px;
    color: #FDFBEF;
    cursor: pointer;
  }
  .btn:hover{
    background-color: #3F1602;
  }

</style>