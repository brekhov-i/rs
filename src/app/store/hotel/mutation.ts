import { IHotelState } from "@/app/types/store";
import { MutationTree } from "vuex";

export const mutations: MutationTree<IHotelState> = {
    setChangeHotel(store, hotel) {
        store.changeHotels.push(hotel);
    }
};
