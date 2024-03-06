<template>
  <div>
    <NavBar />
    <div class="barrederecherches">
      <h1>Liste des Livres Harry Potter</h1>
      <input type="text" v-model="searchQuery" placeholder="Rechercher un livre...">
    </div>
    <div v-if="loading">Chargement...</div>
    <div class="container-cartes" v-else>
      <div v-for="book in displayedBooks" :key="book.id">
        <BookCard :book="book.attributes" />
      </div>
    </div>
    <Pagination :totalPages="totalPages" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import Pagination from "@/components/Pagination.vue";
import BookCard from "@/components/BookCard.vue";

export default {
  name: 'BooksPage',
  components: {
    NavBar,
    Pagination,
    BookCard
  },
  data() {
    return {
      books: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: ''
    }
  },
  computed: {
    displayedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredBooks.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
    },
    filteredBooks() {
      return this.books.filter(book => book.attributes.title && book.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  mounted() {
    this.loading = true;
    axios.get('https://api.potterdb.com/v1/books')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.books = response.data.data;
          } else {
            console.error('Invalid response data:', response.data);
          }
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching books:', error);
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
