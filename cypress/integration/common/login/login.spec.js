import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('我在 Header Navbar 點擊「登入」', () => {
  cy.get('button[data-e2e="desktop-nav-login"]').click();
})

Then('登入 Modal 跳出，我點擊 {string}', (option) => {
  cy.get('button[data-e2e="modal-login"]').should('contain.text', option).click();
})

Then('Modal 列出選項，我點擊 {string}', (option) => {
  cy.contains(option).click();
})