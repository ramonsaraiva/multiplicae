describe('Page Tree', function() {
  it('Open page', function() {
    cy.visit('/tree');
  });

  it('HeaderHack components: LogoHack and MenuHack', function() {
    cy.visit('/tree');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });
});
