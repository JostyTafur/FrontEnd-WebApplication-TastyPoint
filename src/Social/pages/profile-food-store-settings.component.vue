<template>
  <div style="display: grid; grid-template-columns: 10% 90%; margin: 10px">
    <router-link to="/consumer/detail/1" style="justify-self: center; align-self: center">
      <i class="pi pi-arrow-left" style="font-size: 2rem;"></i>
    </router-link>
    <h1>Profile Store Food</h1>
  </div>
  <pv-scrollpanel style="width:99%; height: 80vh">
    <div class = "Second-List">
      <div>
        <div class="container-card">
          <div class="card">
            <figure>
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjutLq68aQWhCM3r2ZQwyAESH4wZrncEMlhNgHPIGIMZyD1au1A1NDmrfaxc4-c3gRvB74eEV0SRs1nGRdpVAPfRSz2VhMamub7HH85qGwhWRlkU-xCW188azm88OYYJPXjTX6zNkz_f7P_pAK8Q9QoyK2NbXIEMtb7izKaieQ8VB-WaMQ-fu8WBKadqA/w664-h139/imagen1.png">
            </figure>
            <div class="contenido-card">
              <h3><img src="/src/assets/images/restaurant.png" alt="icon" style="width: 55px;height:50px;"> Restaurants: 7 Soups </h3>
              <div class="restaurant-data">
                <p>Description:</p>
                <p>Two level peruvian Industrial-style restaurant whit homemade dishes, such as hearty soups.</p>
                <p>Service Options: On-Site Consumption - Door Pickup - Contactless Delivery.</p>
                <p>Address: Av. Arequipa 2394, Lince 15046.</p>
                <p>Delivery methods:</p>
                <p>Face-to-face.</p>
                <p>This store does not offer delivery.</p>
                <pv-button class="edit-info">Edit information</pv-button>
              </div>
              <div class="comment-section" style="margin-top:2rem ">
                <div>
                  <h3 style="font-size:20px;font-size:26px"> 2 Comments </h3>
                </div>
                <div>

                </div>
                <div class="comments">
                  <h3>paulina124</h3>
                  <h3>I love the attention, although they take a while. On the other hand, the delicios food.</h3>
                  <div class="contact content-body">
                    <form method="POST" action="https://formspree.io/email@email.com">
                      <input type="hidden" name="_subject" value="Contact request from personal website" />
                      <textarea name="message" placeholder="Write your comment" required></textarea>
                    </form>
                    <pv-button class="answer-button">Answer</pv-button>
                  </div>
                  <h3>josemendoza</h3>
                  <h3>The food is good, and   the  supplies and dishes are in good conditions. You  must try  one of     their soups if you are  lucky enough to have    leftovers</h3>
                  <div class="contact content-body">
                    <form method="POST" action="https://formspree.io/email@email.com">
                      <input type="hidden" name="_subject" value="Contact request from personal website" />
                      <textarea name="message" placeholder="Write your comment" required></textarea>
                    </form>
                    <pv-button class="answer-button">Answer</pv-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </pv-scrollpanel>
</template>

<script>
export default {
  name: "Profile",
  data(){
    return{
      clicked: true
    }
  }
}
</script>

<style scoped>
.title{
  margin: 00px
}
.detail{
  display: grid;
  justify-content: start;
  text-align:center;
}
.cards{
  margin: 00px;
  display: flex;
  justify-content: center;
}


.container {
  margin: 10px;

}

input {
  outline: 30px;
  box-sizing: border-box;
  height: 35px;
  width: 90px;
  padding: 0 100px;
  color: #000;
  border-radius: 9px;
  font-size: 20px;
  border: 2px solid #D50000;
  transition: all .7s ease;
}

::placeholder {
  color: grey;
}

.btn p {
  font-size: 5px;
  color: white;
  line-height: 50px;
  transition: all .7s ease;

}
.edit-info{
  background: #3F1602;
  margin-left: 20px;
  font-family: 'Montserrat';
  margin-left:-4px;
  margin-bottom:80px;
}
.answer-button{
  background-color: #FDFBEF;
  color: white;
  margin-left: 20px;
  font-family: 'Montserrat';
  margin-left:-4px;
  margin-bottom:80px;
}
.container input {
  width: 1450px;
  height: 50px;
}
.container input {
  width: 1515px;
  height: 50px;
}

.container:hover i{
  transform: rotate(-360deg);
}
.container-card{
  display: flex;
  margin: auto;
}

.card{
  width: 100%;
  margin: 20px;
  border-radius: 29px;
  overflow: hidden;
  background:#FDFBEF;
  cursor: default;

}
.card img{
  width: 100%;
  height: 100%;
}
.card .contenido-card{
  margin-left: 50px;
  padding: 30px;
  text-align:left;
  font-size:30px;
  font-weight:lighter;
  font-family: 'Montserrat', sans-serif;
}
.card .contenido-card h3{
  margin-bottom: 30px;
  color: #3F1602;

}
.card .contenido-card p{
  line-height: 2.8;
  color: #3F1602;
  font-size: 18px;
  margin-bottom: 5px;
}
.card .contenido-card a{
  display: inline-block;
  font-size:20px;
  padding: 5px;
  margin-left:985px;
  margin-top: 10px;
  text-decoration: none;
  color:#FDFBEF;
  background-color: #3F1602;
  border-radius: 10px;
  transition: all 400ms ease;
  margin-bottom: 40px;
}
.card .contenido-card a:hover{
  background: brown;
  color: #3F1602;
}
@media only screen and (min-width:320px) and (max-width:768px){
  .container-card{
    flex-wrap: wrap;
  }
  .card{
    margin: 80px;
  }
}
.space {
  width: 20px;
  height: 40px;
  display: inline-block;
}

list{
  display: grid;
  justify-content: start;
  text-align:left;
}


.blue {
  background: #fff;
  text-align: center;
}

.contact {
  max-width: 1200px;
  margin: 0 auto;
}

.contact input, .contact textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #D4D7E0;
  color: black;
  -webkit-transition: .5s ease all;
  transition: .5s ease all;
}

.contact textarea {
  height: 100px;
  width:1050px;
  resize: none;
  background-color: #FDFBEF;
  border: 2px solid black ;
}

.contact button {
  display: block;
  width: 100%;
  background: #3F1602;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  color: #FDFBEF;
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: .5s ease all;
  transition: .5s ease all;
}
.comments{
  font-size:17px;
  font-weight: lighter;
}
</style>