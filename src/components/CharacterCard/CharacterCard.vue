<template>
  <div>
    <div>{{ name }}</div>
    <img :src="picture" />
    <a v-if="name" :href="link" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  setup(props) {
    return {
      link: `/profiles/${props.name?.toLowerCase()}/`,
    };
  },
};
</script>

<style>
</style>