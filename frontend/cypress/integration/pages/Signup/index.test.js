describe('Page Signup', function() {
  it('Open page', function() {
    cy.visit('/auth/signup');
  });

  it('Verify the components: TitleHack, three LabelHack, four InputHack and ButtonHack', function() {
    cy.visit('/auth/signup');
    cy.get('h1').contains('Cadastro');

    cy.get('label')
      .contains('Nome:')
      .should('have.attr', 'for', 'name');
    cy.get('input[name=name]').should('have.attr', 'type', 'text');
    cy.get('input[name=name]').should('have.attr', 'id', 'name');

    cy.get('label')
      .contains('Email:')
      .should('have.attr', 'for', 'email');
    cy.get('input[name=email]')
      .should('have.attr', 'type', 'email')
      .should('have.attr', 'id', 'email');

    cy.get('label')
      .contains('Senha:')
      .should('have.attr', 'for', 'password');
    cy.get('input[name=password]')
      .should('have.attr', 'type', 'password')
      .should('have.attr', 'id', 'password');

    cy.get('input[type=checkbox]').should('have.attr', 'id', 'contract');
    cy.get('label')
      .contains('Li e aceito os termos de uso')
      .should('have.attr', 'for', 'contract');
  });

  it('Click in LabelHack and the InputHack have is checked', function() {
    cy.visit('/auth/signup');

    cy.contains('Li e aceito os termos de uso').click();
    cy.get('input[type=checkbox]:checked');
  });

  it('Click in ButtonHack and verify if open page Login', function() {
    cy.visit('/auth/signup');

    cy.contains('Enviar').click();
    cy.contains('Sua jornada de investimentos');
  });
});
