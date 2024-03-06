<template>
  <NavBar />
  <img alt="Vue logo +" src="../assets/logo.png">
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'HomePage',
  components: {
    NavBar
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>