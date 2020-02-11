describe('Page Home', function() {
  it('Open page', function() {
    cy.visit('/');
  });

  it('Verify if o TitleHack and two ButtonHack', function() {
    cy.visit('/');
    cy.get('h1').contains('Boas vindas');
    cy.get('a').contains('Comece agora');
    cy.get('a').contains('Já tenho conta');
  });

  it('Open page Signup when click in ButtonHack', function() {
    cy.visit('/');
    cy.contains('Comece agora').click();
    cy.contains('Cadastro');
  });

  it('Open page Login when click in ButtonHack', function() {
    cy.visit('/');
    cy.contains('Já tenho conta').click();
    cy.contains('Login');
  });
});
