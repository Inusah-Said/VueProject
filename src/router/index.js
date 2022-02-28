import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView.vue";
import Layout from "../components/containers/Layout.vue";
import TasksView from "../views/TasksView.vue";
import CalendarView from "../views/CalendarView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/home",
          name: "home",
          component: LandingView,
        },
        {
          path: "/tasks",
          name: "tasks",
          component: TasksView,
        },
        {
          path: "/calendar",
          name: "calendar",
          component: CalendarView,
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
