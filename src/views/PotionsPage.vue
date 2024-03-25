<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Potions</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher une potion...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div v-for="potion in potions" :key="potion.id">
        <PotionCard :potion="potion" />
      </div>
    </div>
    <pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :prevPage="prevPage"
        :nextPage="nextPage"
        :first-page="firstPage"
        :last-page="lastPage"
    />  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import Pagination from "@/components/Pagination.vue";
import PotionCard from "@/components/PotionCard.vue";

export default {
  name: 'PotionsPage',
  components: {
    NavBar,
    Pagination,
    PotionCard
  },
  data() {
    return {
      potions: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 0,
      searchQuery: ''
    }
  },
  mounted() {
    this.fetchPotions();
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchPotions();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchPotions();
      }
    },
    firstPage() {
      this.currentPage = 1;
      this.fetchPotions();
    },
    lastPage() {
      this.currentPage = this.totalPages;
      this.fetchPotions();
    },
    fetchPotions() {
      this.loading = true;
      let url = `https://api.potterdb.com/v1/potions?page[number]=${this.currentPage}`;

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
              this.potions = response.data.data;
            } else {
              console.error('Invalid response data:', response.data);
            }

            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching potions:', error);
            this.loading = false;
          });
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
      this.fetchPotions();
    },
  }
}
</script>

<style>
@import url('../assets/police.css');
.container-cartes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}
.barrederecherches{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius : 15px;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: #191919;
  color: #ffffff;

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
