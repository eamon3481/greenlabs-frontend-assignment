/// <reference types="cypress" />

export const NAME = "안동민";
export const ID = "eamon3481";
export const CROP = "옥수수";
export const FARM = "농장12";
export const ACTIVE_COLOR = "rgb(122, 234, 156)";
export const INACTIVE_COLOR = "rgb(255, 130, 105)";

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get("input[name='name']").type(NAME);
  cy.get("input[name='id']").type(ID);
  cy.get("button[type='submit']").click();
});
