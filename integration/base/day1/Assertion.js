


describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.url().should('include','AutomationPractice');//check foe url

        cy.title().should('include','Practice');//check title


        cy.get('input[id="displayed-text"]').should('be.visible')// visible use by be.visible


        cy.get('input[id="hide-textbox"]').click();

        cy.get('input[id="displayed-text"]').should('not.be.visible');//check not. be.visible

        //cy.get('input[id="autocomplete"]').type('wednesday').should('be.visible','wednesday');
        //suggition check (be.visible)

        cy.get('input[id="checkBoxOption1"]').check().should('be.checked');// check box [1]

        cy.get('input[id="checkBoxOption2"]').check().should('be.checked');// check box [2]

        cy.xpath('//input[@type="checkbox" and @id="checkBoxOption3"]').check().should('be.checked');
        // check by xpath check box 3

        //cy.get('button[class="btn-style class1"]').click();//new window open

        cy.get('[value="radio1"]').check().should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.get('[id="autocomplete"]').each(($each)=>{
            if($each.text === 'Finland'){
                cy.wrap($each).click();
            }
        })

        cy.get('option[value="option1"]');
        cy.select('Option2').should('be.value','Option2');



    });
});