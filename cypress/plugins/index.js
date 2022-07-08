/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// /**
//  * @type {Cypress.PluginConfig}
//  */
// // eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// };

const cucumber = require('cypress-cucumber-preprocessor').default;
// require('dotenv').config();
require('dotenv-flow').config();

module.exports = (on, config) => {
  // modify config values
  config.baseUrl = process.env.BASE_URL;

  // copy any needed variables from process.env to config.env
  config.env.VIP_USERNAME = process.env.VIP_USERNAME;
  config.env.VIP_PASSWORD = process.env.VIP_PASSWORD;
  config.env.DRAMA_URL_NORMAL = process.env.DRAMA_URL_NORMAL;
  config.env.DRAMA_URL_VIP = process.env.DRAMA_URL_VIP;

  // workaround for 'failed to make a connection to browser' error
  // https://github.com/cypress-io/cypress/issues/6540#issuecomment-641087834
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions;
    }
  });

  on('file:preprocessor', cucumber());

  // do not forget to return the changed config object!
  return config;
};