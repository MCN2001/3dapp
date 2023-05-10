import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    smallScreen: window.innerWidth < 820,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
