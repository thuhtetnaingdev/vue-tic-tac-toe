import { createStore } from "vuex";
import clicked from "./clicked";
import user from "./user";
import win from "./win";
import scores from "./scores";

export const store = createStore({
  modules: {
    win,
    clicked,
    user,
    scores
  },
});
