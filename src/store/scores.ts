interface Status {
  player: number;
  computer: number;
}

export default {
  state(): Status {
    return {
      player: 0,
      computer: 0,
    };
  },
  getters: {
    getPlayerScores(state: Status) {
      return state.player;
    },
    getComputerScores(state: Status) {
      return state.computer;
    },
  },
  mutations: {
    setPlayerWin(state: Status, num: number) {
      state.player += num;
    },
    setComputerWin(state: Status, num: number) {
      state.computer += num;
    },
  },
};
