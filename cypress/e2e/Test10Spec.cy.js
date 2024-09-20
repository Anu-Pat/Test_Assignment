


describe('Automation Exercise Website - Delete Logout', function() {

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
      cy.get('[data-qa="login-email"]').type('dummyuser@gmail.com');
      cy.get('[data-qa="login-password"]').type('dummyuser123');
  
      // Click the 'Login' button
      cy.get('[data-qa="login-button"]').click();

      // Validate that the user has successfully logged in
      cy.contains('Logout').should('be.visible');

    });
  
});