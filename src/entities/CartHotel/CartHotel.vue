<template>
    <div class="cartHotel grid grid-cols-12 gap-11 border border-grey-light rounded p-6">
        <div class="cartHotel__content col-span-9 ">
            <div class="cartHotel__title font-bold text-xl font-sans mb-2">{{ dataHotel.name }}</div>
            <div class="cartHotel__info flex items-center mb-4">
                <div class="cartHotel__rating mr-4">
                    <Rating v-model="modelRating" :cancel="false" readonly :pt='{
                        onIcon: { class: "!text-yellow" },
                        offIcon: { class: "!text-grey" },
                    }' />
                </div>
                <div class="cartHotel__type text-grey-dark text-sm">{{ dataHotel.type }}</div>
                <span class="dot rounded w-1 h-1 bg-grey-dark ml-1.5 mr-2"></span>
                <div class="cartHotel__colReview text-grey-dark text-sm mr-3.5">{{ dataHotel.reviews_amount }} отзыва</div>
                <div class="cartHotel__country flex items-center">
                    <svg class="mr-2" width="10" height="15" viewBox="0 0 10 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.25 1.54487C3.19201 1.54487 1.53125 3.24822 1.53125 5.35897C1.53125 7.1709 2.49117 9.2263 3.48319 10.8576C3.97541 11.667 4.46803 12.3601 4.83765 12.8508C5.00317 13.0706 5.14381 13.2495 5.2484 13.3797C5.35327 13.2472 5.49471 13.0648 5.66135 12.8407C6.03115 12.3434 6.52399 11.6424 7.01642 10.8276C8.00932 9.18467 8.96875 7.12966 8.96875 5.35897C8.96875 3.24822 7.30799 1.54487 5.25 1.54487ZM5.25 13.8045C5.05031 13.9841 5.05026 13.9841 5.0502 13.984L5.04931 13.983L5.04687 13.9801L5.03776 13.9693C5.02984 13.96 5.01826 13.9462 5.00327 13.9282C4.97329 13.8922 4.92965 13.8393 4.87431 13.7708C4.76364 13.6339 4.60607 13.4347 4.41724 13.184C4.03978 12.6828 3.53631 11.9746 3.03243 11.146C2.03227 9.50127 1 7.33391 1 5.35897C1 2.94729 2.89861 1 5.25 1C7.60139 1 9.5 2.94729 9.5 5.35897C9.5 7.29341 8.46725 9.46116 7.46796 11.1147C6.96429 11.9481 6.46103 12.6638 6.08376 13.1711C5.89502 13.4249 5.73755 13.6269 5.62696 13.7659C5.57166 13.8353 5.52806 13.889 5.49812 13.9256C5.48315 13.9439 5.47159 13.9579 5.46369 13.9674L5.4546 13.9783L5.45218 13.9812L5.4513 13.9822C5.45123 13.9823 5.45119 13.9824 5.25 13.8045ZM5.25 13.8045L5.45119 13.9824C5.40099 14.0421 5.32802 14.0766 5.25114 14.0769C5.17426 14.0773 5.10101 14.0434 5.05031 13.9841L5.25 13.8045Z"
                            fill="#3A3A3A" />
                        <path
                            d="M5.25 13.8045C5.05031 13.9841 5.05026 13.9841 5.0502 13.984L5.04931 13.983L5.04687 13.9801L5.03776 13.9693C5.02984 13.96 5.01826 13.9462 5.00327 13.9282C4.97329 13.8922 4.92965 13.8393 4.87431 13.7708C4.76364 13.6339 4.60607 13.4347 4.41724 13.184C4.03978 12.6828 3.53631 11.9746 3.03243 11.146C2.03227 9.50127 1 7.33391 1 5.35897C1 2.94729 2.89861 1 5.25 1C7.60139 1 9.5 2.94729 9.5 5.35897C9.5 7.29341 8.46725 9.46116 7.46796 11.1147C6.96429 11.9481 6.46103 12.6638 6.08376 13.1711C5.89502 13.4249 5.73755 13.6269 5.62696 13.7659C5.57166 13.8353 5.52806 13.889 5.49812 13.9256C5.48315 13.9439 5.47159 13.9579 5.46369 13.9674L5.4546 13.9783L5.45218 13.9812L5.4513 13.9822C5.45123 13.9823 5.45119 13.9824 5.25 13.8045ZM5.25 13.8045L5.45119 13.9824C5.40099 14.0421 5.32802 14.0766 5.25114 14.0769C5.17426 14.0773 5.10101 14.0434 5.05031 13.9841L5.25 13.8045ZM1.53125 5.35897C1.53125 3.24822 3.19201 1.54487 5.25 1.54487C7.30799 1.54487 8.96875 3.24822 8.96875 5.35897C8.96875 7.12966 8.00932 9.18467 7.01642 10.8276C6.52399 11.6424 6.03115 12.3434 5.66135 12.8407C5.49471 13.0648 5.35327 13.2472 5.2484 13.3797C5.14381 13.2495 5.00317 13.0706 4.83765 12.8508C4.46803 12.3601 3.97541 11.667 3.48319 10.8576C2.49117 9.2263 1.53125 7.1709 1.53125 5.35897Z"
                            stroke="#3A3A3A" stroke-width="0.4" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.094 4.74805C4.40055 4.44151 4.81632 4.26929 5.24985 4.26929C5.68338 4.26929 6.09915 4.44151 6.4057 4.74805C6.71225 5.0546 6.88447 5.47038 6.88447 5.9039C6.88447 6.33743 6.71225 6.7532 6.4057 7.05975C6.09915 7.3663 5.68338 7.53852 5.24985 7.53852C4.81632 7.53852 4.40055 7.3663 4.094 7.05975C3.78745 6.7532 3.61523 6.33743 3.61523 5.9039C3.61523 5.47038 3.78745 5.0546 4.094 4.74805ZM5.24985 4.73632C4.94019 4.73632 4.64321 4.85933 4.42424 5.0783C4.20528 5.29726 4.08227 5.59424 4.08227 5.9039C4.08227 6.21356 4.20528 6.51054 4.42424 6.72951C4.64321 6.94847 4.94019 7.07148 5.24985 7.07148C5.55951 7.07148 5.85649 6.94847 6.07546 6.72951C6.29442 6.51054 6.41743 6.21356 6.41743 5.9039C6.41743 5.59424 6.29442 5.29726 6.07546 5.0783C5.85649 4.85933 5.55951 4.73632 5.24985 4.73632Z"
                            fill="#3A3A3A" stroke="#3A3A3A" stroke-width="0.4" stroke-miterlimit="10"
                            stroke-linejoin="round" />
                    </svg>
                    {{ dataHotel.country }}
                </div>
            </div>
            <p class="cartHotel__description font-sans text-base">{{ dataHotel.description }}</p>
        </div>
        <div class="cartHotel__right col-span-3 flex flex-col items-end">
            <div class="cartHotel__price font-bold text-2xl">{{ Math.floor(dataHotel.min_price) }} ₽</div>
            <small class="cartHotel__priceDesc text-grey-dark text-xs">Цена за 1 ночь</small>
            <Button :label="isChanged ? 'Забронировано' : 'Забронировать'"
                :class="[isChanged ? 'bg-primary-light text-primary shadow-transparent border-primary focus:shadow-primary-300 hover:!bg-primary-300 hover:!text-primary hover:!border-primary' : 'bg-violet-light text-violet hover:!bg-violet-300 hover:!text-violet', 'mt-auto']"
                :pt="{ label: { class: 'font-sans font-normal ml-2' } }" @click="changeHotel(dataHotel)">
                <template #icon>
                    <svg v-if="!isChanged" class="fill-violet hover:fill-violet-light" width="15" height="12"
                        viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.575 0C0.70957 0 0 0.810937 0 1.8V10.2C0 11.1844 0.70957 12 1.575 12H13.125C13.9904 12 14.7 11.1891 14.7 10.2V1.8C14.7 0.810937 13.9863 0 13.125 0H1.575ZM1.575 1.2H13.125C13.4203 1.2 13.65 1.4625 13.65 1.8V2.4H1.05V1.8C1.05 1.45781 1.27559 1.2 1.575 1.2ZM1.05 3.6H13.65V10.2C13.65 10.5375 13.4203 10.8 13.125 10.8H1.575C1.27969 10.8 1.05 10.5375 1.05 10.2V3.6Z" />
                    </svg>
                    <svg v-else class="fill-primary hover:fill-primary-300" width="14" height="12" viewBox="0 0 14 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.8553 1.04601C13.0019 1.13226 13.0441 1.31064 12.9496 1.44442L6.29308 10.868C6.24286 10.9391 6.16095 10.9864 6.06906 10.9975C5.97717 11.0086 5.88458 10.9823 5.81584 10.9255L1.10396 7.03576C0.974614 6.92898 0.9646 6.74672 1.08159 6.62867C1.19858 6.51062 1.39828 6.50148 1.52762 6.60826L5.96374 10.2704L12.4188 1.13208C12.5133 0.998296 12.7087 0.959762 12.8553 1.04601Z"
                            fill="#00BB6D" stroke="#00BB6D" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </template>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IHotel } from "@/app/types/store";
import Button from "primevue/button";
import Rating from "primevue/rating";
import { Ref, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps<{
    dataHotel: IHotel
}>()

const changedHotel: Ref<IHotel | null> = ref<IHotel | null>(null);
const isChanged: Ref<boolean> = ref<boolean>(false);

const changeHotel = (value: IHotel) => {
    if (isChanged.value) return;
    changedHotel.value = value;
    isChanged.value = true;
    store.dispatch("hotel/changeHotel", value);
}

const modelRating = computed({
    get() {
        return props.dataHotel.rating;
    },
    set(value) {
        console.log(value);
    }
})
</script>