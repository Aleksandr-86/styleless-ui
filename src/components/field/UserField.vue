<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import VField from '@/components/field/VField.vue'
import type { FieldProps } from '@/components/field/VField.vue'
import { computed, ref } from 'vue'
import { useId } from 'vue'

interface Props extends FieldProps {
  /** Ярлык */
  label: string
  /** Состояние загрузки */
  loading?: boolean
}

const props = defineProps<Props>()

const model = defineModel({ type: String })
const id = useId()
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="id">{{ label }}</label>

    <VField :id v-model="model" class="input-field" prefix="p!" suffix="s!">
      <template #prepend>
        <Icon color="white" height="18px" icon="mdi:search" />
        <Icon color="white" height="18px" icon="mdi:search" />
      </template>

      <template #append="{ hasError }">
        <Icon color="white" height="18px" icon="mdi:clear-circle" />
        <Icon v-if="hasError" color="white" height="18px" icon="fluent:error-circle-48-regular" />
        <Icon color="white" height="18px" icon="line-md:loading-twotone-loop" />
      </template>
    </VField>
  </div>
</template>

<style lang="scss">
.input-field {
  &.v-field__container {
    border-radius: 0.25rem; /* 4px */
    padding-right: 4px;
    padding-left: 4px;
    height: 80px;
  }

  & .v-field__input {
    padding-top: 0.125rem /* 2px */;
    padding-bottom: 0.125rem /* 2px */;
    text-overflow: ellipsis;
  }

  & .v-field__slot_prepend {
    column-gap: 4px;
    padding-right: 4px;
  }

  & .v-field__prefix {
    padding-right: 4px;
  }

  & .v-field__suffix {
    padding-left: 4px;
  }

  & .v-field__slot_append {
    column-gap: 4px;
    padding-left: 4px;
  }
}
</style>
