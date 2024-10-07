<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  /** Идентификатор поля ввода */
  id: string | undefined
}

defineProps<Props>()

const model = defineModel()
</script>

<template>
  <input :id v-model="model" class="v-input" />
</template>

<style lang="scss">
.v-input {
  outline: none;
  background-color: transparent;
  width: 100%;
  height: 100%;

  // background-color: wheat;
}
</style>
