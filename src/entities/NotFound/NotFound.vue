<template>
    <div class="notFound w-full py-14 flex flex-col justify-center items-center border border-grey-light rounded-2xl">
        <img src="@/shared/assets/image/notFound.svg" alt="" class="mb-9">
        <div class="notFound__title font-bold text-lg mb-2">По данным параметрам ничего не найдено</div>
        <div class="notFound__text text-grey-dark text-base text-center max-w-[330px] mb-7">Попробуйте изменить параметры
            фильтрации
            или вернуться в общий каталог</div>
        <Button label="Очистить фильтр" @click="cancelFilter()"
            class="bg-violet-light w-[240px] border-none text-violet hover:!text-white" />
    </div>
</template>

<script setup lang="ts">
import Button from "primevue/button"

const emits = defineEmits<{
    (e: 'cancelFilter'): void;
}>()
const cancelFilter = () => {
    emits('cancelFilter');
}
</script>