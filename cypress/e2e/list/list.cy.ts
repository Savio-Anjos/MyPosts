describe('MyPost Test', () => {
  it('Exibir listagem geral de posts', () => {
    cy.visit('/');
    cy.get('a[data-cy="link-all-posts"]').click();

    cy.get('input[class="ng-untouched ng-pristine ng-valid"').should(
      'be.visible'
    );

    cy.get('input[class="ng-untouched ng-pristine ng-valid"').invoke('val', 10);

    cy.wait(1000);

    cy.get('button[class="ant-btn ant-btn-primary"]').click();
    cy.get('a[data-cy="nav-welcome"]').click();
  });
});
