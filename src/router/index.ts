import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("@/views/Home.vue"),
    },
    {
      path: "/link-sample",
      name: "link-sample",
      component: defineAsyncComponent(() => import("@/views/LinkSample.vue")),
    },
  ],
});
