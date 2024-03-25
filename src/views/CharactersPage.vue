<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Personnages</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher un personnage...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div v-for="character in characters" :key="character.id">
        <CharacterCard :character="character.attributes" />
      </div>
    </div>
    <pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :prevPage="prevPage"
        :nextPage="nextPage"
        :first-page="firstPage"
        :last-page="lastPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: 'CharactersPage',
  components: {
    NavBar,
    CharacterCard,
    Pagination
  },
  data() {
    return {
      characters: [],
      loading: false,
      currentPage: 1,
      totalPages: 0,
      searchQuery: ''
    }
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchCharacters();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchCharacters();
      }
    },
    firstPage() {
      this.currentPage = 1;
      this.fetchCharacters();
    },
    lastPage() {
      this.currentPage = this.totalPages;
      this.fetchCharacters();
    },
    fetchCharacters() {
      this.loading = true;
      let url = `https://api.potterdb.com/v1/characters?page[number]=${this.currentPage}`;

      if (this.searchQuery) {
        url += `&filter[name_cont]=${this.searchQuery}`;
      }

      axios.get(url)
          .then(response => {
            if (response.data && response.data.meta && response.data.meta.pagination) {
              this.totalPages = response.data.meta.pagination.last;
              if (isNaN(this.totalPages))
              {
                this.totalPages = this.currentPage;
              }
            } else {
              console.error('Invalid response data:', response.data);
            }

            if (response.data && Array.isArray(response.data.data)) {
              this.characters = response.data.data;
            } else {
              console.error('Invalid response data:', response.data);
            }

            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching characters:', error);
            this.loading = false;
          });
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
      this.fetchCharacters();
    },
  }
}
</script>

<style scoped>
@import url('../assets/police.css');
.container-cartes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
.barrederecherches {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius : 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #191919;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
}
.barrederecherches input {
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  width: 30%;
}
.barrederecherches h1 {
  margin-left: 20px;
}
</style>
