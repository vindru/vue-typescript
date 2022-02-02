import Data  from "../fixtures/register";
const { firstName, lastName, email, password } = Data;
const { url } = Cypress.env();

describe("Register Page e2e test case", ()=>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('visit app root url', ()=>{
        cy.title().should('eq', 'vue-typescript')
        cy.url('').should('eq', `${url}`);
        cy.get('footer > a').should('have.attr','href', 'https://github.com/vindru/' )
    })

    it('Verify First Name & Last Name input fields', () => {
        cy.get('.home > :nth-child(1) > div')
            .should('be.visible')
            .should('have.text', 'Name field has an error.Invalid first name')
        cy.get(':nth-child(1) > input')
            .type(firstName)
            .clear()
        cy.get('.home > :nth-child(1) > div')
            .should('be.visible')
        cy.get(':nth-child(1) > input').type(firstName)
        cy.get('.home > :nth-child(2) > div')
            .should('be.visible')
            .should('have.text', 'Name field has an error.')
        cy.get(':nth-child(2) > input').type(lastName)
    })

    it('Verify email input field', () => {
        cy.get('.home > :nth-child(3) > div')
            .should('be.visible')
            .should('have.text', 'Name field has an error.')
        cy.get(':nth-child(3) > input')
            .should('be.visible')
            .type(email).then(e => {
                expect(e).to.have.value(email)
        })
        cy.get(':nth-child(3) > input').clear()
    })

    it('verify Password input field', () => {
        cy.get('.home > :nth-child(4) > div')
            .should('be.visible')
            .should('have.text', 'Name field has an error.')
        cy.get(':nth-child(4) > input')
            .should('be.visible')
            .type(password).then(e => {
                expect(e).to.have.value(password)
        })
        cy.get(':nth-child(5) > input')
            .should('be.visible')
            .type(password).then(e => {
                expect(e).to.have.value(password)
        })
    })

    it.only("E2E test for register form", () => {
        cy.register(firstName, lastName, email, password)
    })

})
