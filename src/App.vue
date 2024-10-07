<script lang="ts" setup>
import { ref } from 'vue'
import TestComponent from './components/field/TestComponent.vue'

const testModel = ref('123456789 123456789 123456789')
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <div class="grid grid-cols-3 gap-3 bg-slate-300 p-5">
      <h6 class="col-span-full">Grid</h6>

      <TestComponent v-for="key in 3" :key="key" v-model="testModel" label="Тест" />
    </div>

    <div class="flex flex-col gap-y-4 bg-slate-300 p-5">
      <h6 class="col-span-full">Flex without wrap</h6>

      <div class="flex gap-3">
        <TestComponent v-for="key in 3" :key="key" v-model="testModel" class="w-1/3" label="Тест" />
      </div>
    </div>

    <div class="flex flex-col gap-y-4 bg-slate-300 p-5">
      <h6 class="col-span-full">Flex wrap, width: 300px</h6>
      <div class="flex flex-wrap gap-3">
        <TestComponent
          v-for="key in 9"
          :key="key"
          v-model="testModel"
          class="w-[300px]"
          label="Тест"
        />
      </div>
    </div>
  </div>
</template>
