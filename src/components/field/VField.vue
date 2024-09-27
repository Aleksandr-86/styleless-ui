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

    // background-color: wheat;
  }

  &__slot_before,
  &__slot_prepend,
  &__slot_append,
  &__slot_after {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &__slot_before:empty,
  &__slot_prepend:empty,
  &__slot_append:empty,
  &__slot_after:empty {
    display: none;
  }

  // &__slot_before {
  //   background-color: aqua;
  // }

  // &__slot_prepend {
  //   background-color: aquamarine;
  // }

  // &__slot_append {
  //   background-color: red;
  // }

  // &__slot_after {
  //   background-color: yellowgreen;
  // }
}
</style>
