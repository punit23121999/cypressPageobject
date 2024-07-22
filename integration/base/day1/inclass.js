describe('', () => {
    it('', () => {
        cy.visit('https://www.google.co.in/')

        cy.xpath('//textarea[@title="Search" and @title="Search"and @aria-autocomplete="both"]').type('masai school','{enter}');
        cy.contains('masai people').scrollIntoView().click();
    });
});