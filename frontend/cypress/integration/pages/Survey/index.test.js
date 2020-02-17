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
    cy.get('input').clear();
  });

  it('Open page 1', function() {
    cy.visit('/survey/1');

    cy.contains('Qual o valor aproximado desse sonho?');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: uma casa, um carro...', function() {
    cy.visit('/survey/1');

    cy.get('input').should('have.attr', 'placeholder', 'Ex.: 4.000,00');
  });

  it('When the FieldHack with the name dreamMoney is empty', function() {
    cy.visit('/survey/1');

    cy.contains('Avançar').click();
    cy.contains('Campo é obrigatório');
  });

  it('When the FieldHack with the name monthMoney is filled with letters', function() {
    cy.visit('/survey/1');

    cy.get('input[name=dreamMoney]').type('djshfha');
    cy.contains('Avançar').click();
    cy.contains('Somente números');
  });

  it('When click on ButtonHack have that to going for /survey/2', function() {
    cy.visit('/survey/1');

    cy.get('input[name=dreamMoney]').type('1000,00');
    cy.contains('Avançar').click();
    cy.url().should('include', '/survey/2');
    cy.get('input').clear();
  });
});
