import { createStore } from "vuex";

let playerName: null | string = null;

const username = localStorage.getItem("username");
if (username) {
  playerName = username;
}

interface WinnsType {
  date: string;
  scorce: string;
}

interface PlayersScorces {
  playerOne: WinnsType[];
  playerTwo: WinnsType[];
}

export const player = {
  state(): { playerName: string | null } {
    return {
      playerName,
    };
  },
};

export const playersScorces = {
  state(): PlayersScorces {
    return {
      playerOne: [],
      playerTwo: [],
    };
  },
};
