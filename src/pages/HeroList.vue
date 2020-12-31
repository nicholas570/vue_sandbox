<template>
  <h1 class="text-2xl text-center">{{ heroesCount }}</h1>
  <ul>
    <li class="flex justify-between" v-for="hero in heroes" :key="hero.id">
      <div>
        {{ hero.name }}
      </div>
      <button @click="removeHero(hero.id)">X</button>
    </li>
  </ul>
  <form class="mt-10" @submit.prevent="addHero">
    <input class="border rounded" type="text" v-model.trim.lazy="newHero" />
    <button
      class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
      type="submit"
    >
      Add hero
    </button>
  </form>
</template>

<script>
export default {
  name: "HeroList",
  data() {
    return {
      user: "Nicolas",
      heroes: [
        { id: 1, name: "Bruce Wayne" },
        { id: 2, name: "Victor Stone" },
        { id: 3, name: "Diana" },
        { id: 4, name: "Lois Lane" }
      ],
      newHero: ""
    };
  },
  computed: {
    heroesCount() {
      return `You have ${this.heroes.length} favorites heroes ${this.user}`;
    }
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.heroes = [
          ...this.heroes,
          { id: this.heroes.length + 1, name: this.capitalize(this.newHero) }
        ];
        this.newHero = "";
      }
    },
    removeHero(id) {
      this.heroes = this.heroes.filter(hero => hero.id !== id);
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

<style scoped>
li {
  list-style: none;
}
</style>
