import { createStore } from "vuex";
import clicked from "./clicked";
import { player, playersScorces } from "./player";
import win from "./win";

export const store = createStore({
  modules: {
    player,
    playersScorces,
    win,
    clicked: clicked,
  },
});
