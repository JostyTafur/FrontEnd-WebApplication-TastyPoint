<template>
    <div class="favorites">
        <div class="title">
            <h2>Close to your area: </h2> 
        </div>
        <div class="cards">
            <pv-card  v-for="dish of dishes" :key="dish.favorite" v-show="dish.favorite">
                <template #header>
                    <div class="header-card">
                        <img class="img-card" :src="dish.image" alt=""/>
                        <div class="price">Price: {{dish.price}}</div>
                    </div>
                </template>
                <template #title>
                    <div class="title-card">
                        <div class="rest-name">{{dish.restaurantname}}</div>
                        <div class="icon-card">
                            <a v-on:click="updateFavorite(dish)">
                               <i :class="[dish.favorite? 'pi pi-heart-fill' : 'pi pi-heart']" style="font-size: 2rem"></i>
                            </a>
                    </div>
                    </div>
                    
                </template>
                <template #content>
                    <div class="content-card">
                        <div>
                            Product type: {{dish.producttype}}
                        </div>
                        <div>
                            Product name: {{dish.productname}}
                        </div>
                    </div>
                </template>
            </pv-card>
            
        </div>
        
    </div>
</template>

<script>
import {DishesApiService} from "/src/views/services/dishes-api.service.js"
export default{
    name: "List",
    data(){
        return {
            dishes:[],
            dishesService: null
        };
    },
    created(){
        try{
            this.dishesService = new DishesApiService();
            this.dishesService.getAll().then((response)=>{
            this.dishes = response.data;
            console.log(this.dishes);
        });
        }
        catch(e){
            console.error(e);
        }
    },
    methods:{
        updateFavorite(dish){
            this.dishesService.patch(dish.id, {"favorite": !dish.favorite});
            dish.favorite = !dish.favorite;
        }
    }
}
</script>

<style scoped>
    .title{
       margin: 60px 40px 0 60px;
       grid-column: 1;
       grid-row: 1;
       justify-self: start;
    }
    .favorites{
        display: grid;
        grid-template-columns: 1fr;
        justify-content: start;
    }
    .cards{
        margin: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        grid-row: 2;
    }
    .img-card{
        height: 18vh;
        width: 21vw;
        margin: 10px;
        border-radius: 10px;
    }
    .header-card{
        position: relative;
        display: inline-block;
    }
    .price{
        position: absolute;
        top: 70%;
        left: 65%;
        color: white;
        font-size: 18px;
    }
    .p-card{
        width: 23vw;
        height: 36vh;
        margin: 15px;
        border-radius: 20px;
        justify-self: center;
    }
    .title-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: -25px;
    }
    .rest-name{
        grid-column: 1/2;
        justify-self: start;
        margin-left: 10px;
    }
    .icon-card{
        grid-column: 3/3;
        justify-self: end;
        margin-right: 20px;
    }
    .content-card{
        display: flex;
        flex-direction: column;
        text-align: start;
        font-size: 15px;
        margin: -30px 10px 0px 10px;
    }

</style>