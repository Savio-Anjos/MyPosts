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
  });
});
