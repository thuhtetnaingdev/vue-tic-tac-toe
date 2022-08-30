import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DialogService from "primevue/dialogservice";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import "/node_modules/primeflex/primeflex.css";
import { store } from "./store/index";
import authGuard from "./routes.guard";
import ConfirmationService from "primevue/confirmationservice";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

authGuard(router);

app.use(PrimeVue);
app.use(router);
app.use(store);
app.use(ConfirmationService);
app.use(DialogService);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.mount("#app");
