<template>
  <NavBar />
  <div class="container">

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
@import url('../assets/police.css');
.container {
  display: flex; /* Utilise Flexbox pour centrer les éléments */
  flex-direction: column; /* Aligne les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
  justify-content: center; /* Centre les éléments verticalement */
  margin-top: 150px;
  margin-left: 20px;
}

h1 {
  text-align: center;
  margin-top: 40px;
  font-size: 36px;
}

h3 {
  margin: 40px 0 20px;
  text-align: center;
  font-size: 24px;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #8700e1;
  text-decoration: none;
  font-weight: bold;
  transition: text-shadow 0.3s ease; /* Ajoute une transition pour une animation fluide */
}

a:hover {
  text-decoration: underline;
  text-shadow: 0 0 40px #c300e1; /* Ajoute une lumière au survol */
}
</style>