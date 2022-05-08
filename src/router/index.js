import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import CreateArea from "../views/CreateArea.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp
  },
  {
    path: "/create-area",
    name: "create-area",
    component: CreateArea
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
  },
  {
    path: "/entry",
    name: "entry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AutoView.vue"),
  },  
  {
    path: "/fauna",
    name: "fauna",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FaunaView.vue"),
  },  
  {
    path: "/flora",
    name: "flora",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FloraView.vue"),
  },
  {
    path: "/hotel",
    name: "hotel",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HotelView.vue"),
  },
  {
    path: "/object",
    name: "object",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ObjectView.vue"),
  },
  {
    path: "/about-us",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/create-hotel",
    name: "create-hotel",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/super-admin/CreateHotel.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
