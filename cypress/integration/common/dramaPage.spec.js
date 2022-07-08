import { Given } from "cypress-cucumber-preprocessor/steps";

Given('我進到 {string} 戲劇播放頁 - {string}', (device, dramaType) => {
  let url;

  switch (dramaType) {
    case "一般":
      url = Cypress.env('DRAMA_URL_NORMAL');
      break;
    case "VIP":
      url = Cypress.env('DRAMA_URL_VIP');
      break;
    default:
      url = Cypress.env('DRAMA_URL_NORMAL');
  }

  if (device === "Desktop") {
    cy.visit(url)
  } else if (device === "Mobile") {
    cy.viewport('iphone-5');
    cy.visit(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_4 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G61 [FBAN/FBIOS;FBDV/iPhone5,2;FBMD/iPhone;FBSN/iOS;FBSV/10.3.4;FBSS/2;FBID/phone;FBLC/es_LA;FBOP/5;FBCR/]",
      }
    })
  }

  cy.wait(5000); // waiting for a while
})