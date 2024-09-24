

describe('Automation Exercise Website - Proceed to Checkout: Skip required fields during checkout and verify that validation messages are triggered and Proceed to Checkout with all necessary detail, the Download the Invoice, After completing the purchase, download the invoice', function() {

    // Visit the website before each test
    beforeEach(function() {
      
    });
  
    it('Login user with valid credentials', function() {
 //The file path for the downloaded invoice
 const filePath = 'cypress/downloads/invoice.txt';
      cy.visit('https://automationexercise.com');

      // Click on the 'Signup / Login' button
      cy.contains('Signup / Login').click();
  
      // Ensure the user is on the login page
      cy.url().should('include', '/login');
  
      // Enter valid email and password
      cy.get('[data-qa="login-email"]').type('dummyuser@gmail.com');
      cy.get('[data-qa="login-password"]').type('dummyuser123');
  
      // Click the 'Login' button
      cy.get('[data-qa="login-button"]').click();


      // Ensure the user is on the homepage
      cy.url().should('include', 'automationexercise.com');

      // Browse a product by hovering over the first product and clicking "Add to cart"
      cy.get('a[href*="/products"]').click()
      cy.contains('Add to cart').first().click();

      // Verify the cart page is displayed and product is added
      cy.contains('View Cart').click()


 
      cy.url().should('include', '/view_cart');
      cy.get('.cart_description').should('contain.text', 'Tops');
      cy.get('.cart_price').should('contain.text', '500');
    
      cy.contains('Proceed To Checkout').click()
      cy.contains('Place Order').click()
    
      // Fill the payment details 
      cy.get('input[name="name_on_card"]').type('John Citizen');          // Add Test card name
      cy.get('input[name="card_number"]').type('11111111111111');        //Add Test card number
      cy.get('input[name="cvc"]').type('133');                          //Add cvc
      cy.get('input[name="expiry_month"]').type('10');                 //Add expiray month
                        
    
      cy.contains('Pay and Confirm Order').click()

     cy.get('#payment-form').within(function()  {
     cy.get('input[name="expiry_year"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')

      cy.get('input[name="expiry_year"]').type('2025'); 


     //Click on the submit button again to submit the form
     cy.get('#submit').click();
     
      //The file path for the downloaded invoice
   const filePath = 'cypress/downloads/invoice.txt';

    //Click 'Download Invoice' button and verify invoice is downloaded successfully
   // cy.get(".btn.btn-default.check_out").click();

    cy.readFile(filePath).should('exist');

   
    })
     });
 
})