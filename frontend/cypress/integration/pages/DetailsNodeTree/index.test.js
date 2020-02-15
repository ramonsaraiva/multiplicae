describe('DetailsNodeTree page', function() {
  it('Open page', function() {
    cy.visit('/details/node-tree');

    cy.contains('Lorem Ipsum');
  });
});
