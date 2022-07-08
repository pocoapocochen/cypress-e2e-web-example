import { Then } from "cypress-cucumber-preprocessor/steps";

Then('播放器不會出現廣告', () => {
  cy.get('[data-e2e="player-ads"]').should('not.exist').end();
})

