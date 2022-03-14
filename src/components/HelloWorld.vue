<template>
  <h1>{{ msg }}</h1>
  <i18n-t keypath="links-example" tag="p">
    <template #link>
      <router-link :to="{ name: 'link-sample' }">
        {{ t("check-it-out") }}
      </router-link>
    </template>
  </i18n-t>
  <p>
    {{ t("setup") }}
    <a href="https://code.visualstudio.com/">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar">Volar</a>
    +
    <a href="https://github.com/lokalise/i18n-ally">i18n-ally</a>
  </p>

  <p>
    {{ t("see-readme.see") }} <code>README.md</code>
    {{ t("see-readme.more-info") }}
  </p>

  <h2>{{ t("docs") }}</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html">Vite</a>
    |
    <a href="https://v3.vuejs.org/">Vue 3</a>
    |
    <a href="https://router.vuejs.org">Vue-Router</a>
    |
    <a href="https://www.typescriptlang.org/docs/">Typescript</a>
    |
    <a href="https://eslint.org/docs/user-guide/">ESLint</a>
    |
    <a href="https://prettier.io/docs/en/index.html">Prettier</a>
  </p>

  <h3>{{ t("check-reactivity") }}</h3>

  <button size="small" type="button" @click="count++">
    {{ t("count", { count }) }}
  </button>
  <p>
    {{ t("hmr.edit") }}
    <code>components/HelloWorld.vue</code>
    {{ t("hmr.test") }}
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

defineProps<{ msg: string }>();

const { t } = useI18n();

const count = ref(0);
</script>

<style lang="scss" scoped>
@use "@/styles/functions/app-color" as *;

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  border-radius: 4px;
  background-color: #eee;
  color: #304455;
}
</style>
