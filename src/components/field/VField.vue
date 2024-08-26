<script lang="ts" setup>
export interface Some {
  a: number
}
</script>

<template>
  <!-- Контейнер компонента -->
  <div class="field__container">
    <slot name="before"></slot>

    <!-- Контейнер поля ввода -->
    <div class="field__input-container">
      <slot name="prepend"></slot>
      <input class="field__input" />
      <slot name="append"></slot>
    </div>

    <slot name="after"></slot>
  </div>
</template>

<style lang="scss" scoped>
.field {
  &__container {
    display: flex;
    align-items: center;
    width: 100%;

    height: 300px;
    column-gap: 0.3125rem;

    background-color: aqua;
  }

  &__input-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    column-gap: 0.3125rem;

    background-color: blueviolet;
  }

  &__input {
    height: 100%;
    width: 100%;
    background-color: red;
  }
}
</style>
