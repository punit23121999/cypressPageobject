before(() => {

    
    cy.fixture('example').then((data)=>{
        globalThis.data= data;
    })

    
})

describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[name='username']").type(data.username);
        cy.get("input[type='password']").type(data.password);
        cy.xpath('//button[ @class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();   
    });
});
