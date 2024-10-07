<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import VField from '@/components/field/VField.vue'
import { ref } from 'vue'
import { useId } from 'vue'

interface Props {
  /** Ярлык */
  label: string
}

defineProps<Props>()

const model = defineModel()
const id = useId()
</script>

<template>
  <div class="gap-y- flex flex-col py-0.5">
    <label :for="id">{{ label }}</label>

    <VField :id v-model="model" class="input-field rounded-r">
      <template #append="{ count, text }">
        <Icon color="white" height="18px" icon="mdi:clear-circle" />
        <Icon color="white" height="18px" icon="fluent:error-circle-48-regular" />
        <Icon color="white" height="18px" icon="line-md:loading-twotone-loop" />
      </template>
    </VField>
  </div>
</template>

<style lang="scss">
.input-field {
  &.v-field__container {
    // display: flex;
    // column-gap: 40px; /* 4px */
    background-color: violet;
    // padding-right: 4px;
    // padding-left: 4px;
  }

  & .v-field__input {
    padding-top: 0.125rem /* 2px */;
    // padding-right: 0.25rem /* 4px */;
    padding-bottom: 0.125rem /* 2px */;
    // padding-left: 0.25rem /* 4px */;
    text-overflow: ellipsis;
  }

  &.v-field__container,
  & .v-field__input-container,
  & .v-field__input {
    border-radius: 0.25rem; /* 4px */
  }

  & .v-field__input-container {
    // column-gap: 14px;
    // background-color: red;
  }

  & .v-field__slot_append {
    column-gap: 20px;
    border-top-right-radius: 0.25rem; /* 4px */
    border-bottom-right-radius: 0.25rem; /* 4px */

    background-color: red;
  }
}
</style>
