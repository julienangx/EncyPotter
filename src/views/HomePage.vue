<template>
  <NavBar />
  <h1>Bienvenue sur EncyPotter !</h1>
  <div>
    <h3>Découvrez nos différentes sections :</h3>
    <ul>
      <li><router-link to="/potions">Potions</router-link></li>
      <li><router-link to="/sorts">Sorts</router-link></li>
      <li><router-link to="/livres">Livres</router-link></li>
      <li><router-link to="/personnages">Personnages</router-link></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'HomePage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 40px;
}

h3 {
  margin: 40px 0 20px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>

