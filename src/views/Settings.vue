<template>
  <div class="settings">
    <h1>Settings</h1>

  </div>
  <div class="perfil">
    <form @submit="saveChanges">
      <img src="src/assets/images/profile-picture.png" alt="logo" class="profile-picture"/>

      <div class="grupo">
        <label for="">Name and Surname</label>
        <input type="text" name="" id="name"><span class="barra"></span>
      </div>

      <div class="grupo">
        <label for="">Email</label>
        <input type="email" name="" id="email"><span class="barra"></span>
      </div>

      <div class="grupo">
        <label for="">Password</label>
        <input type="password" name="" id="password"><span class="barra"></span>
      </div>

      <div class="grupo">
        <label for="">Phone number</label>
        <input type="tel" name="" id="phone-number"><span class="barra"></span>
      </div>

      <div class="grupo">
        <label for="">Shipping address</label>
        <input type="text" name="" id="shipping-address"><span class="barra"></span>
      </div>

      <div class="grupo">
        <label for="">Date of Birth</label>
        <input type="date" name="" id="date"><span class="barra"></span>
      </div>

      <button type="submit" class="btn">Save changes</button>

    </form>
  </div>

  <div class="popup" id="popup">
    <h2>Changes saved</h2>
    <button class="close-btn">Ok</button>
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
    margin: 1%;
  }
  .btn{
    width: 227px;
    height: 59px;
    top: 1%;
    background: #3F1602;
    border-radius: 10px;
    outline:none;
    border: hidden;
    text-align: center;
    font-size: 20px;
    color: #FDFBEF;
    cursor: pointer;
  }
  .popup{
    width: 652px;
    background: #FDFBEF;
    border-radius: 12px;
    transition: 200ms ease-in-out;
    text-align: center;
    paddind: 0 30px 30px;
    color: #3F1602;
    font-weight: bold;
    transform: translate(0%, 0%) scale(0);
  }
  .popup.active{
    transform: translate(35%, -200%) scale(1);
  }

  .open-popup{
    visibility: visible;
    top:50%;
    transform: translate(-50%, -50%) scale(1);
  }
  .popup button{
    width: 50%;
    height: 59px;
    background: #3F1602;
    border-radius: 10px;
    outline:none;
    border: hidden;
    text-align: center;
    font-size: 20px;
    color: #FDFBEF;
    cursor: pointer;
    margin: 5%;
  }

  .popup h2{
    margin: 5%;
  }
</style>