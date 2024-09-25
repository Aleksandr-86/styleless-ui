import TestComponent from '../TestComponent.vue'

describe('VField', () => {
  describe('по умолчанию', () => {
    it('содержит поле ввода', () => {
      cy.mount(TestComponent)
      cy.get('input').should('exist')
    })
  })
})
