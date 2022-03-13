<template>
  <router-view />
</template>

<style lang="scss">
@use "@/styles/functions/app-color" as *;

body {
  background-color: app-color(light);
  color: app-color(dark);

  @media (prefers-color-scheme: dark) {
    background-color: app-color(dark);
    color: app-color(light);
  }
}

#app {
  margin-top: 60px;
  text-align: center;
}
</style>
