<template>
  <locale-select />
  <a
    v-for="{ alt, src, href } in links"
    :key="alt"
    class="logo-link"
    :href="href"
  >
    <img class="logo" :alt="alt" :src="getImgURL(src)" />
  </a>
  <HelloWorld :msg="t('welcome')" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import HelloWorld from "@/components/HelloWorld.vue";
import LocaleSelect from "@/components/LocaleSelect.vue";
import links from "@/data/links.json";

const { t } = useI18n();

const getImgURL = (src: string) => {
  return new URL(`../assets/svg/${src}.svg`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
@use "@/styles/functions/app-color" as *;
@use "sass:color";

.logo {
  width: 56px;
  height: 56px;
}

.logo-link {
  padding: 8px;
  border-radius: 50%;
  background: color.adjust(app-color(light), $lightness: -35%);

  @media (prefers-color-scheme: dark) {
    background: color.adjust(app-color(dark), $lightness: -5%);
  }

  & + .logo-link {
    margin-left: 16px;
  }
}
</style>
