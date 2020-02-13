describe('Page Signup', function() {
  it('Open page', function() {
    cy.visit('/auth/signup');
  });

  it('Verify the components: TitleHack, three LabelHack, four InputHack and ButtonHack', function() {
    cy.visit('/auth/signup');
    cy.get('h1').contains('Cadastro');

    cy.get('label').contains('Nome:');
    cy.get('input[name=name]').should('have.attr', 'type', 'text');

    cy.get('label').contains('Email:');
    cy.get('input[name=email]').should('have.attr', 'type', 'email');

    cy.get('label').contains('Senha:');
    cy.get('input[name=password]').should('have.attr', 'type', 'password');

    cy.get('input[type=checkbox]');
    cy.get('label').contains('Li e aceito os termos de uso');
  });

  it('When to click label that contains Nome: the input with the [name=name] has stay focus', function() {
    cy.visit('/auth/signup');

    cy.contains('Nome:').click();
    cy.get('input[name=name]:focus');
  });

  it('When to click label that contains Email: the input with the [name=email] has stay focus', function() {
    cy.visit('/auth/signup');

    cy.contains('Email:').click();
    cy.get('input[name=email]:focus');
  });

  it('When to click label that contains Senha: the input with the [name=password] has stay focus', function() {
    cy.visit('/auth/signup');

    cy.contains('Senha:').click();
    cy.get('input[name=password]:focus');
  });

  it('Click in LabelHack and the InputHack have is checked', function() {
    cy.visit('/auth/signup');

    cy.contains('Li e aceito os termos de uso').click();
    cy.get('input[type=checkbox]:checked');
  });

  it('Click in ButtonHack and verify if open page Login', function() {
    cy.visit('/auth/signup');

    cy.contains('Enviar').click();
    cy.contains('Invista nos seus sonhos');
  });
});
