<script lang="ts" setup>
import { h } from 'vue'

export interface InputProps {
  /** Область текста вместо поля ввода */
  area?: boolean
  /** Отключённое состояние поля ввода */
  disabled?: boolean
  /** Идентификатор поля ввода */
  id?: string
  /** Имя поля ввода */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения в поле ввода */
  placeholder?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Тип поля ввода */
  type?: 'email' | 'hidden' | 'number' | 'password' | 'sum' | 'search' | 'tel' | 'text'
}

interface Props extends InputProps {
  /** Модель */
  modelValue?: string
}

const {
  modelValue,
  area,
  disabled,
  id,
  name,
  placeholder,
  readonly,
  type = 'text',
} = defineProps<Props>()

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<InputEmits>()

function onInput({ target }: { target: EventTarget | null }) {
  if (target !== null) {
    const { value } = target as HTMLInputElement | HTMLTextAreaElement
    emit('update:modelValue', value)
  }
}

function Render() {
  const typeAttr = type === 'sum' || type === 'tel' ? undefined : type

  return h(area ? 'textarea' : 'input', {
    value: modelValue,
    onInput,
    disabled,
    id,
    name,
    placeholder,
    readonly,
    type: typeAttr,
  })
}
</script>

<template>
  <Render />
</template>
