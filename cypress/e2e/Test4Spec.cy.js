

describe('Automation Exercise Website - Add Products to Cart: ', function() {

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

      it('Browse products and add one to the cart from the homepage', function ()  {

        // Ensure the user is on the homepage
        cy.url().should('include', 'automationexercise.com');

    // Browse a product by hovering over the first product and clicking "Add to cart"
    cy.get('.product-grid .product-overlay').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    // Verify the cart page is displayed and product is added
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('contain.text', 'Product');

 // Verify the product is displayed into cart
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('contain.text', 'Product');

});

});
}); 
