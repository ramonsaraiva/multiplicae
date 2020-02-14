describe('Page DetailsStartTree', function() {
  it('Open page', function() {
    cy.visit('/details/start-tree');

    cy.contains('O que são');
  });
});
