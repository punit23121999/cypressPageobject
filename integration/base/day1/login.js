describe('flipkart', () => {
    it('test', () => {
        cy.visit('https://www.flipkart.com/events-central-goat-sale-store?param=674')
        cy.get("input[placeholder='Search for products, brands and more']").type("T-Shirt");
        cy.get('[href="/account/login?ret=/events-central-goat-sale-store%3Fparam%3D674"]').click()
        cy.get()
    });
});