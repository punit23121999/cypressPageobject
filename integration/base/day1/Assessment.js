describe('', () => {
    it('', () => {
        cy.visit('https://automationteststore.com/')
        //cy.wait(5000);
        //cy.get('.current > [href="https://automationteststore.com/index.php?rt=product/category&path=68"]').contains(' Apparel & accessories').click();  
         cy.get('[class="current"]');  
    });
});