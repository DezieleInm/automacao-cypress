describe('Cenário 1: Buscar um produto', () => {
  it('Deve buscar por um produto e visualizar os resultados', () => {
    // Passo 1: Acessar o site
    cy.visit('https://advantageonlineshopping.com/#/');
    
    // Passo 2: Clicar no botão de pesquisa
    cy.get('#mobileSearch > #menuSearch').click(); 
    
    // Passo 3: Adionar um produto no carrinho
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').first().click();

   // Passo 4: Clicar  no carrinho
   cy.get('.fixedBtn > .roboto-medium').click();

   // Passo 5: validar produto no carrinho
   cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click();

  });
});
