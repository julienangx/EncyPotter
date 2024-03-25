<template>
  <nav class="navbar">
    <div class="titre">
      <img class="logo" src="../assets/logo.png">
      <p>La seule encyclopédie sur Harry Potter ! (pas la peine de vérifier c'est vrai !)</p>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">🏠Accueil</router-link>
      </li>
      <li class="nav-delimitation">
         |
      </li>
      <li class="nav-item">
        <router-link to="/livres" class="nav-link">📖Livres</router-link>
      </li>
      <li class="nav-delimitation">
        |
      </li>
      <li class="nav-item">
        <router-link to="/personnages" class="nav-link">🧙Personnages</router-link>
      </li>
      <li class="nav-delimitation">
        |
      </li>
      <li class="nav-item">
        <router-link to="/potions" class="nav-link">🧪Potions</router-link>
      </li>
      <li class="nav-delimitation">
        |
      </li>
      <li class="nav-item">
        <router-link to="/sorts" class="nav-link">✨Sorts</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

@import url('../assets/police.css');

.titre {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.navbar {
  background-color: #11001a; /* Fond sombre pour la barre de navigation */
  box-shadow: 0 0 30px rgb(195, 0, 225); /* Ombre portée sous le header */
  padding: 10px;
  color: #e0e0e0; /* Texte clair */
}

.navbar-nav {
  width: 600px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: inline-block;
  margin-right: 10px;
}

a {
  color: #8700e1;
  text-decoration: none;
  font-weight: bold;
  transition: text-shadow 0.3s ease; /* Ajoute une transition pour une animation fluide */
}

a:hover {
  text-shadow: 0 0 40px #c300e1; /* Ajoute une lumière au survol */
}

.logo {
  margin-left: 100px;
  width: 250px;
  height: 100px;
}

p {
  text-align: right;
  width: 300px;
  margin-top: 30px;
}

.nav-delimitation {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  color: #8700e1;
}

</style>
<script setup>
</script>