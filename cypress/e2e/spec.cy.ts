describe('MyPost Test', () => {
  it('Full Test', () => {
    cy.visit('/');

    //Página de listagem
    cy.get('a[routerlink="/welcome/list"]')
      .contains('Listar todas as publicações')
      .click();

    cy.get('input[class="ng-untouched ng-pristine ng-valid"').invoke('val', 10);

    cy.wait(1000);

    cy.get('button[class="ant-btn ant-btn-primary"]').click();

    cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

    cy.get('a[routerlink="/welcome/userPosts"]')
      .contains('Listar publicações do usuário conectado')
      .click();

    //Página de listagem de postagens de cada usuário

    cy.get('svg[data-icon="user-switch"]').click();

    cy.wait(2000);

    cy.get('svg[data-icon="user-switch"]').click();

    cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

    cy.get('span[class="ng-star-inserted"]').contains('Dashboard').click();

    //Página de criação de Posts

    cy.get('a[routerlink="/welcome/createPosts"]')
      .contains('Criar Publicação')
      .click();

    cy.get('input[id="title"]')
      .filter('.ng-untouched')
      .type('Minha publicação');

    cy.get(
      'textarea[class="ng-untouched ng-pristine ng-invalid ng-star-inserted"]'
    ).type('Conteúdo da minha publicação');

    cy.get('button[class="ant-btn ant-btn-primary ng-star-inserted"]').click();

    cy.get('span[class="ng-star-inserted"]').contains('Ver Publicação').click();

    cy.get('span[class="ng-star-inserted"]').contains('Cancel').click();

    cy.get('span[class="ng-star-inserted"]').contains('Ver Publicação').click();

    cy.get('span[class="ng-star-inserted"]').contains('OK').click();

    cy.get('span[class="ng-star-inserted"]')
      .contains('Nova Publicação')
      .parents(
        'button[class="ant-btn button-new-post ant-btn-primary ng-star-inserted"]'
      )
      .click();
    cy.get('span[class="ng-star-inserted"]').contains('Dashboard').click();

    cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

    cy.get('a[routerlink="/welcome/updatePosts"]');
  });
});
