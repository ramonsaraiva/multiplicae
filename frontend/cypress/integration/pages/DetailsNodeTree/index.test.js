describe('DetailsNodeTree page', function() {
  it('Open page', function() {
    cy.visit('/details/node-tree');

    cy.contains('Lorem Ipsum');
  });

  it('Verify if have the HeaderHack and into it have the components: LogoHack and IconMenu', function() {
    cy.visit('/details/node-tree');

    cy.get('header').get('img[src*=menu]');
    cy.get('header').contains('Logo');
  });

  it('Verify if have the Texthack with the content: Somehow ...', function() {
    cy.visit('/details/node-tree');

    cy.get('p').contains(
      'Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock inspect anything brought into the house, but scamper so i am the best hit you unexpectedly.'
    );
  });

  it('Verify if have the SlidersHack', function() {
    cy.visit('/details/node-tree');

    cy.get('ol').get('img[src*=thumbnail]');
  });

  it('Verify if have the InfoHack', function() {
    cy.visit('/details/node-tree');

    cy.get('p')
      .get('a')
      .get('img[src*=info]');
  });
});
