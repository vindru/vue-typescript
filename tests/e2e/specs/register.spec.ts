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
    cy.get('[data_cy="firstName"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[data_cy="firstName"]')
      .type('1221312')
      .should('have.value', '1221312')
      .clear()
    cy.get('[data_cy="firstName"]')
      .type('%$#@&')
      .should('have.value', '%$#@&')
      .clear()
    cy.get('[data_cy="firstName"]').should('have.value', '')
    cy.get('[data_cy="register-user"]').click()
    cy.get('[data_cy="Invalid first name"]')
      .should('be.visible')
      .should('have.text', 'Invalid first name')
    cy.get('[data_cy="firstName"]')
      .type(firstName)
      .should('have.value', firstName)

    cy.get('[data_cy="lastName"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[data_cy="lastName"]')
      .type('1221312')
      .should('have.value', '1221312')
      .clear()
    cy.get('[data_cy="lastName"]')
      .type('%$**&#@&')
      .should('have.value', '%$**&#@&')
      .clear()
    cy.get('[data_cy="lastName"]').should('have.value', '')
    cy.get('[data_cy="register-user"]').click()
    cy.get('[data_cy="Invalid last name"]')
      .should('be.visible')
      .should('have.text', 'Invalid last name')
    cy.get('[data_cy="lastName"]')
      .type(lastName)
      .should('have.value', lastName)
  })

  it('Verify email input field', () => {
    cy.get('[data_cy="email"]')
      .should('be.visible')
      .should('be.empty')
    cy.get('[data_cy="email"]')
      .should('be.visible')
      .type('email').then(e => {
        expect(e).to.have.value('email')
      })
    cy.get('[data_cy="register-user"]').click()
    cy.get('[data_cy="Invalid email"]')
      .should('be.visible')
      .should('have.text', 'Invalid email')
    cy.get('[data_cy="email"]').clear()
    cy.get('[data_cy="email"]')
      .should('be.visible')
      .type(email).then(e => {
        expect(e).to.have.value(email)
      })
  })

  it('verify Password input field', () => {
    cy.get('[data_cy="password"]')
      .should('be.visible')
      .should('be.empty')
      .type(password).then(e => {
        expect(e).to.have.value(password)
      })
    cy.get('[data_cy="confirmPassword"]')
      .should('be.visible')
      .type(password).then(e => {
        expect(e).to.have.value(password)
    })
  })
})
