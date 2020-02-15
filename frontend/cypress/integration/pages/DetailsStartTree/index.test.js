describe('Page DetailsStartTree', function() {
  it('Open page', function() {
    cy.visit('/details/start-tree');

    cy.contains('Logo');
  });

  it('Verify if have the HeaderHack and into it have the components: LogoHack and IconMenu', function() {
    cy.visit('details/start-tree');

    cy.contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the components: TitleHack and TextHack', function() {
    cy.visit('/details/start-tree');

    cy.contains('O que são');
    cy.contains(
      'Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock inspect anything brought into the house, but scamper so i am the best hit you unexpectedly.'
    );
  });

  it('Verify the behavior of VideoThumbnail', function() {
    cy.visit('/details/start-tree');

    cy.get('figure').get('img[src*=thumbnail]');
    cy.get('figure').get('time');
    cy.get('figure').get('img[src*=play]');
  });

  it('Verify the behavior of SlidersHack', function() {
    cy.visit('/details/start-tree');

    cy.get('ol')
      .get('li')
      .get('img[src*=thumbnail]');
  });
});
