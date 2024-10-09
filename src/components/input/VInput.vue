<script lang="ts" setup>
import { h } from 'vue'

export interface InputProps {
  /** Область текста вместо поля ввода */
  area?: boolean
  /** Автозавершение */
  autocomplete?: string
  /** Отключённое состояние поля ввода */
  disabled?: boolean
  /** Идентификатор поля ввода */
  id?: string
  /** Максимальная длина строки поля ввода */
  maxlength?: string | number
  /** Максимальная длина строки поля ввода */
  minlength?: string | number
  /** Имя поля ввода */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения в поле ввода */
  placeholder?: string
  /** Состояние поля ввода "только для чтения" */
  readonly?: boolean
  /** Тип поля ввода */
  type?: 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text'
}

interface Props extends InputProps {
  /** Модель */
  modelValue?: string
}

const {
  modelValue,
  area,
  autocomplete = 'off',
  disabled,
  id,
  maxlength,
  minlength,
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
  return h(area ? 'textarea' : 'input', {
    value: modelValue,
    onInput,
    autocomplete,
    disabled,
    id,
    maxlength,
    minlength,
    name,
    placeholder,
    readonly,
    type,
  })
}
</script>

<template>
  <Render />
</template>
