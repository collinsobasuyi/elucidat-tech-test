class pages {
    getStartButton() {
        return cy.get('[id*=-textButton]').contains('START');
    }
    getEmail(){
        return cy.get('#reg_email');
    }
    getPassword(){
        return cy.get('#reg_password');
    }
    getLoginUserName(){
        return cy.get('#username');
    }
    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
    }
    export default pages