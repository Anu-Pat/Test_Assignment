

describe('Automation Exercise Website - Proceed to Checkout: Skip required fields during checkout and verify that validation messages are triggered', function() {

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

    cy.get('button.proceed-checkout').click();

    // Fill in checkout details (assuming details are required)
    cy.get('#address').type('123 Cypress St.');
    cy.get('#city').type('Sydney');
    cy.get('#postcode').type('2000');
    cy.get('#payment-method').click(); // Selecting the payment method
    cy.get('#card-number').type('4111111111111111');  // Test card number
    cy.get('#expiry-date').type('12/25');              //Add expiray date
    cy.get('#cvv').type('');                           //Skip this fill
    
    // Submit the order
    cy.get('button.confirm-purchase').click();

    // Validate purchase
    cy.get('.order-success-message').should('contain', 'Plesase fill out this field!');
     });
  });

 });
