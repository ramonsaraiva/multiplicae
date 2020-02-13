describe('Page Tree', function() {
  it('Open page', function() {
    cy.visit('/tree');
  });

  it('HeaderHack with the components: LogoHack and MenuHack', function() {
    cy.visit('/tree');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('CardHack with a variation -action and the components: TitleHack and TextHack', function() {
    cy.visit('/tree');

    cy.get('article').contains('Invista nos seus sonhos');
    cy.get('article').contains(
      'Entenda sobre investimentos a partir do básico e perca o medo de investir!'
    );

    cy.get('article').contains('Monte a sua jornada');
  });

  it('TreeHack with the components: TitleHack, StartTree and two NodeTree', function() {
    cy.visit('/tree');

    cy.get('h1').contains('Índices');
  });
});
