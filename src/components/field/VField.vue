<script lang="ts" setup>
export interface Some {
  a: number
}
</script>

<template>
  <!-- Контейнер компонента -->
  <div class="flex">
    <slot name="before"></slot>

    <!-- Контейнер поля ввода -->
    <div class="field__input-container">
      <slot name="prepend"></slot>
      <input class="h-full" />
      <slot name="append"></slot>
    </div>

    <slot name="after"></slot>
  </div>
</template>

<style lang="scss" scoped>
.field {
  &__input-container {
    display: flex;
  }

  &__input {
    background-color: red;
  }
}
</style>
