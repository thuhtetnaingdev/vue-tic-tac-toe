const store = () => localStorage.getItem("username");
console.log(store);

export default function authGuard(router: any) {
  router.beforeEach((to: any, from: any, next: any) => {
    console.log(to.path);
    if (to.path !== "/login" && !store()) return next("/login");
    if (to.path === "/login" && store()) return next("/");
    return next();
  });
}
