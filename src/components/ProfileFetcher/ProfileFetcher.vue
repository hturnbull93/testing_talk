<template>
  <CharacterCard v-if="characterData" v-bind="characterData" />
</template>

<script>
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard.vue";
import { ref } from "vue";

export default {
  components: {
    CharacterCard,
  },
  props: {
    characterId: {
      type: Number,
    },
  },
  setup(props) {
    const characterData = ref(null);

    axios
      .get(`https://rickandmortyapi.com/api/character/${props.characterId}`)
      .then((data) => {
        characterData.value = {
          name: data.data.name,
          picture: data.data.image,
        };
      });

    return {
      characterData,
    };
  },
};
</script>

<style>
</style>