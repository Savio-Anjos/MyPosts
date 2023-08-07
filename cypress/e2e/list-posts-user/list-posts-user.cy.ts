describe('Página de listagem de postagens de cada usuário', () => {
  it('Exibir postagens do usuario logado', () => {
    cy.visit('/welcome/userPosts');
    cy.get('svg[data-icon="user-switch"]').click();

    cy.wait(2000);

    cy.get('svg[data-icon="user-switch"]').click();
    cy.get('a[data-cy="nav-welcome"]').click();

    cy.get('a[data-cy="nav-welcome"]').click();
  });
});
