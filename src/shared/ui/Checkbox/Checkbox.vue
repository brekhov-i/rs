<template>
  <label :class="['checkbox', props.classList]" :for="props.label">
    <input
      type="checkbox"
      :name="props.label"
      :id="props.label"
      v-model="model"
      :value="props.value"
    />
    <div class="checkbox__check">
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.91558 1.02761C8.00109 1.07936 8.02572 1.18638 7.97059 1.26665L4.08763 6.92077C4.05833 6.96343 4.01055 6.99186 3.95695 6.99851C3.90335 7.00516 3.84934 6.98937 3.80924 6.95532L1.06064 4.62146C0.985191 4.55739 0.97935 4.44803 1.0476 4.3772C1.11584 4.30637 1.23233 4.30089 1.30778 4.36496L3.89551 6.56223L7.66094 1.07925C7.71607 0.998978 7.83008 0.975857 7.91558 1.02761Z"
          fill="white"
          stroke="white"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="checkbox__label">{{ props.label }}</div>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string[] | boolean | number[];
  value: string | boolean | number;
  label: string;
  classList?: string[];
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string[] | boolean | number[]): void;
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  width: max-content;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;

    &:checked ~ .checkbox__check {
      background-color: #00bb6d;
      border-color: #00bb6d;
      svg {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__check {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid #cdcdcd;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    svg {
      opacity: 0;
      visibility: hidden;
    }
  }

  &__label {
    color: #3a3a3a;
    font-size: 16px;
    font-family: "PTSans", sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
