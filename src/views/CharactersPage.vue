<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Personnages</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher un personnage...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div  v-for="character in displayedCharacters" :key="character.id">
        <CharacterCard :character="character.attributes" />
      </div>
    </div>
    <Pagination :totalPages="totalPages" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import Pagination from "@/components/Pagination.vue";
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  name: 'CharactersPage',
  components: {
    NavBar,
    Pagination,
    CharacterCard
  },
  data() {
    return {
      characters: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: ''
    }
  },
  computed: {
    displayedCharacters() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCharacters.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredCharacters.length / this.itemsPerPage);
    },
    filteredCharacters() {
      return this.characters.filter(character => character.attributes.name && character.attributes.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  mounted() {
    this.loading = true;
    axios.get('https://api.potterdb.com/v1/characters')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.characters = response.data.data;
          } else {
            console.error('Invalid response data:', response.data);
          }
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching spells:', error);
          this.loading = false;
        });
  },
  methods: {
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
    }
  }
}
</script>

<style>
.container-cartes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
.barrederecherches{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius : 15px;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: #191919;
  color: #ffffff;

  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 800;
}

.barrederecherches input{
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  width: 30%;
}

.barrederecherches h1{
  margin-left: 20px;
}



</style>
