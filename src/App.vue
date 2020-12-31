<template>
  <AppHeader />
  <div class="w-full flex">
    <div class="m-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
