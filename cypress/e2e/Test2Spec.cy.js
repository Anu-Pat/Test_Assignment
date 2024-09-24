

describe("Automation Exercise Website - Create an Account or Log In - With Incorrect Credentials Scenario", function(){

    it('Login user with invalid credentials', function()  {

        cy.visit("https://automationexercise.com/");

      
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
