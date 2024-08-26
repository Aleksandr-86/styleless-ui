<script lang="ts" setup>
import VField from '@/components/field/VField.vue'
</script>

<template>
  <VField>
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

<!-- <style scoped>
:deep(.field__input-container) {
  background-color: red;
}
</style> -->
