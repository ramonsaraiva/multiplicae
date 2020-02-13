describe('Page Login', function() {
  it('Open page', function() {
    cy.visit('/auth/login');
  });

  it('Verify components: TitleHack, three LabelHack, three InputHack and ButtonHack', function() {
    cy.visit('/auth/login');

    cy.get('h1').contains('Login');

    cy.get('label').contains('Email:');
    cy.get('input[type=email]');

    cy.get('label').contains('Senha:');
    cy.get('input[type=password]');

    cy.get('input[type=checkbox]');
    cy.get('label').contains('Lembre-me');

    cy.get('button').contains('Entrar');
  });

  it('When to click label that contains Email: the input with the email type has stay focus', function() {
    cy.visit('/auth/login');

    cy.contains('Email:').click();
    cy.get('input[type=email]:focus');
  });

  it('When to click label that contains Senha: the input with the password type has stay focus', function() {
    cy.visit('/auth/login');

    cy.contains('Senha:').click();
    cy.get('input[type=password]:focus');
  });

  it('When to click label that contains Lembre-se: the input of checkbox type has stay focus', function() {
    cy.visit('/auth/login');

    cy.contains('Lembre-me').click();
  });

  it('Click in Button and verify if open page Tree', function() {
    cy.visit('/auth/login');

    cy.get('input[type=email]').type('marco.bruno.br@gmail.com');
    cy.get('input[type=password]').type('q1w2e3r4');
    cy.contains('Entrar').click();
    cy.contains('Invista nos seus sonhos');
  });
});
