/* eslint-disable no-undef */
describe("template spec", () => {
  it("opens the register page from header link", () => {
    //arrange
    cy.visit("http://localhost:5173/");

    //act
    cy.get('[data-cy="register-link"]').click();

    //
    cy.url().should("include", "/register");
  });
  it("gets error message for invalid email", () => {
    //arrange
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="register-link"]').click();

    //act
    cy.get('[data-cy="email-input"]').type("emre@");

    //
    cy.get('[data-cy="error"]').should("have.length", 1);
  });
});
