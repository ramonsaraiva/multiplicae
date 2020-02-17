describe('Survey page', function() {
  it('Open page', function() {
    cy.visit('/survey');

    cy.contains('Qual é o seu maior sonho?');
  });

  it('Verify if have the HeaderHack with the components: LogoHack and MenuHack', function() {
    cy.visit('/survey');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: uma casa, uma bicicleta...', function() {
    cy.visit('/survey');

    cy.get('input').should(
      'have.attr',
      'placeholder',
      'Ex.: uma casa, uma bicicleta...'
    );
  });
});
