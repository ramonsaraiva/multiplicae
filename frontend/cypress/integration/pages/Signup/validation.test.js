describe('Signup validation', function() {
  it('Verify if the fields without filled are invalids', function() {
    cy.visit('/auth/signup');

    cy.contains('Enviar').click();
    cy.contains('Nome é obrigatório');
    cy.contains('Email é obrigatório');
    cy.contains('Senha é obrigatória');
    cy.contains('Você tem que aceitar os termos');
  });

  it('Verify if the name field is invalid', function() {
    cy.visit('/auth/signup');

    cy.get('input[name=name]').type('a');
    cy.contains('Enviar').click();
    cy.contains('Nome com no mínimo 2 caracteres');
  });

  it('Verify if the email field is invalid', function() {
    cy.visit('/auth/signup');

    cy.get('input[name=email]').type('GhostRamao');
    cy.contains('Enviar').click();
    cy.contains('Informe um email válido');
  });

  it('Verify if the password field is invalid', function() {
    cy.visit('/auth/signup');

    cy.get('input[name=password]').type('1234567');
    cy.contains('Enviar').click();
    cy.contains('Senha com no mínimo 8 caracteres');
  });
});
