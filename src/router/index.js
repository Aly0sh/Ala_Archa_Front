import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import CreateArea from "../views/super-admin/CreateArea.vue"

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
    path: "/services",
    name: "services",
    component: () =>
      import("../views/ServicesView.vue"),
  },
  {
    path: "/entry",
    name: "entry",
    component: () =>
      import("../views/AutoView.vue"),
  },  
  {
    path: "/fauna",
    name: "fauna",
    component: () =>
      import("../views/FaunaView.vue"),
  },  
  {
    path: "/flora",
    name: "flora",
    component: () =>
      import("../views/FloraView.vue"),
  },
  {
    path: "/hotel",
    name: "hotel",
    component: () =>
      import("../views/HotelView.vue"),
  },
  {
    path: "/object",
    name: "object",
    component: () =>
      import("../views/ObjectView.vue"),
  },
  {
    path: "/about-us",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/super-admin/create-area",
    name: "create-area",
    component: CreateArea
  },
  {
    path: "/super-admin/create-hotel",
    name: "create-hotel",
    component: () =>
      import("../views/super-admin/CreateHotel.vue"),
  },
  {
    path: "/super-admin/create-menu",
    name: "create-menu",
    component: () =>
      import("../views/super-admin/CreateMenu.vue"),
  },
  {
    path: "/super-admin/create-object-type",
    name: "create-object-type",
    component: () =>
      import("../views/super-admin/CreateObjectType.vue"),
  },
  {
    path: "/super-admin/create-object",
    name: "create-object",
    component: () =>
      import("../views/super-admin/CreateObject.vue"),
  },
  {
    path: "/super-admin/create-flora-fauna",
    name: "create-flora-fauna",
    component: () =>
      import("../views/super-admin/CreateFloraFauna.vue"),
  },
  {
    path: "/super-admin/create-room-type",
    name: "create-room-type",
    component: () =>
      import("../views/super-admin/CreateRoomType.vue"),
  },
  {
    path: "/super-admin/create-room",
    name: "create-room",
    component: () =>
      import("../views/super-admin/CreateRoom.vue"),
  },
  {
    path: "/super-admin/create-menu-section",
    name: "create-menu-section",
    component: () =>
      import("../views/super-admin/CreateMenuSection.vue"),
  },
  {
    path: "/super-admin/create-hotel-halls",
    name: "create-hotel-halls",
    component: () =>
      import("../views/super-admin/CreateHotelHalls.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
