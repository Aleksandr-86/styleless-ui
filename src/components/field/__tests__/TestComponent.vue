<script lang="ts" setup>
import VField from '@/components/field/VField.vue'
</script>

<template>
  <VField>
    <template #before>b</template>

    <template #prepend>p</template>

    <template #append>ap</template>

    <template #after>af</template>
  </VField>
</template>

<!-- <style scoped>
:deep(.field__input-container) {
  background-color: red;
}
</style> -->
