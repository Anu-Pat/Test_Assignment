

describe('Automation Exercise Website - Account Logout', function() {


  
    it('Login user with valid credentials', function() {
      cy.visit('https://automationexercise.com');

      // Click on the 'Signup / Login' button
      cy.contains('Signup / Login').click();

      // Ensure the user is on the login page
      cy.url().should('include', '/login');
      
      // Enter valid email and name
      cy.get('[data-qa="signup-name"]').type('validuser1234');
      cy.get('[data-qa="signup-email"]').type('validuser1234@gmail.com');

      // Click the 'Signup' button
      cy.get('[data-qa="signup-button"]').click();

      cy.get('[data-qa="password"]').type('validuser1234');

      cy.get('[data-qa="first_name"]').type('validuser1234');
      cy.get('[data-qa="last_name"]').type('validuser1234');
      cy.get('[data-qa="address"]').type('validuser1234 st');
      cy.get('[data-qa="state"]').type('NSW');
      cy.get('[data-qa="city"]').type('Sydney');
      cy.get('[data-qa="zipcode"]').type('2000');
      cy.get('[data-qa="mobile_number"]').type('836378888');

      cy.get('[data-qa="create-account"]').click();
      
      // Verify that the "ACCOUNT Created!" message is visible
      cy.contains('Account Created!').should('be.visible');

      // Click the 'continue' button
      cy.get('[data-qa="continue-button"]').click()


        // Click the 'Delete Account' button
        cy.contains('Delete Account').click();
    
        // Verify that the "ACCOUNT DELETED!" message is visible
        cy.contains('Account Deleted!').should('be.visible');
    
        // Click the 'Continue' button after account deletion
       cy.contains('Continue').click();
    
 
    });
});
