<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Potions</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher une potion...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div v-for="potion in displayedPotions" :key="potion.id">
        <PotionCard :potion="potion" />
      </div>
    </div>
    <Pagination :totalPages="totalPages" @pageChange="handlePageChange" />
  </div>
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
      itemsPerPage: 10,
      searchQuery: ''
    }
  },
  computed: {
    displayedPotions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPotions.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredPotions.length / this.itemsPerPage);
    },
    filteredPotions() {
      return this.potions.filter(potion => potion.attributes.name && potion.attributes.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  mounted() {
    this.loading = true;
    axios.get('https://api.potterdb.com/v1/potions')
        .then(response => {
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
