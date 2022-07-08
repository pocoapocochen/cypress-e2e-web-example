import { Given } from "cypress-cucumber-preprocessor/steps";

Given('我在首頁', () => {
  cy.visit('/');
  cy.wait(3000); // waiting for a while
})