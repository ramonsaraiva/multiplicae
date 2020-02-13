describe('Login page validation', function() {
  it('InputHack whithout fill', function() {
    cy.visit('/auth/login');

    cy.contains('Entrar').click();
    cy.contains('Email é obrigatório');
    cy.contains('Senha é obrigatória');
  });

  it('Verify if the email is invalid', function() {
    cy.visit('/auth/login');

    cy.get('input[type=email]').type('Goufix');
    cy.contains('Entrar').click();
    cy.contains('Informe um email válido');
  });

  it('Verify if the password have 8 chars or more', function() {
    cy.visit('/auth/login');

    cy.get('input[type=password]').type('1234567');
    cy.contains('Entrar').click();
    cy.contains('Senha com no mínimo 8 caracteres');
  });

  it('Send form when the inputs are valid', function() {
    cy.visit('/auth/login');

    cy.get('input[type=email]').type('marco.bruno.br@gmail.com');
    cy.get('input[type=password]').type('q1w2e3r4');
    cy.contains('Entrar').click();
    cy.contains('Invista nos seus sonhos');
  });
});
