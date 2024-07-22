class logout_po{
    logout(){
     cy.get('p[class="oxd-userdropdown-name"]').click()
     cy.get('.oxd-dropdown-mean').find('.oxd-userdrop down-link').should('have.lenght',4)
     cy.get('a["href=/web/index.php/auth/logout"]')

    }
}

export default logout_po;