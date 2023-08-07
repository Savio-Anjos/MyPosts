describe('MyPost Test', () => {
  describe('Full Test', () => {
    //Página de listagem

    it('Página de listagem', () => {
      cy.visit('/');
      cy.get('a[routerlink="/welcome/list"]')
        .contains('Listar todas as publicações')
        .click();

      cy.get('input[class="ng-untouched ng-pristine ng-valid"').invoke(
        'val',
        10
      );

      cy.wait(1000);

      cy.get('button[class="ant-btn ant-btn-primary"]').click();

      cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

      cy.get('a[routerlink="/welcome/userPosts"]')
        .contains('Listar publicações do usuário conectado')
        .click();
    });

    //Página de listagem de postagens de cada usuário

    it('Página de listagem de postagens de cada usuário', () => {
      cy.visit('/welcome/userPosts');
      cy.get('svg[data-icon="user-switch"]').click();

      cy.wait(2000);

      cy.get('svg[data-icon="user-switch"]').click();

      cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

      cy.get('span[class="ng-star-inserted"]').contains('Dashboard').click();
    });

    //Página de criação de Posts
    it('Página de criação de Posts', () => {
      cy.visit('/');
      cy.get('a[routerlink="/welcome/createPosts"]')
        .contains('Criar Publicação')
        .click();

      cy.get('input[id="title"]')
        .filter('.ng-untouched')
        .type('Minha publicação');

      cy.get(
        'textarea[class="ng-untouched ng-pristine ng-invalid ng-star-inserted"]'
      ).type('Conteúdo da minha publicação');

      cy.get(
        'button[class="ant-btn ant-btn-primary ng-star-inserted"]'
      ).click();

      cy.get('span[class="ng-star-inserted"]')
        .contains('Ver Publicação')
        .click();

      cy.get('span[class="ng-star-inserted"]').contains('Cancel').click();

      cy.get('span[class="ng-star-inserted"]')
        .contains('Ver Publicação')
        .click();

      cy.get('span[class="ng-star-inserted"]').contains('OK').click();

      cy.get('span[class="ng-star-inserted"]')
        .contains('Nova Publicação')
        .parents(
          'button[class="ant-btn button-new-post ant-btn-primary ng-star-inserted"]'
        )
        .click();
      cy.get('span[class="ng-star-inserted"]').contains('Dashboard').click();

      cy.get('a[routerlink="/welcome"]')
        .contains('Welcome')
        .click({ force: true });

      cy.get('a[routerlink="/welcome/updatePosts"]');
    });

    //Página de Atualização de Posts

    it('Página de Atualização de Posts', () => {
      cy.visit('/welcome/updatePosts');
      cy.contains('Atualizar Publicação').click();

      cy.wait(1000);

      cy.get('span[class="ng-star-inserted"]')
        .contains('Atualizar Publicação')
        .parents('button[class="ant-btn ant-btn-primary ng-star-inserted"]')
        .click();

      cy.get('p[class="ng-star-inserted"]').should('be.visible');

      cy.get('select[formcontrolname="post"]').select([1]);

      cy.get('p[class="ng-star-inserted"]').should('be.visible');

      cy.get('textarea[formcontrolname]').type('a');

      cy.get('p[class="ng-star-inserted"]').should('be.visible');

      cy.get('textarea[formcontrolname]').type('Novo conteúdo da publicação');

      cy.get('span[class="ng-star-inserted"]')
        .contains('Atualizar Publicação')
        .parents('button[class="ant-btn ant-btn-primary ng-star-inserted"]')
        .click();

      cy.get('span[class="ng-star-inserted"]')
        .contains('Ver Publicação')
        .click();

      cy.get('span[class="ng-star-inserted"]').contains('Cancel').click();

      cy.wait(500);

      cy.get('span[class="ng-star-inserted"]')
        .contains('Ver Publicação')
        .click();

      cy.get('span[class="ng-star-inserted"]').contains('OK').click();

      cy.get('span[class="ng-star-inserted"]')
        .contains('Nova Publicação')
        .parents(
          'button[class="ant-btn button-new-post ant-btn-primary ng-star-inserted"]'
        )
        .click();

      cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

      cy.get('a[routerlink="/welcome/deletePosts"]')
        .contains('Deletar Publicação')
        .click();
    });

    //Página de Deletar Posts

    it('Página de Deletar Posts', () => {
      cy.visit('/welcome/deletePosts');

      cy.get(
        'button[class="ant-btn button-delete ant-btn-primary ng-star-inserted"]'
      ).click();

      cy.get('p[class="ng-star-inserted"]').should('be.visible');

      cy.get('select[formcontrolname="post"]').select([1]);

      cy.get(
        'button[class="ant-btn button-delete ant-btn-primary ng-star-inserted"]'
      ).click();

      cy.get('a[routerlink="/welcome"]').contains('Welcome').click();

      cy.get('div[ng-reflect-nz-title="Modify Posts"]')
        .filter('.ant-menu-submenu-title')
        .click();

      cy.get('span[class="ng-star-inserted"]').contains('Dashboard').click();
    });
  });
});
