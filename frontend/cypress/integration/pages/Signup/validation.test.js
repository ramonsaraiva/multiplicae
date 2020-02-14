describe('Signup validation', function() {
  it('Verify if the fields without filled are invalids', function() {
    cy.visit('/auth/signup');

    cy.contains('Enviar').click();
    cy.contains('Nome é obrigatório');
  });
});
