import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/Contact.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("@/pages/Gallery.vue"),
  },
  {
    path: "/showcase",
    name: "showcase",
    component: () => import("@/pages/Showcase.vue"),
  },
  {
    path: "/instruction",
    name: "instruction",
    component: () => import("@/pages/Instruction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
