<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Sorts</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher un sort...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div  v-for="spell in spells" :key="spell.id">
        <SpellCard :spell="spell.attributes" />
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
  mounted() {
    this.fetchSpells();
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchSpells();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchSpells();
      }
    },
    firstPage() {
      this.currentPage = 1;
      this.fetchSpells();
    },
    lastPage() {
      this.currentPage = this.totalPages;
      this.fetchSpells();
    },
    fetchSpells() {
      this.loading = true;
      let url = `https://api.potterdb.com/v1/spells?page[number]=${this.currentPage}`;

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
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
      this.fetchSpells();
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
    margin-bottom: 20px;
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
