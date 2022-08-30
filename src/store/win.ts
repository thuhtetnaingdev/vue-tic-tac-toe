type Player = "One" | "Two";

interface Win {
  draw?: boolean;
  win?: boolean;
  player: null | Player;
  modal: boolean;
}

interface Commit {
  commit: (mut: string, player?: Player) => void;
}

interface Status {
  status: Win;
}

export default {
  state(): Status {
    return {
      status: {
        draw: false,
        win: false,
        player: null,
        modal: false,
      },
    };
  },
  getters: {
    getWinState(state: Status) {
      return state.status.win;
    },
    getDrawState(state: Status) {
      return state.status.draw;
    },
  },
  mutations: {
    updateWin(state: Status) {
      state.status.win = true;
    },
    updateDraw(state: Status) {
      state.status.draw = true;
    },
    updatePlayer(state: Status, player: Player) {
      state.status.player = player;
    },
    openModal(state: Status) {
      state.status.modal = true;
    },
    reset(state: Status) {
      state.status.draw = false;
      state.status.win = false;
      state.status.player = null;
      state.status.modal = false;
    },
  },
  actions: {
    updateStatus(
      { commit }: Commit,
      { win, player }: { win: boolean; player: Player }
    ) {
      if (win) {
        commit("updateWin");
        commit("updatePlayer", player);
        commit("openModal");
      } else {
        commit("updateDraw");
        commit("openModal");
      }
    },
  },
};
