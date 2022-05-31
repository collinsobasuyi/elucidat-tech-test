// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import pages from '../../support/pageObjects/pages'

const pom = new pages();

describe('Exploratory Test', () => {
    it('You think Kevin is GUILTY!', () => {
      cy.visit('/')
      pom.getStartButton().click()
      cy.get('[id*=card__image-1]').click()
      cy.get('[id*=-textButton]').contains('JUDGE THIS').click()
      cy.get('[id*=-question]').should('have.length',1)
      cy.get('[id*=-itemInner-1]').contains('Guilty').click({force: true})
      cy.get('[id*=-save_button]').contains('VOTE').click()
      cy.get('[id*=-modalTitle]').contains('GUILTY!')
      cy.get('[id*=-modal__text]').contains('You think Kevin is guilty.')
    cy.get('[id*=-modal__text]').contains('Press Continue to find out more about the evidence. Will you be able to use it to prove his guilt?')
    })

    it('You think Kevin is NOT GUILTY!', () => {
        cy.visit('/')
        cy.get('[id*=-textButton]').contains('START').click()
        cy.get('[id*=card__image-1]').click()
        cy.get('[id*=-textButton]').contains('JUDGE THIS').click()
        cy.get('[id*=-question]').should('have.length',1)
        cy.get('[id*=-itemInner-2]').contains('Not guilty').click({force: true})
        cy.get('[id*=-save_button]').contains('VOTE').click()
        cy.get('[id*=-modalTitle]').contains('NOT GUILTY!')
        cy.get('[id*=-modal__text]').contains('You think Kevin is innocent.')
      cy.get('[id*=-modal__text]').contains('Press Continue to find out more about the evidence. Will you be able to use it to prove his innocence?')
      })
  })