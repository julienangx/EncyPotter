<template>
  <div class="card" :style="{ backgroundImage: `url(${character.image})` }">
    <p class="head">{{ character.name }}</p>
    <div class="textBox">
      <p class="text head">{{ character.name }}</p>
      <p class="text title">🐾 Race:</p>
      <span>{{ character.species }}</span>
      <p class="text title">⚤ Genre:</p>
      <span>{{ character.gender || 'Non spécifiée' }}</span>
      <p class="text title">🎂 Date de naissance:</p>
      <span>{{ character.born || 'Non spécifiée' }}</span>
      <p class="text title">🏠 Maison à Poudlard:</p>
      <span>{{ character.house || 'Pas de maison' }}</span>
      <p class="text title">💼 Métiers:</p>
      <span>{{ character.jobs || 'Inconnu' }}</span>
      <a :href="character.wiki" target="_blank">➡️ En savoir +</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  min-width: 50%;
  width: 90%;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #2c3e50;
  color: white;
  transition: 0.5s ease-in-out;
}


.textBox {
  opacity: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  z-index: 2;
  backdrop-filter: blur(10px) brightness(0.8);
  font-family: Montserrat, sans-serif;

}

.textBox > .text {
  font-weight: bold;
}

.head {
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  font-weight: 800;
  margin-right: 10%;
  margin-left: 10%;


  height: 100%;

}

.textBox > .head {
  font-size: 0px;
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

.card:hover > .textBox {
  opacity: 1;
}

.card:hover > .head {
  opacity: 0;
  font-size: 0px;

}

.card:hover > .textBox > .head {
  font-size: 35px;
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.04) rotate(-1deg);
  overflow: hidden;
  background-size: 200%;
  background-repeat: no-repeat;
  animation: anim 5s infinite;
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
  font-family: Montserrat, sans-serif;
  align-self: flex-end;
}
</style>
