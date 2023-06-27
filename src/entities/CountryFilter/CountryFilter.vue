<template>
  <div class="countryFilter">
    <div class="countryFilter__title">Страна</div>
    <div class="countryFilter__input">
      <div class="icon">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="6.25" stroke="black" stroke-width="1.5" />
          <rect x="10.5" y="11.8" width="1.5" height="7" rx="0.75" transform="rotate(-45 10.5 11.8)" fill="black" />
        </svg>
      </div>
      <input type="text" v-model="filterInput" placeholder="Поиск стран" />
    </div>
    <div class="countryFilter__list">
      <p class="list__text" v-if="getCountry.length === 0">К сожалению, по вашему запросу ничего не найдено :(</p>
      <Checkbox v-for="country in getCountry" :key="country" :label="country" v-model="model" :value="country" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "@/shared/ui/Checkbox/Checkbox.vue";
import { ComputedRef, Ref, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps<{
  modelValue: string[];
}>()
const emits = defineEmits<{
  (e: "updateFilter", value: string[]): void;
}>();
const countries: ComputedRef<string[]> = computed<string[]>(
  () => store.getters["countries"]
);
const filterInput: Ref<string> = ref<string>("");

const getCountry: ComputedRef<string[]> = computed<string[]>(() => {
  if (filterInput.value === "") return countries.value;

  const newArr = countries.value.filter((country) =>
    country.toLowerCase().includes(filterInput.value.toLowerCase())
  );

  return newArr;
});

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
.countryFilter {
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

  &__input {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    margin-bottom: 10px;

    .icon {
      min-width: 16px;
      width: 16px;
      height: 16px;
      margin-right: 10px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    input {
      border: none;
      width: 100%;
      height: 100%;
      outline: none;

      &::placeholder {
        color: #868686;
        font-size: 16px;
        font-family: "PTSans", sans-serif;
      }
    }
  }

  &__list {
    width: 100%;
    min-height: 202px;
    max-height: 202px;
    overflow-y: scroll;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #eaeaea;
    padding: 24px 20px;
    row-gap: 12px;
    border-radius: 4px;

    .list__text {
      align-self: center;
      justify-self: center;
      margin: auto 0;
      color: #868686;
      text-align: center;
      font-size: 16px;
      font-family: PT Sans;
      line-height: 24px;
    }
  }
}
</style>
