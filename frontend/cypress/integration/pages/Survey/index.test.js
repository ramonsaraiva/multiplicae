describe('Survey page', function() {
  it('Open page 0', function() {
    cy.visit('/survey/0');

    cy.contains('Qual é o seu maior sonho?');
  });

  it('Verify if have the HeaderHack with the components: LogoHack and MenuHack', function() {
    cy.visit('/survey/0');

    cy.get('header').contains('Logo');
    cy.get('header').get('img[src*=menu]');
  });

  it('Verify if have the component FormSurvey', function() {
    cy.visit('/survey/0');

    cy.get('form');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: uma casa, um carro...', function() {
    cy.visit('/survey/0');

    cy.get('input').should(
      'have.attr',
      'placeholder',
      'Ex.: uma casa, um carro...'
    );
  });

  it('When the FieldHack with the name dream is empty', function() {
    cy.visit('/survey/0');

    cy.contains('Avançar').click();
    cy.contains('Campo é obrigatório');
  });

  it('When the FieldHack with the name dream has less that 2 chars', function() {
    cy.visit('/survey/0');

    cy.get('input[name]').type('a');
    cy.contains('Avançar').click();
    cy.contains('Sonho com no mínimo 2 caracteres');
  });

  it('When click on ButtonHack have that to going for /survey/1', function() {
    cy.visit('/survey/0');

    cy.get('input').type('Carro');

    cy.get('button')
      .contains('Avançar')
      .click();
    cy.url().should('include', '/survey/1');
    cy.get('input').clear();
  });

  it('Open page 1', function() {
    cy.visit('/survey/1');

    cy.contains('Qual o valor aproximado desse sonho?');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: uma casa, um carro...', function() {
    cy.visit('/survey/1');

    cy.get('input').should('have.attr', 'placeholder', 'Ex.: 4.000,00');
  });

  it('When the FieldHack with the name dreamMoney is empty', function() {
    cy.visit('/survey/1');

    cy.contains('Avançar').click();
    cy.contains('Campo é obrigatório');
  });

  it('When click on ButtonHack have that to going for /survey/2', function() {
    cy.visit('/survey/1');

    cy.get('input[name=dreamMoney]').type('1000,00');
    cy.contains('Avançar').click();
    cy.url().should('include', '/survey/2');
  });

  it('Open page 2', function() {
    cy.visit('/survey/2');

    cy.contains('Quanto você consegue juntar por mês?');
  });

  it('Verify if have the component FieldHack with placeholder: Ex.: 100,00', function() {
    cy.visit('/survey/2');

    cy.get('input').should('have.attr', 'placeholder', 'Ex.: 100,00');
  });

  it('When the FieldHack with the name monthMoney is empty', function() {
    cy.visit('/survey/2');

    cy.contains('Avançar').click();
    cy.contains('Campo é obrigatório');
  });

  it('When click on ButtonHack have that to going for /survey/3', function() {
    cy.visit('/survey/2');

    cy.get('input[name=monthMoney]').type('1000,00');
    cy.contains('Avançar').click();
    cy.url().should('include', '/survey/3');
  });

  it('Open page 3', function() {
    cy.visit('/survey/3');

    cy.contains('Você já possui algum dinheiro investido? Onde?');
  });

  it('Verify if have the TitleHack component with the content: Você já possui algum dinheiro investido? Onde?', function() {
    cy.visit('/survey/3');

    cy.get('h1').contains('Você já possui algum dinheiro investido? Onde?');
  });

  it('Verify if have the CaptionHack component with the content: Você pode marcar mais de uma opção.', function() {
    cy.visit('/survey/3');

    cy.get('p').contains('Você pode marcar mais de uma opção.');
  });

  it('Verify if have the FieldHack component with the content: Não possuo', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Não possuo');
  });

  it('Verify if have the FieldHack component with the content: Poupança', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Poupança');
  });

  it('Verify if have the FieldHack component with the content: Renda Fixa', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Renda Fixa');
  });

  it('Verify if have the FieldHack component with the content: Renda Variável', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Renda Variável');
  });

  it('Verify if have the FieldHack component with the content: Fundos de Investimento', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Fundos de Investimento');
  });

  it('Verify if have the FieldHack component with the content: Outros', function() {
    cy.visit('/survey/3');

    cy.get('label').contains('Outros');
  });

  it('When click on ButtonHack have that to going for /survey/3', function() {
    cy.visit('/survey/3');

    cy.contains('Avançar').click();
    cy.url().should('includes', '/survey/4');
  });

  it('Open page 4', function() {
    cy.visit('/survey/4');

    cy.contains(
      'Tudo certo! Já conseguimos montar o melhor plano de apredizado para você!'
    );
  });
});
