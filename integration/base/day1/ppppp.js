describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//button[@class="btn btn-primary"and contains(text(),"Home")]').click();
        cy.xpath('//a[contains(text(),"Register")]').click();
        cy.get('input[class="inputs ui-autocomplete-input"]').type('india');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().contains('Blog').click();
        //a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]
    });
    it('', () => {
       cy.visit('https://jqueryui.com/datepicker/') 
       cy.xpath('//iframe[@class="demo-frame"]');
       cy.iframe().contains('Date').type('17/09/2023{enter}');
    });
});