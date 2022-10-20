<template>
    <div class="dashboard">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar-consumer.component.vue'
export default {
    name: "DashBoard-consumer",
    components: {Sidebar}
}
</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 1fr 5fr;
    }

    .content{
        width: 79vw;
        height: 94vh;
        text-align: center;
        background-color: rgba(233, 65, 82, 1);
        border-radius:10px;
        margin: 5px 18vw;
    }
</style>