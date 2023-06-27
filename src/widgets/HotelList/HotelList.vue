<template>
    <div class="hotelList">
        <div class="hotelList__items flex flex-col gap-3.5 mb-10">
            <CartHotel v-for="hotel in viewHotels()" :key="hotel.name" :dataHotel="hotel" />
        </div>
        <div class="hotelList__pagination" v-if="props.hotels.length > 3">
            <Paginator :rows="3" :totalRecords="hotels.length" @page="numberPage = $event.page" :pt="{
                pages: { class: '!flex' },
                pageButton: { class: '!flex !w-10 !h-10 !min-h-[48px] !rounded-sm' }
            }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IHotel } from "@/app/types/store";
import CartHotel from "@/entities/CartHotel/CartHotel.vue";
import Paginator from "primevue/paginator";
import { Ref, ref } from "vue";

const props = defineProps<{
    hotels: IHotel[]
}>()

const colRows: Ref<number> = ref<number>(3);
const numberPage: Ref<number> = ref<number>(0);

const viewHotels = () => {
    console.log(numberPage.value)
    const arrHotels = props.hotels;
    return arrHotels.slice(numberPage.value * colRows.value, colRows.value * (numberPage.value + 1));
}
</script>