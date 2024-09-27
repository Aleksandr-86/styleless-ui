<script lang="ts" setup>
import VField from '@/components/field/VField.vue'
import { ref } from 'vue'

const model = defineModel()
</script>

<template>
  <VField v-model="model" class="input-field h-[59px]">
    <template #before>
      <div>before</div>
    </template>

    <template #prepend>
      <div>prepend</div>
    </template>

    <template #append>
      <div>append</div>
    </template>

    <template #after>
      <div>after</div>
    </template>
  </VField>
</template>

<style lang="scss">
.input-field {
  &.field__container {
    column-gap: 0.3125rem; // 5px
    background-color: violet;
  }

  & .field__input {
    padding: 0.125rem; // 2px
    text-overflow: ellipsis;
  }

  &.field__container,
  & .field__input-container,
  & .field__input {
    border-radius: 0.25rem; // 4px
  }

  & .field__slot_append {
    // order: 3;
    border-radius: 0.25rem; // 4px
    background-color: red;
  }
}
</style>
