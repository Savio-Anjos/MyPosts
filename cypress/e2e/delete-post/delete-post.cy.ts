describe('Página de Deletar Posts', () => {
  it('Deletar Post', () => {
    cy.visit('/welcome/deletePosts');

    cy.get(
      'button[class="ant-btn button-delete ant-btn-primary ng-star-inserted"]'
    ).click();

    cy.get('p[class="ng-star-inserted"]').should('be.visible');

    cy.get('select[formcontrolname="post"]').select([1]);

    cy.get(
      'button[class="ant-btn button-delete ant-btn-primary ng-star-inserted"]'
    ).click();
    cy.get('a[data-cy="nav-welcome"]').click();

    cy.get('div[ng-reflect-nz-title="Modify Posts"]')
      .filter('.ant-menu-submenu-title')
      .click();

    cy.get('a[data-cy="nav-welcome"]').click();
  });
});
