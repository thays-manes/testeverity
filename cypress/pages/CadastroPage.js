class CriarSenhaPage {
    preencherNumeroCelular(numeroCelular) {
        cy.get('input[name="numeroCelular"]').type(numeroCelular);
    }

    preencherCPF(cpf) {
        cy.get('input[name="cpf"]').type(cpf);
    }

    clickSaibaMais() {
        cy.get('a').contains('Saiba mais sobre o celular seguro').click();
    }

    clickCadastrarSenha() {
        cy.get('button').contains('Cadastrar senha').click();
    }

    verificarMensagemDeErro(mensagem) {
        cy.contains(mensagem).should('be.visible');
    }
}

export default CriarSenhaPage;
