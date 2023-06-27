<template>
  <div class="priceFilter">
    <div class="priceFilter__title">Цена</div>
    <div class="priceFilter__fields">
      <label for="minPrice" class="priceFilter__field">
        <span>от</span>
        <input type="number" id="minPrice" min="0" max="200000" v-model="value[0]" />
        <span>₽</span>
      </label>
      <hr />
      <label for="maxPrice" class="priceFilter__field">
        <span>от</span>
        <input type="number" id="maxPrice" :min="0" :max="200000" v-model="value[1]" />
        <span>₽</span>
      </label>
    </div>
    <div class="priceFilter__slider">
      <Slider v-model="value" range class="w-full" :min="0" :max="200000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "primevue/slider";
import { Ref, ref, watch } from "vue";

const emits = defineEmits<{
  (e: "updateFilter", value: {min: number, max: number}): void;
}>()
const value: Ref<number[]> = ref<number[]>([0, 200000])

watch(value, (newV) => {
  emits("updateFilter", {
    min: newV[0],
    max: newV[1]
  })
})
</script>

<style lang="scss" scoped>
.priceFilter {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__title {
    color: #3A3A3A;
    font-size: 16px;
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    margin-bottom: 14px;
  }

  &__fields {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    grid-gap: 10px;
    align-items: center;
    margin-bottom: 30px;

    hr {
      width: 100%;
      height: 1px;
      border: none;
      background-color: #C4C4C4;
      ;
    }
  }

  &__field {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    padding: 15px 20px;

    span {
      color: #868686;
      font-size: 16px;
      font-family: "PTSans", sans-serif;
    }

    input {
      border: none;
      margin: 0 10px;
      font-size: 16px;
      font-family: "PTSans", sans-serif;
    }
  }

  &__slider {
    width: 100%;
    height: auto;
  }
}
</style>

