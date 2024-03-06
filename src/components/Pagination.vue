<!-- PaginateControls.vue -->
<template>
  <div class="paginate-controls">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="prev-btn">Précédent</button>
    <button v-for="pageNumber in totalPages" :key="pageNumber" @click="changePage(pageNumber)" :class="{ 'active': pageNumber === currentPage }" class="page-btn">{{ pageNumber }}</button>
    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="next-btn">Suivant</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationControls',
  props: {
    totalPages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
        this.$emit('pageChange', pageNumber);
      }
    }
  }
};
</script>

<style scoped>
.paginate-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  font-family: Montserrat, sans-serif;
}

.prev-btn,.next-btn
{
  background-color: #777777;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: ease 0.1s;
  width: 200px;
  height: 50px;
  margin: 0 5px;

  font-family: Montserrat, sans-serif;
  font-weight: 400;


}
.page-btn {
  background-color: #383838;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: ease 0.1s;

  width: 50px;
  height: 50px;
  margin: 0 5px;
}

.prev-btn:hover,
.next-btn:hover,
.page-btn:hover {
  background-color: #444d4d;
  font-weight: 800;
}

.prev-btn:disabled,
.next-btn:disabled,
.page-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.active {
  background-color: #191919;
  font-weight: 800;
}
</style>
