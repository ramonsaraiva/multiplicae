describe('Page Signup', function() {
  it('Open page', function() {
    cy.visit('/auth/signup');
  });

  it('Verify the compoenents: TitleHack, tree LabelHack, tree InputHack, CheckHack and ButtonHack', function() {
    cy.visit('/auth/signup');
    cy.get('h1').contains('Cadastro');

    cy.get('label').contains('Nome');
    cy.get('input[name=name]').should('have.attr', 'type', 'text');

    cy.get('label').contains('Email');
    cy.get('input[name=email]').should('have.attr', 'type', 'email');
  });
});
