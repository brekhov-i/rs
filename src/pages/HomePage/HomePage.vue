<template>
  <div class="homePage">
    <div class="container">
      <div class="homePage__wrapper">
        <Saidbar classNames="homePage__saidbar" @updateFilters="filters = $event"/>
        <div class="homePage__main">
          <CartHotel v-for="hotel in hotels" :key="hotel.name" :dataHotel="hotel"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IFilters } from "@/app/types";
import { IHotel } from "@/app/types/store";
import CartHotel from "@/entities/CartHotel/CartHotel.vue";
import Saidbar from "@/widgets/Saidbar/Saidbar.vue";
import { ComputedRef, Ref, computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const filters: Ref<IFilters | null> = ref<IFilters | null>(null)
const hotels: ComputedRef<IHotel[]> = computed<IHotel[]>(() => store.getters['hotel/viewFilteredHotels'](filters.value));

watch(filters, newv => {
  console.log(newv)
})

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
