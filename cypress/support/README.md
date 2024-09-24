AutomationExercise.com: Automation Testing with Cypress
==========================================

Project Overview
----------------

This project contains a suite of automated tests for an e-commerce website using the Cypress testing framework. The goal is to ensure the website's critical functionalities, such as user authentication, product management, and checkout processes, work as expected and provide a seamless user experience.
---------------------------------------

Website : https://automationexercise.com/
----------------------------------------

Scenarios
--------
1. Test1Spec
This Test scenario will test the Website URL functionality 

2. Test2Spec
This Test scenario will test the Create an Account or Log In with Incorrect Credentials Scenario

3. Test3Spec
This Test scenario will test the Create an Account or Log In with Correct Credentials Scenario

4. Test4Spec
This Test scenario will test the Add Products to Cart

5. Test5Spec
This Test scenario will test the Proceed to Checkout with Skip required fields during checkout and verify that validation messages are triggered'
This Test scenario will test the Proceed to Checkout with all necessary details (address, payment method, etc.) and check the
billing and delivery address are same and check complete the purchase
This Test scenario will test the Download the Invoice, After completing the purchase, download the invoice. 

6. Test6Spec
This Test scenario will test the Scroll to Bottom of the Page on Automation Exercise Homepage
This Test scenario will test the Scroll Up Without Using the 'Arrow' Button
This Test scenario will test the Scroll Up Behavior like all important content becomes visible again when scroll up
This Test scenario will test the the page should not be reloaded or cause any layout shifting while scrolling up

7. Test7Spec
This Test scenario will test the Create New user Signup and then Verify Delete Account and click with 'Continue' button


---------------------------------------

        

Tech Stack
----------

*   **Cypress**: The primary testing framework for writing and executing the automated tests.
    
*   **JavaScript**: The programming language used for test scripting.
    

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Anu-Pat/Test_Assignment.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Cypress Automation Exercise
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Running Tests

1. **To run all tests:**

    ```bash
    npm run cypress:open
    ```

    This will open the Cypress Test Runner where you can select and execute your tests.

2. **To run tests in headless mode:**

    ```bash
    npm run cypress:run
    ```

3. **Cypress Commands**

    npx cypress verify: Verify Cypress installation.
    npx cypress run --browser chrome: Run tests in a specific browser (e.g., Chrome).
    npx cypress run --headed: Run tests in headless mode with the browser visible.

    

Test Cases
----------

The test cases are logically grouped as follows:

*   **User Authentication**: Tests related to user Signup, login, logout, and handling existing users.
    
*   **Product and Cart Management**: Verifying product viewing, searching, adding to cart, shopping cart, and managing product      quantities.
    
*   **Checkout Process**: Ensuring smooth checkout operations, including Delivery and Billing address verification, order placement, and  invoice generation.
    
*   **Other Functionalities**: Tests covering the Contact Us form, subscription validation, review addition, and scroll functionality.

* **Scroll up, scroll down**: Tests coving the scroll up, scroll down behaviour
    

