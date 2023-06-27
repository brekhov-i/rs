import { AxiosResponse } from './../../../node_modules/axios/index.d';
import { ActionTree } from "vuex";
import { IStoreRoot } from "../types/store";
import axios from "axios";

export const actions: ActionTree<IStoreRoot, IStoreRoot> = {
    async getCountries({commit}) {
        const res: AxiosResponse = await axios.get("https://namaztimes.kz/ru/api/country");

        console.log(res)

        commit("setCountries", res.data);
    }
};
