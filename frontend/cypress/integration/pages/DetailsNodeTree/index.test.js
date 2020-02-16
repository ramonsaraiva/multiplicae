describe('DetailsNodeTree page', function() {
  it('Open page', function() {
    cy.visit('/details/node-tree');

    cy.contains('Lorem Ipsum');
  });

  it('Verify if have the HeaderHack and into it have the components: LogoHack and IconMenu', function() {
    cy.visit('/details/node-tree');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the Texthack with the content: Somehow ...', function() {
    cy.visit('/details/node-tree');

    cy.get('p').contains(
      'Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock inspect anything brought into the house, but scamper so i am the best hit you unexpectedly.'
    );
  });

  it('Verify if have the SlidersHack component', function() {
    cy.visit('/details/node-tree');

    cy.get('ol').get('img[src*=thumbnail]');
  });

  it('Verify if have InfoHack container', function() {
    cy.visit('/details/node-tree');

    cy.get('dl').get('dt');
    cy.get('dl')
      .get('dd')
      .get('img[src*=money]');
    cy.get('dl')
      .get('dd')
      .contains('poupança');
  });

  it('Verify if have a InfoHack with the title: Histórico de Rendimento', function() {
    cy.visit('/details/node-tree');

    cy.get('dt').contains('Histórico de Rendimento');
  });

  it('Verify if have a InfoHack with the title: Segurança', function() {
    cy.visit('/details/node-tree');

    cy.get('dt').contains('Segurança');
  });

  it('Verify if have a InfoHack with the title: Tempo de Resgate', function() {
    cy.visit('/details/node-tree');

    cy.get('dt').contains('Tempo de Resgate');
  });

  it('Verify if have the ButtonHack with o content: Complete o desafio', function() {
    cy.visit('/details/node-tree');

    cy.get('a').contains('Complete o desafio');
  });
});
