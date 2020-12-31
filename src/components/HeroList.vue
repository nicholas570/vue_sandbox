<template>
  <div>
    <ul>
      <li v-for="hero in heroes" :key="hero.id">
        {{ hero.name }}
      </li>
    </ul>
    <form @submit.prevent="addHero">
      <input type="text" v-model.trim.lazy="newHero" />
      <button type="submit">Add hero</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HeroList",
  props: {
    heroes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newHero: ""
    };
  },
  methods: {
    addHero() {
      this.$emit("add-hero", this.capitalize(this.newHero));
      this.newHero = "";
    },
    capitalize(str) {
      const splitStr = str.toLowerCase().split(" ");
      const capitalized = splitStr.map(
        word => word.charAt(0).toUpperCase() + word.substring(1)
      );

      return capitalized.join(" ");
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>
