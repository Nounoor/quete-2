
describe('backmarket',()=> {
    
    it('inscription reussuite',()=> {
cy.visit('https://preprod.backmarket.fr/fr-fr/register')
cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
cy.get('#firstName').type('Nour')
cy.get('#lastName').type('houda')
cy.get('#signup-email').type('difiy85083@pyadu.com')
cy.get('#signup-password').type('backMarket1234*')
cy.get('[data-qa="signup-submit-button"]').click

    })
})
describe('backmarket',()=> {
it('inscription échouée',() => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa="accept-cta"] >').click()
    cy.get('#firstName').type('nour')
    cy.get('#lastName').type('houda')
    cy.get('#signup-email').type('difiy85083@pyadu.fr')
    cy.get('#signup-password').type('backMarket1234*')
    cy.get('[data-qa="signup-submit-button"]').click

})
})

it('autentification reussite',() =>{ 
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
    cy.get('#signin-email').type('difiy85083@pyadu.com')
    cy.get('#signin-password').type('backMarket1234*')
    cy.get('[data-qa="signin-submit-button"]> .MkLAMntR > ._2GvJDBxS').click

})