

describe('Automation Exercise Website - Account Logout', function() {

    // Visit the website before each test
    beforeEach(function() {
      cy.visit('https://automationexercise.com');
         });
  
    it('Login user with valid credentials', function() {
      // Click on the 'Signup / Login' button
      cy.contains('Signup / Login').click();
  
      // Ensure the user is on the login page
      cy.url().should('include', '/login');
  
      // Enter valid email and password
      cy.get('[data-qa="login-email"]').type('anadesale@gmail.com');
      cy.get('[data-qa="login-password"]').type('anadesale@16');
  
      // Click the 'Login' button
      cy.get('[data-qa="login-button"]').click();

      it('Should delete the account and verify the deletion confirmation', () => {
        // Click the 'Delete Account' button
        cy.contains('Delete Account').click();
    
        // Verify that the "ACCOUNT DELETED!" message is visible
        cy.contains('ACCOUNT DELETED!').should('be.visible');
    
        // Click the 'Continue' button after account deletion
        cy.contains('Continue').click();
    
        // Optionally, verify redirection after clicking 'Continue' (e.g., back to the homepage)
        cy.url().should('eq', 'https://automationexercise.com/'); // Adjust URL as needed
      });
    });
});
