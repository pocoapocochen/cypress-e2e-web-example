import { Then } from "cypress-cucumber-preprocessor/steps";

Then('我進到 Email 登入頁', () => {
  cy.location('pathname').should('include', '/login/email');
})

Then('我輸入 {string} 帳密，並登入', (userType) => {
  if (userType === 'VIP') {
    cy.get('input[type=email]').type(Cypress.env('VIP_USERNAME'));
    cy.get('input[type=password]').type(Cypress.env('VIP_PASSWORD'));
  }
  cy.get('button[data-e2e="email-login"]').click();
})

Then('我回到首頁', () => {
  cy.location('pathname').should('equal', '/');
})