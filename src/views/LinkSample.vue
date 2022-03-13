<template>
  <p>
    {{ t("link-sample.body") }}
    <router-link :to="{ name: 'home' }">{{
      t("link-sample.go-back")
    }}</router-link>
  </p>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
