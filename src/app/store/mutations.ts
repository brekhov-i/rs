import { MutationTree } from "vuex";
import { IStoreRoot } from "../types/store";

export const mutations: MutationTree<IStoreRoot> = {
    setCountries(state, countries: object) {
        const countryArr: string[] = Object.values(countries);
        state.countries = countryArr;
    }
};
