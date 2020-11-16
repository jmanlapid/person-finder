/// <reference types="cypress" />

context("The Person Finder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should load 12 people", () => {
    cy.get('[data-test="personCard-container"]').should("have.length", 12);
  });

  it('query for names that begin with "D"', () => {
    cy.get("input").type("d");
    cy.get('[data-test="personCard-name"]').each((nameElement) => {
      const name = nameElement.text();
      expect(name.charAt(0)).equals("D", `Checking if ${name} begins with D`);
    });
  });

  it("shows no results", () => {
    cy.get("input").type('>{"');
    cy.get('[data-test="personCard-container"]').should("have.length", 0);
    cy.get('[data-test="personFinder-noResults"]').should(
      "have.text",
      "No Results"
    );
  });
});
