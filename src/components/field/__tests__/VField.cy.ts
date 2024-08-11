import VField from '@/components/field/VField.vue'

describe('VField', () => {
  describe('по умолчанию', () => {
    it.only('содержит ярлык', () => {
      cy.mount(VField)
      cy.get('label').should('exist')
    })

    it('содержит поле ввода', () => {
      cy.mount(VField)
      cy.get('input').should('exist')
    })

  })
})
