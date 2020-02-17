describe('Page Home', function() {
  it('Open page', function() {
    cy.visit('/');
  });

  it('Verify if have the HeaderHack with the LogoHack and MenuHack', function() {
    cy.visit('/');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the CardHack component with the content: Conquiste seus objetivos', function() {
    cy.visit('/');

    cy.get('h1').contains('Conquiste seus objetivos');
  });

  it('Verify if have the CardHack component with the content: Se você sonha grande...', function() {
    cy.visit('/');

    cy.get('p').contains(
      'Se você sonha grande, mas não sabe por onde começar a juntar dinheiro, você está no lugar certo! E não, você não precisa ser um milionário para investir! Faça o teste e tenha aulas feitas especialmente para o seu perfil!'
    );
  });

  it('Verify if have the CardHack component with the content: Monte objetivo', function() {
    cy.visit('/');

    cy.get('a').contains('Montar objetivo');
  });

  it('Verify if have the FooterHack component', function() {
    cy.visit('/');

    cy.get('footer').contains('© 2020 Multiplicae. All rights reserved.');
  });
});
