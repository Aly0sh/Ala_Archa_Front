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
    path: "/cart",
    name: "cart",
    component: () =>
      import("../views/CartView.vue"),
  },
  {
    path: "/super-admin/create-area",
    name: "create-area",
    component: CreateArea
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
  {
    path: "/super-admin/show-superadmin-menu",
    name: "show-superadmin-menu",
    component: () =>
      import("../views/super-admin/ShowSuperadminMenu.vue"),
  },
  {
    path: "/super-admin/show-zones",
    name: "show-zones",
    component: () =>
      import("../views/super-admin/ShowZones.vue"),
  },
  {
    path: "/super-admin/show-flora-fauna",
    name: "show-flora-fauna",
    component: () =>
      import("../views/super-admin/ShowFloraFauna.vue"),
  },
  {
    path: "/super-admin/show-hotels",
    name: "show-hotels",
    component: () =>
      import("../views/super-admin/ShowHotels.vue"),
  },
  {
    path: "/super-admin/show-menu",
    name: "show-menu",
    component: () =>
      import("../views/super-admin/ShowMenu.vue"),
  },
  {
    path: "/super-admin/show-menu-sections",
    name: "show-menu-sections",
    component: () =>
      import("../views/super-admin/ShowMenuSections.vue"),
  },
  {
    path: "/super-admin/show-room-types",
    name: "show-room-types",
    component: () =>
      import("../views/super-admin/ShowRoomTypes.vue"),
  },
  {
    path: "/super-admin/show-rooms",
    name: "show-rooms",
    component: () =>
      import("../views/super-admin/ShowRooms.vue"),
  },
  {
    path: "/super-admin/show-hotel-halls",
    name: "show-hotel-halls",
    component: () =>
      import("../views/super-admin/ShowHotelHalls.vue"),
  },
  {
    path: "/super-admin/show-object-types",
    name: "show-object-types",
    component: () =>
      import("../views/super-admin/ShowObjectTypes.vue"),
  },
  {
    path: "/super-admin/show-objects",
    name: "show-objects",
    component: () =>
      import("../views/super-admin/ShowObjects.vue"),
  },
  {
    path: "/admin/show-admin-menu",
    name: "show-admin-menu",
    component: () =>
      import("../views/admin/ShowAdminMenu.vue"),
  },
  {
    path: "/admin/book-room",
    name: "book-room",
    component: () =>
      import("../views/admin/BookRoom.vue"),
  },
  {
    path: "/admin/book-hall",
    name: "book-hall",
    component: () =>
      import("../views/admin/BookHall.vue"),
  },
  {
    path: "/admin/book-object",
    name: "book-object",
    component: () =>
      import("../views/admin/BookObject.vue"),
  },
  {
    path: "/admin/show-history-book-room",
    name: "show-history-book-room",
    component: () =>
      import("../views/admin/ShowHistoryBookRoom.vue"),
  },
  {
    path: "/admin/show-history-book-hall",
    name: "show-history-book-hall",
    component: () =>
      import("../views/admin/ShowHistoryBookHall.vue"),
  },
  {
    path: "/admin/show-history-book-object",
    name: "show-history-book-object",
    component: () =>
      import("../views/admin/ShowHistoryBookObject.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
