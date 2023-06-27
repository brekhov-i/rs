<template>
  <div class="colRatingFilter">
    <div class="colRatingFilter__title">Количество звезд</div>
    <div class="colRatingFilter__list">
      <Checkbox v-for="(rate, index) in colRating" :key="rate" :value="index + 1" :label="rate" :classList="[]"
        v-model="model" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "@/shared/ui/Checkbox/Checkbox.vue";
import { Ref, computed, ref } from "vue";

const props = defineProps<{
  modelValue: number[]
}>()
const emits = defineEmits<{
  (e: "updateFilter", value: number[]): void;
}>();
const colRating: Ref<string[]> = ref<string[]>([
  "1 звезда",
  "2 звезды",
  "3 звезды",
  "4 звезды",
  "5 звезд",
]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("updateFilter", value);
  },
});
</script>

<style lang="scss" scoped>
.colRatingFilter {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__title {
    color: #3a3a3a;
    font-size: 16px;
    font-family: PT Sans;
    font-weight: 700;
    margin-bottom: 14px;
  }

  &__list {
    width: 100%;
    max-height: 202px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #eaeaea;
    padding: 24px 20px;
    row-gap: 12px;
    border-radius: 4px;
  }
}
</style>
