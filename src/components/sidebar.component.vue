<template>
    <div class="sidebar">
        <div class="title">
            <img src="../assets/images/logo-dashb.png" alt="logo" class="logo-dashb"/>
            <div>
                <h2>TastyPoint</h2>
            </div>
        </div>
        
        <div class="subtitle">
            <h3>Menu</h3>
        </div>
        <div class="menu-items">
            <router-link to="/list" active-class="active" exact tag="button" class="side-btn">
                    <div class="link-container">
                        <i class=" pi pi-list"></i>
                        List
                    </div>
                </router-link>
            <router-link to="/favorites" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <i class=" pi pi-heart-fill"></i>
                    Favorites
                </div>
            </router-link>
                
            <router-link to="/notifications" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <i class=" pi pi-bell"></i>                
                    Notifications
                </div>
            </router-link>
                
            <router-link to="/orders" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <i class=" pi pi-shopping-bag"></i>
                    Orders
                </div>
            </router-link>
            
        </div>

        <div class="subtitle">
            <h3>Account</h3>
        </div>
        <div class="menu-items">
            <router-link to="/settings" active-class=active exact tag="button" class="side-btn">
                <div class="link-container">
                    <i class=" pi pi-list"></i>
                    Settings
                </div>
            </router-link>
                
            <router-link to="/login" active-class=active exact tag="button" class="side-btn">
                <div class="link-container">
                    <i class=" pi pi-sign-out"></i>                
                    Sign out
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return{

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

    
</style>