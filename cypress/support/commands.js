// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () =>{
   cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364', 
    'L%2BJQvWetG3%2BEW%2BGgWmgsK4ImaF4gnPPOrbidwtXMhM2fy%2FkkkACUNQfDT9XRcDtRgz8o3AQzsu3SGRsrKEsbpmRJzvorVMszmh4C3s1p5cd2FySkg%2B%2B4E7FbxLJL2E4iy67uhOS1AtK2cIPoYHWdobi6qcZEGBemdTderv8vd%2BjNayWqm3eCCiUxEPMWHdu%2BEqS4M5ox3jMNNiSZSBXiipB1OhV7t7GjbUSzqYkb5XzzQ5FIP87%2BAcH1swYOF6pGbT3%2FClkwe1DN71Wl5crZzUpu8YPUvjNfcxMkjemud5hOapsoYHtZ6Mvt2vZLhgCzv%2FU%2Bv4U8E%2FkAKcYE4wl4Oag80%2B%2BL5jMhrzqRG7ai1Xw%2FyeL7BKR%2B1rCqaMnZxoWgIdG93Fnk4EdoTsKUgyFGlE98oILH9wCpafOLR%2FUgZTE%3D000309'
   )
})