type Player = "One" | "Two";

interface Win {
  draw?: boolean;
  win?: boolean | null;
  modal: boolean;
}

interface Commit {
  commit: (mut: string, playload?: any) => void;
}

interface Status {
  status: Win;
}

export default {
  state(): Status {
    return {
      status: {
        draw: false,
        win: null,
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
    updateWin(state: Status, win: boolean) {
      state.status.win = win;
    },
    updateDraw(state: Status) {
      state.status.draw = true;
    },
    openModal(state: Status) {
      state.status.modal = true;
    },
    reset(state: Status) {
      state.status.draw = false;
      state.status.win = null;
      state.status.modal = false;
    },
  },
  actions: {
    updateStatus(
      { commit }: Commit,
      { win, draw }: { win?: boolean; draw: boolean }
    ) {
      if (draw) {
        commit("updateDraw");
      } else {
        if (win) {
          commit("setPlayerWin", 1);
        } else {
          commit("setComputerWin", 1);
        }
        commit("updateWin", win);
      }
      commit("openModal");
    },
  },
};
