import LoginPage from '../pages/loginPage';

describe('Testes de Login', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('Deve realizar login com sucesso', () => {
        loginPage.preencherCPF('12345678901');
        loginPage.preencherSenha('senha_valida');
        loginPage.clickContinuar();
        cy.url().should('include', '/dashboard');  // Verifica se foi redirecionado para o dashboard
    });

    it('Deve exibir erro ao tentar login com CPF inválido', () => {
        loginPage.preencherCPF('cpf_invalido');
        loginPage.preencherSenha('senha_valida');
        loginPage.clickContinuar();
        loginPage.verificarMensagemDeErro('CPF inválido');
    });

    it('Deve exibir erro ao tentar login com senha inválida', () => {
        loginPage.preencherCPF('12345678901');
        loginPage.preencherSenha('senha_invalida');
        loginPage.clickContinuar();
        loginPage.verificarMensagemDeErro('Senha incorreta');
    });

    it('Deve redirecionar para recuperação de senha ao clicar em "Esqueci a senha"', () => {
        loginPage.clickEsqueciSenha();
        cy.url().should('include', '/esqueci-senha');
    });

    it('Deve redirecionar para a tela de criação de senha ao clicar em "Crie sua senha"', () => {
        loginPage.clickCrieSuaSenha();
        cy.url().should('include', '/criar-senha');
    });
});
