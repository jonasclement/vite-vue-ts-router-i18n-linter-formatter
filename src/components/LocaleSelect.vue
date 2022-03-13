<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { availableLocales, locale } = useI18n<string[]>();

watch(locale, (newLocale) => {
  if (newLocale) localStorage.locale = newLocale;
});
</script>

<template>
  <div class="locales">
    <select v-model="locale">
      <option
        :value="locale"
        class="locale"
        v-for="locale in availableLocales"
        :key="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
/* reset */
select {
  width: 100%;
  margin: 0;
  padding: 0 1rem 0 0;
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: inherit;
  appearance: none;
}

/* end of reset */

.locales {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 5rem;
  padding: 0.25em 0.5em;
  border: 1px solid currentcolor;
  border-radius: 2rem;
  font-size: 1.25rem;
  line-height: 1.1;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 0.8em;
    height: 0.5em;
    transform: translateY(-50%);
    background-color: currentcolor;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}
</style>
