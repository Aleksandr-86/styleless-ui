<script lang="ts" setup>
// interface Props {
//   modelValue: string
// }

// defineProps<Props>()

const model = defineModel()
</script>

<template>
  <!-- Контейнер компонента -->
  <div class="field__container">
    <div class="field__slot_before"><slot name="before"></slot></div>

    <!-- Контейнер поля ввода -->
    <div class="field__input-container">
      <div class="field__slot_prepend"><slot name="prepend"></slot></div>

      <!-- Поле ввода -->
      <input v-model="model" class="field__input" />

      <div class="field__slot_append"><slot name="append"></slot></div>
    </div>

    <div class="field__slot_after"><slot name="after"></slot></div>
  </div>
</template>

<style lang="scss">
.field {
  &__container {
    align-items: center;
    overflow: hidden;
    display: flex;
    width: 100%;

    // background-color: aqua;
  }

  &__input-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

    // background-color: blueviolet;
  }

  &__input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    // background-color: red;
  }

  &__slot_before:empty,
  &__slot_prepend:empty,
  &__slot_append:empty,
  &__slot_after:empty {
    display: none;
  }

  &__slot_after {
    min-width: fit-content;
  }

  // &__slot_after {
  // overflow: visible;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // }
}
</style>
