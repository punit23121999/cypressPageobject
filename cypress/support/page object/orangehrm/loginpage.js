class Login_po{

    Enterurl(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }


   



Login(){

    cy.get('input[name="username"').type('Admin');
    cy.get('input[class="oxd-input oxd-input--active"][name="password"]').type('admin1234');
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
}

}


export default Login_po;






