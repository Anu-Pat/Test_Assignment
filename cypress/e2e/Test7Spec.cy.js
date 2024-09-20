

describe('Automation Exercise Website - Scroll to Bottom of the Page on Automation Exercise', function() {

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

      it('Should scroll to the bottom of the page and verify content', function() {
        // Scroll to the bottom of the page
        cy.scrollTo('bottom');
    
        // Add a wait to ensure all content loads
        cy.wait(1000);  // Adjust time if needed to allow all elements to load
    
        // Verify specific content at the bottom of the page is visible (footer in this case)
        cy.get('footer').should('be.visible');
    
        // Example: Verify social media icons are visible in the footer
        cy.get('.social-icons').should('be.visible');
    
        // Example: Verify the "Subscribe" section or text at the bottom is loaded
        cy.contains('Subscription').should('be.visible');
      });
    });
});