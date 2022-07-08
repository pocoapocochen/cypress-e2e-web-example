import { Then } from "cypress-cucumber-preprocessor/steps";

Then('播放器出現廣告', () => {
  cy.wait(3000); // after preroll playing a while
  cy.get('[data-e2e="player-ads"]').should('be.visible').end();
})

