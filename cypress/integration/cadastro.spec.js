import CadastroPage from '../pages/cadastroPage';

describe('Testes de Cadastro', () => {
    const cadastroPage = new CadastroPage();

    beforeEach(() => {
        cadastroPage.visit();
    });

    it('Deve realizar cadastro com sucesso', () => {
        cadastroPage.preencherNome('Novo Usuário');
        cadastroPage.preencherEmail('novo@usuario.com');
        cadastroPage.preencherSenha('senha123');
        cadastroPage.clickCadastrar();
        cy.url().should('include', '/login');  // Verifica se foi redirecionado para a tela de login
    });

    it('Deve exibir erro ao tentar cadastrar com e-mail inválido', () => {
        cadastroPage.preencherNome('Novo Usuário');
        cadastroPage.preencherEmail('email_invalido');
        cadastroPage.preencherSenha('senha123');
        cadastroPage.clickCadastrar();
        cadastroPage.verificarMensagemDeErro('E-mail inválido');
    });

    it('Deve exibir erro ao tentar cadastrar com CPF inválido', () => {
        cadastroPage.preencherCpf('cpf_invalido');
        cadastroPage.preencherSenha('senha123');
        cadastroPage.clickCadastrar();
        cadastroPage.verificarMensagemDeErro('CPF inválido');
    });

    it('Deve exibir erro ao tentar cadastrar um telefone seguro inválido', () => {
        cadastroPage.preencherCelularSeguro('celular_seguro');
        cadastroPage.preencherEmail('cpf_invalido');
        cadastroPage.preencherSenha('senha123');
        cadastroPage.clickCadastrar();
        cadastroPage.verificarMensagemDeErro('CPF inválido');
    });

});
