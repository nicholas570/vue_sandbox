<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import sampleText from "../utils/sampleText";
import debounce from "../utils/mixins/debounce";

export default {
  name: "Markdown",
  mounted() {
    this.text = localStorage.getItem("Text") || sampleText;
  },
  updated() {
    localStorage.setItem("Text", this.text);
  },
  unmounted() {
    localStorage.removeItem("Text");
  },
  mixins: [debounce], // overidded if a debounce method is declared in the component
  data() {
    return {
      text: ""
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    }
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    }
  }
};
</script>

<style></style>
