/// <reference types="@applitools/eyes-cypress" />

describe('Cypress Visual Testing (Applitools)', () => {
    it('Compare landing page of SwagLabs', () => {

        cy.visit("http://localhost:3000/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click()
        cy.eyesOpen({
            appName: 'Swag labs',
            testName: 'Inventory'
        })
        cy.eyesCheckWindow({
            tag: "inventory",
            target: 'window',
            fully: true
        });
        cy.eyesClose()

    });
});
