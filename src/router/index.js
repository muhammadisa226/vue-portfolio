import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Portfolios from "../views/PortfoliosView.vue";
import Skills from "../views/SkillsView.vue";
import Contact from "../views/ContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/portfolios",
      name: "portfolios",
      component: Portfolios,
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
