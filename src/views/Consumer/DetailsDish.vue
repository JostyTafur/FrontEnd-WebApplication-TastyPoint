<template>
  <h1>Dish {{id}}</h1>
</template>

<script>
export default {
  name: "DetailsDish",
  data(){
    return {
      id: Number
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>