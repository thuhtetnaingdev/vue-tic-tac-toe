import { createRouter } from "vue-router";

export default function authGuard(store: any) {
  store.beforeEach((to: any, from: any, next: any) => {
    console.log(to);
    next();
  });
}
