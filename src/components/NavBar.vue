<script setup>

</script>

<template>
    <nav class="navbar">
      <div class="titre">
        <img class="logo" src="../assets/logo.png">
        <p>La seule encyclopédie sur Harry Potter ! (pas la peine de vérifier c'est vrai !)</p>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/livres" class="nav-link">Livres</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/personnages" class="nav-link">Personnages</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/potions" class="nav-link">Potions</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sorts" class="nav-link">Sorts</router-link>
        </li>
      </ul>
    </nav>

</template>

<style scoped>
.titre {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.navbar {
  background-color: #1f1f1f;
  padding: 10px;
  border-radius : 15px;
  color: white;
  font-family: Montserrat, sans-serif;

}

.navbar-brand {
  font-size: 1.5em;
  text-decoration: none;
  font-weight: 600;
}

.navbar-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: inline-block;
  margin-right: 10px;
}

.nav-link {
  text-decoration: none;
}

.nav-link:visited {
  color: white;
}

.logo{
  width: 10%;
}

</style>