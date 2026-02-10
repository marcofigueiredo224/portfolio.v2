describe('Demo - Convidar usuários', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('habilita botão ao preencher obrigatórios', () => {
    cy.get('#enviar')
      .should('be.disabled')
      .and('have.class', 'blue-btn-disabled');

    cy.get('#nome').type('Usuario Teste');
    cy.get('#email').type('teste+001@dominio.com');
    cy.get('#filial').select('Matriz');
    cy.get('#perfil').select('Operador');

    cy.get('#enviar')
      .should('not.be.disabled')
      .and('not.have.class', 'blue-btn-disabled');
  });

  it('desabilita ao invalidar e-mail', () => {
    cy.get('#nome').type('Usuario Teste');
    cy.get('#email').type('teste@dominio.com');
    cy.get('#filial').select('Matriz');
    cy.get('#perfil').select('Operador');

    cy.get('#enviar').should('not.be.disabled');

    cy.get('#email').clear().type('abc@');
    cy.get('#enviar')
      .should('be.disabled')
      .and('have.class', 'blue-btn-disabled');
  });
});
