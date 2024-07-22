describe('orange test', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('input[name="username"]').then(($username)=>{

            //expect($username).to.have.attr('placeholde', 'Username');
            expect($username).to.have.attr('placeholder', 'Username');


            cy.wrap($username).type('Admin');
        })


        cy.get('input[class="oxd-input oxd-input--active"][name="password"]').then(($passs)=>{
            expect($passs).to.have.attr('placeholder','Password');

            cy.wrap($passs).type('admin123')
        })

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').then(($log)=>{
            expect($log).to.have.attr('type','submit');
            cy.wrap($log).click();
        })
         cy.wait(2000);
        cy.get('.oxd-userdropdown-tab').click();
        
        

       // cy.get('.oxd-dropdown-menu').find('oxd-userdropdown-link').each(($outit)=>{
        //if ($outit.text()=='Logout') {
          // cy.wrap($outit).click();
        
        //}
    
        
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($outit) => {
            if ($outit.text() === 'Logout') {
                cy.wrap($outit).click();
            }
        
        
       
        });
        
    cy.get('[value="radio1"]').check().should('be.visible').and('be.checked').and('have.attr','type','radio');
        
        
          
        
    });
});