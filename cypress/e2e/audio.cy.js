describe('Audio Player', () => {
  it('plays audio', () => {
    cy.visit('/')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)

    cy.get('.composition-name:first').click()

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.get('#play-btn').click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000)

    cy.get('#player-play-btn').click()
  })
})
