describe('Survey page', function() {
  it('Open page 0', function() {
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

  it('When the FieldHack with the name dream is empty', function() {
    cy.visit('/survey/0');

    cy.contains('Avançar').click();
    cy.contains('Campo é obrigatório');
  });

  it('When the FieldHack with the name dream has less that 2 chars', function() {
    cy.visit('/survey/0');

    cy.get('input[name]').type('a');
    cy.contains('Avançar').click();
    cy.contains('Sonho com no mínimo 2 caracteres');
  });

  it('When click on ButtonHack have that to going for /survey/1', function() {
    cy.visit('/survey/0');

    cy.get('input').type('Carro');

    cy.get('button')
      .contains('Avançar')
      .click();
    cy.url().should('include', '/survey/1');
  });

  it('Open page 1', function() {
    cy.visit('/survey/1');

    cy.contains('Qual o valor aproximado desse sonho?');
  });
});
