describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://google.com");

    cy.get("body").should("contain", "Lucky");
  });

  it("passes 2", () => {
    cy.visit("https://google.com");

    cy.get("button").second().should("contain", "Lucky");
  });
});
