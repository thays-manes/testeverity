import NavegacaoPage from '../pages/navegacaoPage';

describe('Testes de Navegação', () => {
    const navegacaoPage = new NavegacaoPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve redirecionar para a página de produtos', () => {
        navegacaoPage.clickQueroConhecerProdutos();
        navegacaoPage.verificarRedirecionamento('/produtos');
    });

    it('Deve redirecionar para a página de contato', () => {
        navegacaoPage.clickFaleComAGente();
        navegacaoPage.verificarRedirecionamento('/contato');
    });
});
