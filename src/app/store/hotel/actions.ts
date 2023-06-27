import { IHotel, IHotelState, IStoreRoot } from "@/app/types/store";
import { ActionTree } from "vuex";

export const actions: ActionTree<IHotelState, IStoreRoot> = {
    changeHotel({commit}, hotel: IHotel) {
        commit("setChangeHotel", hotel);
    }
};
