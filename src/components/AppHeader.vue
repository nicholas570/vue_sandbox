<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2"
  >
    <router-link
      class="mx-2"
      v-for="route in routes"
      :key="route.id"
      :to="route.path"
      >{{ route.name }}</router-link
    >
  </nav>
</template>

<script>
import routes from "../router/routes";

export default {
  name: "AppHeader",
  data() {
    return {
      routes
    };
  }
};
</script>

<style></style>
