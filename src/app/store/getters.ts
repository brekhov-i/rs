import { GetterTree } from "vuex";
import { IStoreRoot } from "../types/store";

export const getters: GetterTree<IStoreRoot, IStoreRoot> = {
  countries: (state) => state.countries,
  getCountriesById: (state) => (id: number) => state.countries[id],
};
