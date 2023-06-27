import Vuex, { StoreOptions } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { hotel } from "./hotel";
import { IStoreRoot } from "../types/store";

const store: StoreOptions<IStoreRoot> = {
  state: {
    version: "1.0.0",
    countries: [],
  },
  getters,
  mutations,
  actions,
  modules: {
    hotel,
  },
};

export default new Vuex.Store<IStoreRoot>(store);
