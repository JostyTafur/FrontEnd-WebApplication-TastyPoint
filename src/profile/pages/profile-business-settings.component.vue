<template>
  <div class="settings">
    <h1>Settings</h1>

    <pv-scrollpanel style="width:99%; height: 82vh" class="custom">
      <div class="perfil">
        <h2>Profile</h2>
        <div class="grupo1">
          <label for="">Bussines name</label>
          <input type="text" name="" id="name"><span class="barra"></span>
        </div>
        <div class="grupo1">
          <label for="">Email</label>
          <input type="email" name="" id="email"><span class="barra"></span>
        </div>
        <div class="grupo1">
          <label for="">Password</label>
          <input type="password" name="" id="password"><span class="barra"></span>
        </div>
        <div class="grupo1">
          <label for="">Contact number</label>
          <input type="tel" name="" id="phone-number"><span class="barra"></span>
        </div>
      </div>

      <div class="accounts">
        <h2>Social media</h2>
        <div class="grupo2">
          <label for="">Facebook</label>
          <input type="text" name="" id="facebook-account"><span class="barra"></span>
        </div>
        <div class="grupo2">
          <label for="">Instagram</label>
          <input type="text" name="" id="instagram-account"><span class="barra"></span>
        </div>
        <div class="grupo2">
          <label for="">Twitter</label>
          <input type="text" name="" id="twitter-account"><span class="barra"></span>
        </div>
      </div>

      <div class="plan">
        <h2>Update plan</h2>
        <Panel class="pv-panel-free">
          <h3>Free<br><i class=" pi pi-dollar"></i>0</h3>
          <p> We offer you: </p>
          <li>Advertising through the profile</li>
          <li>Publication of up to 10 food dishes</li>
          <li>Publication of up to 20 individual supplies</li>
          <li>Visualization of the catalog of your products</li>
        </Panel>
        <Panel class="pv-panel-premium">
          <h3>Premium<br><i class=" pi pi-dollar"></i>10</h3>
          <p> We offer you: </p>
          <li>Everything obtained in the Free plan</li>
          <li>Unlimited food plate posting</li>
          <li>Unlimited publication of individual supplies</li>
          <li>Access to delivery use of the application</li>
          <li>Consumer visualization</li>
          <li>Consumer's point of view</li>
          <button type="button" class="btnPlanPrem">Acquire</button>
        </Panel>
      </div>

      <div class="saveChanges">
        <button type="button" class="btnCancel">Cancel</button>
        <button type="submit" class="btnSave">Save changes</button>
      </div>

    </pv-scrollpanel>

  </div>

</template>

<script>

export default {

}
</script>

<style scoped>

.settings {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 4%;
  margin-top: 2%;
  margin-right: 2%;
}
.custom{
  background-color: #FDFBEF;
  border-radius: 10px;

}
h2{
  color: #3F1602;

}
.perfil, .accounts, .plan, .saveChanges{
  text-align: left;
  margin-left: 4%;
  margin-top: 4%
}

label{
  font-size: 20px;
  margin-right:3%;
  color: #3F1602;
}
.plan{
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

panel{
  background: #E94152;
  border-radius: 50px;
  color: #3F1602;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 5%;

}
.pv-panel-premium{
  background: #F9731C;
}
li{
  text-align: justify;
  margin: 5%;
}
h3{
  font-size: 32px;
}
.btnPlanPrem{
  width: 162px;
  height: 37px;
  background: #3F1602;
  border-radius: 10px;
  outline:none;
  border: hidden;
  text-align: center;
  font-size: 20px;
  color: #FDFBEF;
  cursor: pointer;
  margin-bottom: 5%;
}
.saveChanges{
  flex-direction: row;
  align-content: space-between;
  text-align: right;

}
.btnCancel{
  width: 227px;
  height: 59px;
  background: #E94152;
  border-radius: 10px;
  outline:none;
  border: hidden;
  text-align: center;
  font-size: 20px;
  color: #FDFBEF;
  cursor: pointer;
  margin-right: 5%;
}
.btnSave{
  width: 227px;
  height: 59px;
  background: #F9731C;
  border-radius: 10px;
  outline:none;
  border: hidden;
  text-align: center;
  font-size: 20px;
  color: #FDFBEF;
  cursor: pointer;
  margin-right: 5%;
}
</style>
