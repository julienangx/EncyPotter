<script setup>

</script>

<template>
    <nav class="navbar">
      <router-link to="/" class="navbar-brand">Encyclopédie Harry Potter</router-link>
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
/* navbar */
.navbar {
  background-color: #333; /* Couleur de fond */
  padding: 10px; /* Espacement interne */
}

/* lien de la marque */
.navbar-brand {
  color: white; /* Couleur du texte */
  font-size: 1.5em; /* Taille de la police */
  text-decoration: none; /* Supprimer la soulignement */
}

/* liste de navigation */
.navbar-nav {
  list-style-type: none; /* Supprimer les puces de liste */
  padding: 0; /* Supprimer le remplissage de la liste */
  margin: 0; /* Supprimer les marges de la liste */
}

/* éléments de navigation */
.nav-item {
  display: inline-block; /* Afficher les éléments en ligne */
  margin-right: 10px; /* Marge à droite entre les éléments */
}

/* style des liens */
.nav-link {
  color: white; /* Couleur du texte */
  text-decoration: none; /* Supprimer la soulignement */
}

/* style des liens actifs */
.nav-link.active {
  font-weight: bold; /* Texte en gras */
}

</style>