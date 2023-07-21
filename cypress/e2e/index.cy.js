/// <reference types="Cypress" />
describe("Teste de acessibilidade", () => {
  it("Home", () => {
    cy.visit("http://localhost:3000/");
    cy.pageAccessibility();
  });
  it("Home - Link", () => {
    cy.visit("http://localhost:3000/");
    cy.componentAccessibility('a[href="/contact"]');
  });

  it("Contato", () => {
    cy.visit("http://localhost:3000/contact");
    cy.pageAccessibility();
  });
});
