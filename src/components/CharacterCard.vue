<template>
  <div class="card" :style="{ backgroundImage: `url(${character.image})` }">
    <p class="head">{{ character.name }}</p>
    <div class="textBox">
      <p class="text head">{{ character.name }}</p>
      <p class="text title">🐾 Race:</p>
      <span>{{ character.species }}</span>
      <p class="text title">⚤ Genre:</p>
      <span>{{ character.gender || 'Non spécifié' }}</span>
      <p class="text title">🎂 Date de naissance:</p>
      <span>{{ character.born || 'Non spécifié' }}</span>
      <p class="text title">🏠 Maison à Poudlard:</p>
      <span>{{ character.house || 'Pas de maison' }}</span>
      <p class="text title">💼 Métiers:</p>
      <span>{{ character.jobs.join(', ') || 'Inconnu' }}</span>
      <p class="text title">🔍 Biographie:</p>
      <span v-html="generateBiography(character)"></span>
      <a :href="character.wiki" target="_blank">➡️ En savoir + (WIKI)</a>
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
  },
  methods: {
    generateBiography(character) {
      let pronom = '';
      let biography = '';
      const isMale = character.gender && character.gender.toLowerCase() === 'male';
      const isFemale = character.gender && character.gender.toLowerCase() === 'female';

      if (isMale) {
        pronom += 'Il ';
      } else if (isFemale) {
        pronom += 'Elle ';
      } else {
        pronom += 'La personne ';
      }

      if (character.alias_names && character.alias_names.length > 0) {
        biography += `${pronom} est connu(e) sous les noms : <b>${character.alias_names.slice(0, 5).join(', ')}</b>. `;
      }
      if (character.blood_status) {
        biography += `${pronom} a un statut de sang <b>${character.blood_status}</b>. `;
      }
      if (character.born) {
        biography += `${pronom} est né(e) le <b>${character.born}</b>. `;
      }
      if (character.died) {
        biography += `${pronom} est décédé(e) le <b>${character.died}</b>. `;
      }
      if (character.family_member && character.family_member.length > 0) {
        biography += `${pronom} possède comme membre(s) de sa famille : <b>${character.family_member.slice(0, 5).join(', ')}</b>. `;
      }
      if (character.gender) {
        biography += `${pronom} est de genre <b>${character.gender}</b>. `;
      }
      if (character.house) {
        biography += `${pronom} était dans la maison <b>${character.house}</b> à Poudlard. `;
      }
      if (character.jobs && character.jobs.length > 0) {
        biography += `${pronom} a travaillé comme <b>${character.jobs.slice(0, 5).join(', ')}</b>. `;
      }
      if (character.nationality) {
        biography += `${pronom} est de nationalité <b>${character.nationality}</b>. `;
      }
      if (character.patronus) {
        biography += `Son Patronus est <b>${character.patronus}</b>. `;
      }
      if (character.romances && character.romances.length > 0) {
        biography += `Relations amoureuses : <b>${character.romances.slice(0, 5).join(', ')}</b>. `;
      }
      if (character.species) {
        biography += `${pronom} appartient à l'espèce <b>${character.species}</b>. `;
      }
      if (character.titles && character.titles.length > 0) {
        biography += `${pronom} a été connu(e) sous le(s) titre(s) : <b>${character.titles.slice(0, 5).join(', ')}</b>. `;
      }
      if (character.wand && character.wand.length > 0) {
        biography += `Sa baguette magique est <b>${character.wand.slice(0, 5).join(', ')}</b>. `;
      }
      return biography;
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
