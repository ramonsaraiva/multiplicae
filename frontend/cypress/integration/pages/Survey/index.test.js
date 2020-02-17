describe('Survey page', function() {
  it('Open page', function() {
    cy.visit('/survey/0');

    cy.contains('Qual é o seu maior sonho?');
  });

  it('Verify if have the HeaderHack with the components: LogoHack and MenuHack', function() {
    cy.visit('/survey/0');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the component FormSurvey', function() {
    cy.visit('/survey/0');

    cy.get('form');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: uma casa, um carro...', function() {
    cy.visit('/survey/0');

    cy.get('input').should(
      'have.attr',
      'placeholder',
      'Ex.: uma casa, um carro...'
    );
  });

  it('When click on ButtonHack have that to going for /survey/1', function() {
    cy.visit('/survey/0');

    cy.get('input').type('Carro');

    cy.get('button')
      .contains('Avançar')
      .click();
    cy.url().should('include', '/survey/1');
  });
});
