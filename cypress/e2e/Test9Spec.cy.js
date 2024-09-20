

describe('Automation Exercise Website - Verify Scroll Up Behavior on Automation Exercise', function() {

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

it('Should scroll up and ensure important content is visible without reload or layout shift', function ()  {
    // Scroll to the bottom of the page first
    cy.scrollTo('bottom');
    
    // Add a wait to ensure all content loads
    cy.wait(1000);

    // Manually scroll up
    cy.scrollTo('top', { duration: 2000 }); // Smooth scroll up

    // Verify that the scroll position is at the top
    cy.window().its('scrollY').should('equal', 0);

    // Verify important content becomes visible again
    // Example: Navigation bar and header should be visible
    cy.get('.navbar').should('be.visible');
    cy.get('header').should('be.visible');

    // Verify no page reload occurred
    cy.window().should('have.property', 'performance')
      .then((performance) => {
        const navigationEntries = performance.getEntriesByType('navigation');
        expect(navigationEntries[0].type).to.not.equal('reload'); // Ensure the page was not reloaded
      });

    // Verify no layout shift occurred (optional if specific layout checks are needed)
    cy.document().then((doc) => {
      const initialLayout = doc.documentElement.scrollHeight;
      cy.scrollTo('bottom');  // Scroll back to bottom
      cy.scrollTo('top', { duration: 1000 });  // Scroll up again
      cy.document().then((docAfter) => {
        const finalLayout = docAfter.documentElement.scrollHeight;
        expect(initialLayout).to.equal(finalLayout); // No layout shift
      });
    });
});
});
});
