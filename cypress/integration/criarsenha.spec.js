import CriarSenhaPage from '../pages/criarSenhaPage';

describe('Testes de Criação de Senha', () => {
    const criarSenhaPage = new CriarSenhaPage();

    beforeEach(() => {
        cy.visit('/criar-senha');
    });

    it('Deve permitir criar senha com CPF e celular válidos', () => {
        criarSenhaPage.preencherNumeroCelular('11987654321');
        criarSenhaPage.preencherCPF('12345678901');
        criarSenhaPage.clickCadastrarSenha();
        cy.url().should('include', '/senha-criada-sucesso');  // Verifica se foi redirecionado para tela de sucesso
    });

    it('Deve exibir erro ao tentar criar senha com CPF inválido', () => {
        criarSenhaPage.preencherNumeroCelular('11987654321');
        criarSenhaPage.preencherCPF('cpf_invalido');
        criarSenhaPage.clickCadastrarSenha();
        criarSenhaPage.verificarMensagemDeErro('CPF inválido');
    });

    it('Deve exibir erro ao tentar criar senha com número de celular inválido', () => {
        criarSenhaPage.preencherNumeroCelular('numero_invalido');
        criarSenhaPage.preencherCPF('12345678901');
        criarSenhaPage.clickCadastrarSenha();
        criarSenhaPage.verificarMensagemDeErro('Número de celular inválido');
    });

    it('Deve exibir informações adicionais ao clicar em "Saiba mais sobre o celular seguro"', () => {
        criarSenhaPage.clickSaibaMais();
        cy.url().should('include', '/celular-seguro');
    });
});
