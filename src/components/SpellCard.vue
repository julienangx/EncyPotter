<template>
  <div class="card" :style="{ backgroundImage: `url(${spell.image})` }">
    <p class="head">{{ spell.name }}</p>
    <div class="textBox">
      <p class="text head">{{ spell.name }}</p>
      <p class="text title">🗃️ Catégorie:</p>
      <span>{{ spell.category }}</span>
      <p class="text title">✨ Effet:</p>
      <span>{{ spell.effect }}</span>
      <p class="text title">🧙‍ Créateur:</p>
      <span>{{ spell.creator || 'Inconnu' }}</span>
      <p class="text title">🪄 Incantation:</p>
      <span>{{ spell.incantation || 'Non spécifiée' }}</span>
      <p class="text title">📝 Attribut:</p>
      <span>{{ spell.light || 'Non spécifié' }}</span>
      <p class="text title">📖 Description:</p>
      <span v-html="generateDescription(spell)"></span>
      <a :href="spell.wiki" target="_blank">➡️ En savoir + (WIKI)</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spell: {
      type: Object,
      required: true
    }
  },
  methods: {
    generateDescription(spell) {
      let description = `Le sort "${spell.name}" est un sort de la catégorie "${spell.category}" qui a pour effet "${spell.effect}". `;
      if (spell.creator) {
        description += `Il a été créé par ${spell.creator}. `;
      } else {
        description += `Son créateur est inconnu. `;
      }
      if (spell.incantation) {
        description += `Pour le lancer, vous devez prononcer l'incantation "${spell.incantation}". `;
      } else {
        description += `Cependant, son incantation est inconnue. `;
      }
      if (spell.light) {
        description += `Lorsque ce sort est utilisé, il produit une lumière de type "${spell.light}". `;
      } else {
        description += `Lorsque ce sort est utilisé, son effet lumineux est inconnu. `;
      }
      return description;
    }
  }
};
</script>

<style scoped>
@import url('../assets/police.css');
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
