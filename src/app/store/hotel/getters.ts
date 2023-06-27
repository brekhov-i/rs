import { IFilters } from "@/app/types";
import { IHotel, IHotelState, IStoreRoot } from "@/app/types/store";
import { GetterTree } from "vuex";

export const getters: GetterTree<IHotelState, IStoreRoot> = {
  hotels: (state) => state.hotels,
  viewFilteredHotels: (state) => (filters: IFilters | null) => {
    console.log(filters);
    if (!filters) return state.hotels;

    const arrHotel: IHotel[] = state.hotels
      .filter((hotel) => {
        if (filters.countries.length === 0) return true;
        return filters.countries.includes(hotel.country);
      })
      .filter((hotel) => {
        if (filters.types.length === 0) return true;
        return filters.types.includes(hotel.type);
      })
      .filter((hotel) => {
        if (filters.rates.length === 0) return true;
        return filters.rates.includes(hotel.stars);
      })
      .filter((hotel) => {
        if (
          hotel.min_price > filters.price.min &&
          hotel.min_price < filters.price.max
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((hotel) => {
        if (filters.colReviews === 0) return true;
        return filters.colReviews >= hotel.reviews_amount;
      });
    return arrHotel;
  },
};
