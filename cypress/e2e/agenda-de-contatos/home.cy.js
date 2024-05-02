/// <reference types='cypress' />

describe("Teste para a home", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    // -- TESTE DE ADD
    it("Deve incluir informações no formulário", () => {
      cy.get('input[type="text"]').type("Luan"); 
      cy.get('input[type="email"]').type("devluancontato@gmail.com"); 
      cy.get('input[type="tel"]').type("83999525761"); 
      cy.contains("Adicionar").click(); 
      cy.screenshot("teste-incluir"); 
    });
    // -- TESTE DE EDITOR
    it("Deve alterar a informação da lista", () => {
      cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); 
      cy.get('input[type="text"]').clear().type("Luan"); 
      cy.get('input[type="email"]').clear().type("devluancontato@gmail.com"); 
      cy.get('input[type="tel"]').clear().type("83999525761"); 
      cy.get(".alterar").click(); 
      cy.screenshot("teste-editar"); 
    });
    // -- TESTE DE DELETE
    it("Deve remover um contato da lista", () => {
      cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); 
      cy.screenshot("teste-remover"); 
    });
  });