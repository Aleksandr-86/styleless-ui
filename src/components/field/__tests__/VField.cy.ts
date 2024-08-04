import VField from '@/components/field/VField.vue'

describe('VField', () => {
  describe('по умолчанию', () => {
    it('содержит поле ввода', () => {
      cy.mount(VField)
      // cy.get('input').should('exist')
      cy.input('Поле ввода').should('exist')
    })
  })
})
