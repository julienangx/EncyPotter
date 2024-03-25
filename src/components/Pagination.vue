<template>
  <div class="paginate-controls">
    <button @click="prevPage" :disabled="currentPage === 1" class="prev-btn">Précédent</button>
    <button @click="firstPage" :disabled="currentPage === 1" class="prev-btn">Premier</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="lastPage" :disabled="currentPage === totalPages" class="next-btn">Dernier</button>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="next-btn">Suivant</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationControls',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    prevPage: {
      type: Function,
      required: true
    },
    nextPage: {
      type: Function,
      required: true
    },
    firstPage: {
      type: Function,
      required: true
    },
    lastPage: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

@import url('../assets/police.css');

.paginate-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.prev-btn, .next-btn {
  background-color: #26003b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: ease 0.1s;
  width: 200px;
  height: 50px;
  margin: 0 5px;
  font-weight: 400;
}

.prev-btn:hover, .next-btn:hover {
  background-color: #26003b;
  font-weight: 800;
}

.prev-btn:disabled, .next-btn:disabled {
  background-color: #26003b;
  cursor: not-allowed;
}
</style>
