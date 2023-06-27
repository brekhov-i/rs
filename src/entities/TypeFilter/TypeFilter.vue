<template>
  <div class="typeFilter">
    <div class="typeFilter__title">Тип</div>
    <div class="typeFilter__list">
      <Checkbox v-for="country in types" :key="country" :label="country" v-model="model" :value="country"
        :classList="['typeFilter__check']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "@/shared/ui/Checkbox/Checkbox.vue";
import { Ref, ref, computed } from "vue";

const props = defineProps<{
  modelValue: string[]
}>();
const emits = defineEmits<{
  (e: "updateFilter", value: string[]): void;
}>();
const types: Ref<string[]> = ref<string[]>(["Апартаменты", "Отель"]);

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
.typeFilter {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__title {
    color: #3a3a3a;
    font-size: 16px;
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    margin-bottom: 14px;
  }

  &__list {
    width: 100%;
    height: auto;
    background-color: #fafafa;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 4px;
  }

  &__check {
    width: 100%;
    padding: 16px 0;
    justify-content: flex-start;

    &:first-child {
      border-bottom: 1px solid #eaeaea;
    }
  }
}
</style>
