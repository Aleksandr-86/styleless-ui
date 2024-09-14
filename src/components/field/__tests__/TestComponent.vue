<script lang="ts" setup>
import VField from '@/components/field/VField.vue'

type BaseMessage = { id: string; timestamp: number }

type TextMessage = BaseMessage & { text: string; url?: never }
type ImgMessage = BaseMessage & { imgPath: string }
type UrlMessage = BaseMessage & { url: string }
type Message = TextMessage | UrlMessage | ImgMessage

const message: Message = {
  id: '1',
  timestamp: new Date().getTime(),
  text: 'something',
  url: 'https://typed.rocks',
}
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
