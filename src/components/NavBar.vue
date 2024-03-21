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
  background-color: #101010; /* Fond sombre pour la barre de navigation */
  padding: 10px;
  color: #e0e0e0; /* Texte clair */
  font-family: Montserrat, sans-serif;
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

a {
  color: #ff9696;
  text-decoration: none;
  font-weight: bold;
  transition: text-shadow 0.3s ease; /* Ajoute une transition pour une animation fluide */
}

a:hover {
  text-shadow: 0 0 30px #ff9696; /* Ajoute une lumière au survol */
}

.logo {
  margin-left: 70px;
  width: 10%;
}

p {
  text-align: right;
  width: 300px;
  margin-top: 30px;
}


</style>