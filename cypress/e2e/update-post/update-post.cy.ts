describe('Página de Atualização de Posts', () => {
  it('Atualizar Post', () => {
    cy.visit('/welcome/updatePosts');

    cy.wait(1000);

    cy.get('span[class="ng-star-inserted"]')
      .parents('button[class="ant-btn ant-btn-primary ng-star-inserted"]')
      .click();

    cy.get('p[class="ng-star-inserted"]').should('be.visible');

    cy.get('select[formcontrolname="post"]').select([1]);

    cy.get('p[class="ng-star-inserted"]').should('be.visible');

    cy.get('textarea[formcontrolname]').type('a');

    cy.get('p[class="ng-star-inserted"]').should('be.visible');

    cy.get('textarea[formcontrolname]').type('Novo conteúdo da publicação');

    cy.get('span[class="ng-star-inserted"]')
      .parents('button[class="ant-btn ant-btn-primary ng-star-inserted"]')
      .click();

    cy.get('button[data-cy="btn-see-post"]').click();
    cy.get('button[data-cy="btn-see-update-post"]').click();

    cy.get('button[class="ant-btn ng-star-inserted"]').click();

    cy.wait(500);

    cy.get('button[data-cy="btn-see-update-post"]').click();

    cy.get('button[class="ant-btn ant-btn-primary ng-star-inserted"]').click();

    cy.get(
      'button[class="ant-btn button-new-post ant-btn-primary ng-star-inserted"]'
    ).click();
    cy.get('a[data-cy="nav-welcome"]').click();
  });
});
