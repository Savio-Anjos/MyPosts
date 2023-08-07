describe('Página de criação de Posts', () => {
  it('Criar Post', () => {
    cy.visit('/');
    cy.get('a[data-cy="link-create-posts"]').click();

    cy.get('input[id="title"]')
      .filter('.ng-untouched')
      .type('Minha publicação');

    cy.get(
      'textarea[class="ng-untouched ng-pristine ng-invalid ng-star-inserted"]'
    ).type('Conteúdo da minha publicação');

    cy.get('button[class="ant-btn ant-btn-primary ng-star-inserted"]').click();

    cy.get('button[data-cy="btn-see-create-post"]').click();

    cy.get('button[class="ant-btn ng-star-inserted"]').click();

    cy.get('button[data-cy="btn-see-create-post"]').click();

    cy.get('button[class="ant-btn ant-btn-primary ng-star-inserted"]').click();

    cy.get(
      'button[class="ant-btn button-new-post ant-btn-primary ng-star-inserted"]'
    ).click();
    cy.get('li[data-cy="menu-dashboard"]').click();

    cy.get('a[data-cy="nav-welcome"]').click({ force: true });
  });
});
