<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Sorts</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher un sort...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div  v-for="spell in displayedSpells" :key="spell.id">
        <SpellCard :spell="spell.attributes" />
      </div>
    </div>
    <Pagination :totalPages="totalPages" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import Pagination from "@/components/Pagination.vue";
import SpellCard from "@/components/SpellCard.vue";

export default {
  name: 'SpellsPage',
  components: {
    NavBar,
    Pagination,
    SpellCard
  },
  data() {
    return {
      spells: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: ''
    }
  },
  computed: {
    displayedSpells() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredSpells.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredSpells.length / this.itemsPerPage);
    },
    filteredSpells() {
      return this.spells.filter(spell => spell.attributes.name && spell.attributes.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  mounted() {
    this.loading = true;
    axios.get('https://api.potterdb.com/v1/spells')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.spells = response.data.data;
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
