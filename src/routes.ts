import Play from "./pages/Play.vue";
import Login from "./pages/Login.vue";

export default [
  { path: "/", component: Play, name: 'home' },
  { path: "/login", component: Login, name: 'login' },
];
