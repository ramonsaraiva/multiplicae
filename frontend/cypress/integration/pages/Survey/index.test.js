describe('Survey page', function() {
  it('Open page', function() {
    cy.visit('/survey');

    cy.contains('Qual é o seu maior sonho?');
  });
});
