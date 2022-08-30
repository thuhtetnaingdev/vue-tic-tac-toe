interface Clicked {
  clicked: number[];
}

interface PlayerClick {
  playerOne: Clicked;
  playerTwo: Clicked;
}

type Payload = { player: "One" | "Two"; click: number };

export default {
  state(): PlayerClick {
    return {
      playerOne: {
        clicked: [],
      },
      playerTwo: {
        clicked: [],
      },
    };
  },
  getters: {
    playerOneClicks(state: PlayerClick) {
      return state.playerOne.clicked;
    },
    playerTwoClicks(state: PlayerClick) {
      return state.playerTwo.clicked;
    },
  },
  mutations: {
    updateClicks(state: PlayerClick, { player, click }: Payload) {
      if (player === "One") {
        state.playerOne.clicked.push(click);
      } else {
        state.playerTwo.clicked.push(click);
      }
    },
    resetClicks(state: PlayerClick) {
      state.playerOne.clicked = [];
      state.playerTwo.clicked = [];
    },
  },
  actions: {
    addClicks({ commit }: { commit: any }, payload: Payload) {
      commit("updateClicks", payload);
    },
  },
};
