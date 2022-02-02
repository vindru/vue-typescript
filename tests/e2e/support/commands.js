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
    cy.get(':nth-child(1) > input').type(firstName)
    cy.get(':nth-child(2) > input').type(lastName)
    cy.get(':nth-child(3) > input').type(email)
    cy.get(':nth-child(4) > input').type(password)
    cy.get(':nth-child(5) > input').type(password)
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
