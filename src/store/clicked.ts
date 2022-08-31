interface Clicked {
  clicked: number[];
}

interface PlayerClick {
  playerOne: Clicked;
  computer: Clicked;
}

type Payload = { player: boolean; click: number };

export default {
  state(): PlayerClick {
    return {
      playerOne: {
        clicked: [],
      },
      computer: {
        clicked: [],
      },
    };
  },
  getters: {
    playerOneClicks(state: PlayerClick) {
      return state.playerOne.clicked;
    },
    computerClicks(state: PlayerClick) {
      return state.computer.clicked;
    },
    allClicks(state: PlayerClick) {
      return [...state.playerOne.clicked, ...state.computer.clicked];
    },
  },
  mutations: {
    updateClicks(state: PlayerClick, { click, player }: Payload) {
      if (player) {
        state.playerOne.clicked.push(click);
      } else {
        state.computer.clicked.push(click);
      }
    },
    resetClicks(state: PlayerClick) {
      state.playerOne.clicked = [];
      state.computer.clicked = [];
    },
  },
  actions: {
    addClicks({ commit }: { commit: any }, payload: Payload) {
      commit("updateClicks", payload);
    },
  },
};
