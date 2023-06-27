import { IHotelState, IStoreRoot } from "@/app/types/store";
import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutation";

const state: IHotelState = {
  hotels: [
    {
      name: "Marina Inn",
      country: "Греция",
      address: "Фалираки, Родос, Греция",
      stars: 4,
      type: "Отель",
      description:
        "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с террасой и сауна. Из номеров открывается вид на море или на средневековый город.",
      services: [
        "Пляж",
        "Кондиционер",
        "Открытый бассейн",
        "Бесплатная парковка",
        "Бесплатный WiFi",
        "Вид на море",
        "Бесплатный завтрак",
      ],
      min_price: 2789.0,
      currency: "RUR",
      rating: 4.5,
      reviews_amount: 18,
      last_review:
        "Отличное расположение. Вкусный завтрак. Отдыхали с детьми - все понравилось.",
    },
    {
      name: "Mondrian Suites",
      country: "Греция",
      address: "Фалираки, Родос, Греция",
      stars: 5,
      type: "Апартаменты",
      description:
        "Из окон открывается вид на город.К услугам гостей номера-студио с балконом и чайником в 2,7 км от пляжа.",
      services: [
        "Пляж",
        "Кондиционер",
        "Открытый бассейн",
        "Платная парковка",
        "Бесплатный WiFi",
        "Вид на море",
      ],
      min_price: 3245.2,
      currency: "RUR",
      rating: 5,
      reviews_amount: 4,
      last_review:
        "Потрясающее место, в номере есть все необходимое. Красивый вид на море.",
    },
    {
      name: "Sunny Appartments",
      country: "Греция",
      address: "Родос, Родос, Греция",
      stars: 2,
      type: "Апартаменты",
      description:
        "Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в распоряжении гостей тостер и чайник.",
      services: [
        "Пляж",
        "Кондиционер",
        "Бесплатная парковка",
        "Бесплатный WiFi",
      ],
      min_price: 1153.0,
      currency: "RUR",
      rating: 2.4,
      reviews_amount: 36,
      last_review:
        "Бассейн очень маленький. Кормят невкусно. Больше не поедем.",
    },
    {
      name: "Super All Inclusive Hotel",
      country: "Греция",
      address: "Родос, Родос, Греция",
      stars: 4,
      type: "Отель",
      description:
        "Все номера оснащены телевизором с плоским экраном. Из некоторых номеров открывается вид на море или город.",
      services: [
        "Пляж",
        "Кондиционер",
        "Открытый бассейн",
        "Бесплатный WiFi",
        "Вид на море",
        "Бесплатный завтрак",
      ],
      min_price: 3689.0,
      currency: "RUR",
      rating: 4.1,
      reviews_amount: 14,
      last_review:
        "Недалёко от пляжа и старого города, вокруг много разных магазинчиков",
    },
    {
      name: "Adams Hotel",
      country: "Греция",
      address: "Родос, Родос, Греция",
      stars: 3,
      type: "Отель",
      description:
        "Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.",
      services: [
        "Пляж",
        "Кондиционер",
        "Открытый бассейн",
        "Бесплатная парковка",
        "Бесплатный WiFi",
        "Бесплатный завтрак",
      ],
      min_price: 1896.0,
      currency: "RUR",
      rating: 0,
      reviews_amount: 0,
      last_review: "",
    },
  ],
  changeHotels: []
};

const namespaced = true;

export const hotel: Module<IHotelState, IStoreRoot> = {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
