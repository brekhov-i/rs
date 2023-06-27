<template>
  <div class="countReview">
    <div class="countReview__title">Количество отзывов (от)</div>
    <div class="countReview__field">
      <div class="field__after" v-if="countReview !== ''">от</div>
      <input
        type="number"
        v-model="countReview"
        placeholder="Например, от 10"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const emits = defineEmits<{
  (e: "updateFilter", value: number): void;
}>();
const countReview: Ref<string> = ref<string>("");

watch(countReview, (newV) => {
  emits("updateFilter", Number(newV));
});
</script>

<style lang="scss" scoped>
.countReview {
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

  &__field {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .field__after {
      font-size: 16px;
      font-family: "PTSans", sans-serif;
      margin-right: 14px;
    }

    input {
      width: 100%;
      border: none;
      font-size: 16px;
      font-family: "PTSans", sans-serif;
      outline: none;

      &::placeholder {
        color: #868686;
        font-size: 16px;
        font-family: "PTSans", sans-serif;
      }
    }
  }
}
</style>
