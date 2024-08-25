import VField from '@/components/field/VField.vue'

declare module 'vue' {
  export interface GlobalComponents {
    VField: typeof VField
  }
}
