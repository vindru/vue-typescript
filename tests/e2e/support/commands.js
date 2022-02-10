// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("register", (firstName, lastName, email, password) => {
    cy.get('[data_cy="firstName"]').type(firstName)
    cy.get('[data_cy="lastName"]').type(lastName)
    cy.get('[data_cy="email"]').type(email)
    cy.get('[data_cy="password"]').type(password)
    cy.get('[data_cy="confirmPassword"]').type(password)
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
