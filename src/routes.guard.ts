const store = () => localStorage.getItem("username");

export default function authGuard(router: any) {
  router.beforeEach((to: any, from: any, next: any) => {
    if (to.path !== "/login" && !store()) return next("/login");
    if (to.path === "/login" && store()) return next("/");
    return next();
  });
}
