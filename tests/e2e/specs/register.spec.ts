/// <reference types="Cypress" />

import Data  from "../fixtures/register.json";
const { firstName, lastName, email, password } = Data;

describe("Register form - verify user credentials", ()=>{
  before(() => {
    cy.visit('/')
  })

  it('visit home page', ()=>{
    cy.title().should('eq', 'vue-typescript')
    cy.get('footer > a').should('have.attr','href', 'https://github.com/vindru/' )
  })

  it('Verify First Name & Last Name input fields', () => {
    cy.get('[testid="firstName"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[testid="firstName"]')
      .type('1221312')
      .should('have.value', '1221312')
      .clear()
    cy.get('[testid="firstName"]')
      .type('%$#@&')
      .should('have.value', '%$#@&')
      .clear()
    cy.get('[testid="firstName"]').should('have.value', '')
    cy.get('[testid="registerUser"]').click()
    cy.get('[testid="Invalid first name"]')
      .should('be.visible')
      .should('have.text', 'Invalid first name')
    cy.get('[testid="firstName"]')
      .type(firstName)
      .should('have.value', firstName)

    cy.get('[testid="lastName"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[testid="lastName"]')
      .type('1221312')
      .should('have.value', '1221312')
      .clear()
    cy.get('[testid="lastName"]')
      .type('%$**&#@&')
      .should('have.value', '%$**&#@&')
      .clear()
    cy.get('[testid="lastName"]').should('have.value', '')
    cy.get('[testid="registerUser"]').click()
    cy.get('[testid="Invalid last name"]')
      .should('be.visible')
      .should('have.text', 'Invalid last name')
    cy.get('[testid="lastName"]')
      .type(lastName)
      .should('have.value', lastName)
  })

  it('Verify email input field', () => {
    cy.get('[testid="email"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[testid="email"]')
      .should('be.visible')
      .type('email').then(e => {
        expect(e).to.have.value('email')
      })
    cy.get('[testid="registerUser"]').click()
    cy.get('[testid="Invalid email"]')
      .should('be.visible')
      .should('have.text', 'Invalid email')
    cy.get('[testid="email"]').clear()
    cy.get('[testid="email"]')
      .should('be.visible')
      .type(email).then(e => {
        expect(e).to.have.value(email)
      })
  })

  it('verify Password input field', () => {
    cy.get('[testid="password"]')
      .should('be.visible')
      .should('be.empty')
      .type(password).then(e => {
        expect(e).to.have.value(password)
      })
    cy.get('[testid="confirmPassword"]')
      .should('be.visible')
      .type(password).then(e => {
        expect(e).to.have.value(password)
    })
  })
})
