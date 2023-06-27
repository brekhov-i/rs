<template>
  <div class="homePage">
    <div class="container">
      <div class="homePage__wrapper">
        <Saidbar classNames="homePage__saidbar" @updateFilters="filters = $event" />
        <div class="homePage__main pt-[38px]">
          <NotFound v-if="hotels.length === 0" @cancelFilter="cancelFilter()"/>
          <HotelList v-else :hotels="hotels" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IFilters } from "@/app/types";
import { IHotel } from "@/app/types/store";
import Saidbar from "@/widgets/Saidbar/Saidbar.vue";
import HotelList from "@/widgets/HotelList/HotelList.vue";
import NotFound from "@/entities/NotFound/NotFound.vue";
import { ComputedRef, Ref, computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const filters: Ref<IFilters | null> = ref<IFilters | null>(null)
const hotels: ComputedRef<IHotel[]> = computed<IHotel[]>(() => store.getters['hotel/viewFilteredHotels'](filters.value));
// const hotels: IHotel[] = [];

watch(filters, newv => {
  console.log(newv)
})

const cancelFilter = () => {
  filters.value = null;
}

onMounted(() => {
  store.dispatch("getCountries");
});
</script>

<style lang="scss">
.homePage {
  width: 100%;
  height: 100vh;

  &__wrapper {
    display: grid;
    grid-template-columns: 325px 1fr;
    grid-column-gap: 40px;
    padding: 50px 0;
  }

  &__main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 15px;
  }
}
</style>
