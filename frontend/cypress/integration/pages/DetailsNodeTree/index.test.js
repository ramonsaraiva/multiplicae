describe('DetailsNodeTree page', function() {
  it('Open page', function() {
    cy.visit('/details/node-tree');

    cy.contains('Lorem Ipsum');
  });

  it('Verify if have the HeaderHack and into it have the components: LogoHack and IconMenu', function() {
    cy.visit('details/node-tree');

    cy.get('header').get('img[src*=menu]');
    cy.get('header').contains('Logo');
  });
});
