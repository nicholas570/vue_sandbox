<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <HeroList :heroes="heroes" @add-hero="updateHeroes" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeroList from "./components/HeroList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeroList
  },
  data() {
    return {
      heroes: [
        { id: 1, name: "Bruce Wayne" },
        { id: 2, name: "Victor Stone" },
        { id: 3, name: "Diana" },
        { id: 4, name: "Lois Lane" }
      ]
    };
  },
  methods: {
    updateHeroes(hero) {
      this.heroes = [
        ...this.heroes,
        { id: this.heroes.length + 1, name: hero }
      ];
    }
  }
};
</script>
