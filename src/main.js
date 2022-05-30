import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const cors = require('cors');
const corsConfig = {
  credentials: true,
  origin: true,
};

const app = createApp(App);
app.use(store);
app.use(router);
app.use(cors(corsConfig));
app.mount("#app");
