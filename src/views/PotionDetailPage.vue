<template>
  <NavBar />
  <div class="card" :style="{ backgroundImage: `url(${potion.image})` }">
    <div class="textBox">
      <p class="text head">{{ potion.name }}</p>
      <p class="text title">🗃️ Caractéristiques:</p>
      <span>{{ potion.characteristics || 'Non spécifié'}}</span>
      <p class="text title">🎚️ Difficulté:</p>
      <span>{{ potion.difficulty  || 'Non spécifié'}}</span>
      <p class="text title">✨ Effet:</p>
      <span>{{ potion.effect  || 'Non spécifié'}}</span>
      <p class="text title">🤮 Effet secondaire:</p>
      <span>{{ potion.side_effects || 'Non spécifié'}}</span>
      <p class="text title">👩‍🔬 Inventeurs:</p>
      <span>{{ potion.inventors || 'Inconnu' }}</span>
      <p class="text title">🏭 Fabriquants:</p>
      <span>{{ potion.manufacturer || 'Non spécifié' }}</span>
      <p class="text title">🥕 Ingrédients:</p>
      <span>{{ potion.ingredients || 'Non spécifié' }}</span>
      <p class="text title">⏲️ Temps nécessaire:</p>
      <span>{{ potion.time || 'Non spécifié' }}</span>
      <a :href="potion.wiki" target="_blank">➡️ En savoir + (Wiki)</a>
    </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import axios from 'axios';

export default {
  components: {
    NavBar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      potion: {}
    };
  },
  async created() {
    try {
      const response = await axios.get(`https://api.potterdb.com/v1/potions/${this.id}`);
      if (response.data.data) {
        this.potion = response.data.data.attributes;
      } else {
        console.error('Potion not found');
      }
    } catch (error) {
      console.error('Error fetching potion details:', error);
    }
  }
};
</script>

<style scoped>
@import url('../assets/police.css');
.card {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #2c3e50;
  color: white;
}


.textBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  z-index: 2;
  backdrop-filter: blur(10px) brightness(0.8);

}

.textBox > .text {
  font-weight: bold;
}


.textBox > .head {
  font-size: 35px;
  font-weight: 800;
  align-self: flex-start;
  margin-right: 10%;
  margin-left: 10%;
}

.textBox > .title {
  font-size: 25px;
  font-weight: 700;

  align-self: flex-start;

  margin-right: 10%;
  margin-left: 10%;

}

.textBox > span {
  font-size: 20px;
  font-weight: 400;

  align-self: flex-start;

  margin-right: 10%;
  margin-left: 15%;
}

.card a {
  margin-top: 10px;
  padding: 10px 20px;
  color: #c2bcbc;
  background-color: #2c3e50;
  border-radius: 20px 0 0 0;
  height: 50px;
  font-size: 25px;
  font-weight: 900;
  align-self: flex-end;
}
</style>
