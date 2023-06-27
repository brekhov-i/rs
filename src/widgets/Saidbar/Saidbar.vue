<template>
  <div :class="['saidbar', props.classNames]">
    <CountryFilter v-model="filters.countries" @updateFilter="filters.countries = $event" />
    <TypeFilter v-model="filters.types" @updateFilter="filters.types = $event" />
    <ColRatingFilter v-model="filters.rates" @updateFilter="filters.rates = $event" />
    <CountReview v-model="filters.colReviews" @updateFilter="filters.colReviews = $event" />
    <PriceFilter v-model="filters.price" @updateFilter="filters.price = $event" />
    <Button label="Применить фильтр" class="bg-[#6A53F5] w-full py-3 border-round-2xl"  @click="enterFilters(filters)"/>
    <Button icon="pi pi-times text-900" label="Очистить фильтр"
      class="bg-white border-grey-light text-black w-full flex justify-center shadow-transparent active:!bg-white active:!text-black active:!shadow-none active:!border-grey-dark hover:!bg-grey-light hover:!text-black hover:!shadow-none hover:!border-grey-dark" :pt="{
        label: { class: 'flex-none' }
      }" @click="clearFilter();" />
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import CountryFilter from "@/entities/CountryFilter/CountryFilter.vue";
import TypeFilter from "@/entities/TypeFilter/TypeFilter.vue";
import ColRatingFilter from "@/entities/ColRatingFilter/ColRatingFilter.vue";
import CountReview from "@/entities/CountReview/CountReview.vue";
import PriceFilter from "@/entities/PriceFilter/PriceFilter.vue";
import { Ref, ref } from "vue";
import { IFilters } from "@/app/types";

const props = defineProps<{
  classNames?: string[] | string;
}>();

const emits = defineEmits<{
  (e: "updateFilters", value: IFilters | null): void;
}>()

const filters: Ref<IFilters> = ref({
  countries: [],
  types: [],
  rates: [],
  colReviews: 0,
  price: {
    min: 0,
    max: 200000,
  },
});

const clearFilter = () => {
  filters.value = {
    countries: [],
    types: [],
    rates: [],
    colReviews: 0,
    price: {
      min: 0,
      max: 200000,
    },
  }
}

const enterFilters = (value: IFilters) => {
  emits('updateFilters', value)
}
</script>

<style lang="scss" scoped>
.saidbar {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 25px;
}
</style>
