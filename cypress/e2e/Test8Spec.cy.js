

describe('Automation Exercise Website - Manual Scroll Up on Automation Exercise Without Arrow Button', function() {

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

      it('Should scroll up without using the arrow button', function() {
        // Scroll to the bottom of the page first
        cy.scrollTo('bottom');
    
        // Add a wait to ensure all content loads
        cy.wait(1000);
    
        // Manually scroll up using Cypress's scroll functionality
        cy.scrollTo('top', { duration: 2000 }); // Scroll up smoothly to the top over 2 seconds
    
        // Ensure that the page scrolls up and reaches the top
        cy.window().its('scrollY').should('equal', 0); // Verify that the scroll position is at the top
    
        // Verify an element at the top is visible after scrolling (e.g., header or navbar)
        cy.get('.navbar').should('be.visible');
      });
    });

});