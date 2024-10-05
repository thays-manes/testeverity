class NavegacaoPage {
    clickQueroConhecerProdutos() {
        cy.get('button').contains('Quero conhecer os produtos').click();
    }

    clickFaleComAGente() {
        cy.get('button').contains('Fale com a gente').click();
    }

    verificarRedirecionamento(urlEsperado) {
        cy.url().should('include', urlEsperado);
    }
}

export default NavegacaoPage;
