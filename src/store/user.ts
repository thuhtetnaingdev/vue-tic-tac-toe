let username: null | string = null;

interface Username {
  username: string;
}

const getFromLocalStorage = localStorage.getItem("username");
if (getFromLocalStorage) {
  username = getFromLocalStorage;
}

export default {
  state() {
    return {
      username,
    };
  },
  getters: {
    getUsername(state: Username) {
      return state.username;
    },
  },
  mutations: {
    setUsername(state: Username, name: string) {
      state.username = name;
    },
    setLocalStorage(_state: Username, name: string) {
      localStorage.setItem("username", name);
    },
  },
  actions: {
    updateUsername({ commit }: any, name: string) {
      commit("setUsername", name);
      commit("setLocalStorage", name);
    },
  },
};
