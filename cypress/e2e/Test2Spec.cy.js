

describe("Automation Exercise Website - Create an Account or Log In-Incorrect Scenario", function(){

    it("My FirstTest Case", function(){

        cy.visit("https://automationexercise.com/");

        // Ensure the user is on the login page
           cy.url().should('include', '/login');

        it('Login user with invalid credentials', function()  {
            // Click on the 'Signup / Login' button
            cy.contains('Signup / Login').click();
        
            // Ensure the user is on the login page
            cy.url().should('include', '/login');
        
            // Enter invalid email and password
            cy.get('[data-qa="login-email"]').type('invalidemail@example.com');
            cy.get('[data-qa="login-password"]').type('invalidpassword');
        
            // Click the 'Login' button
            cy.get('[data-qa="login-button"]').click();
        
            // Verify error message for invalid credentials
            cy.contains('Your email or password is incorrect!').should('be.visible');

    })
})

})