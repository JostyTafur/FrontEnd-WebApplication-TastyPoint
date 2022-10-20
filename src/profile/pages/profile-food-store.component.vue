<template>
  <div style="display: grid; grid-template-columns: 10% 90%; margin: 10px">
    <router-link to="consumer/detail/1" style="justify-self: center; align-self: center">
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
              <h3> Restaurants: 7 Soups </h3>
              <h3>Description:</h3>
              <p>Two level peruavian Industrial-style restaurant whit homemade dishes, such as hearty soups.</p>
              <p>Service Options: On-Site Consumption - Door Pickup - Contactless Delivery.</p>
              <p>Adress: Av. Arequipa 2394, Lince 15046</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3536566926905!2d-77.03645868255614!3d-12.087923999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85fce2817c3%3A0x417c88bcadfbfc05!2sAv.%20Arequipa%202394%2C%20Lince%2015046!5e0!3m2!1ses-419!2spe!4v1666144770684!5m2!1ses-419!2spe" width="850" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div>
              </div>
              <div>
                <p>Delivery methods:</p>
                <p>Face-to-face</p>
                <p>This store does not offer delivery</p>
                <h3> Leave comment and/or rating </h3>
              </div>
              <div>
                <div class="contact content-body">
                  <form method="POST" action="https://formspree.io/email@email.com">
                    <input type="hidden" name="_subject" value="Contact request from personal website" />
                    <textarea name="message" placeholder="Write your comment" required></textarea>
                    <a href="4">Send</a>
                  </form>
                </div>
              </div>
              <h3>2 Comments:</h3>
              <h3>paulina124</h3>
              <h3>I love the attention, although they take a while. On the other hand, the delicios food.</h3>
              <h3>josemendoza</h3>
              <h3>The food is good, and   the  supplies and dishes are in good conditions. You  must try  one of     their soups if you are  lucky enough to have    leftovers</h3>
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
  border-radius: 30px;
  font-size: 20px;
  border: 2px solid #D50000;
  transition: all .7s ease;
}

::placeholder {
  color: grey;
}

.btn p {
  font-size: 10px;
  color: white;
  line-height: 200px;
  transition: all .7s ease;

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
  margin: 90px;
  border-radius: 29px;
  overflow: hidden;
  background:white;
  box-shadow: 0px 1px 80px rgba(0,0,0,0.2);
  transition: all 400ms ease-out;
  cursor: default;

}
.card:hover{
  box-shadow: 15px 15px 80px rgba(0,0,0,0.4);
  transform: translateY(-3%);
}
.card img{
  width: 100%;
  height: 330px;
}
.card .contenido-card{
  padding: 30px;
  text-align:center;
}

.card .contenido-card{
  padding: 30px;
  text-align:-moz-center;
}
.card .contenido-card h3{
  margin-bottom: 30px;
  color: black;

}
.card .contenido-card p{
  line-height: 1.3;
  color: brown;
  font-size: 18px;
  margin-bottom: 5px;
}
.card .contenido-card a{
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: saddlebrown;
  border: 1px solid sandybrown;
  border-radius: 10px;
  transition: all 400ms ease;
  margin-bottom: 40px;
}
.card .contenido-card a:hover{
  background: brown;
  color: black;
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
  height: 160px;
  resize: none;
  background-color: #FDFBEF;
  border: 2px solid black ;
}

.contact button {
  display: block;
  width: 100%;
  background: black;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  color: brown;
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: .5s ease all;
  transition: .5s ease all;
}
</style>