class LoginPage {
    visit() {
        cy.visit('/login');
    }

    preencherCPF(cpf) {
        cy.get('input[name="cpf"]').type(cpf);
    }

    preencherSenha(senha) {
        cy.get('input[name="senha"]').type(senha);
    }

    clickContinuar() {
        cy.get('button').contains('Login').click();
    }

    clickEsqueciSenha() {
        cy.get('a').contains('Esqueci a senha').click();
    }

    clickCrieSuaSenha() {
        cy.get('a').contains('Crie sua senha').click();
    }

    verificarMensagemDeErro(mensagem) {
        cy.contains(mensagem).should('be.visible');
    }
}

export default LoginPage;
