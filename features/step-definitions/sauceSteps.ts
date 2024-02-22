import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import homePage from '../pageobjects/home.page.js';


const pages = {
    login: LoginPage
}

Given('User on the SauceDemo login page', async () => {
    await LoginPage.open();
});

When('User enter valid username and password', async () => {
    await LoginPage.loginValid('standard_user', 'secret_sauce');
});

Then('User enter incorrect username and valid password', async () => {
    await LoginPage.invalidUser('standar_user1', 'secret_sauce');
});

Then('User enter valid username and incorrect password', async () => {
    await LoginPage.invalidPass('standard_user', 'secret_sauce1');
});

Then('User click the login button', async () => {
    await LoginPage.btnSubmit.waitForDisplayed();
    await LoginPage.btnSubmit.click();
});

Then('User should be logged in successfully', async () => {
    const flashMessage = await (await HomePage.flashAlert1).getText();
    expect(flashMessage).toContain('Sauce Labs Backpack');
});

Then('I should see an error message indicating unsuccessful login', async () => {
    const flashMessage = await HomePage.flashAlert2.getText();
    expect(flashMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});

Given('User on the SauceDemo inventory page', async () => {
    await LoginPage.open();
    await LoginPage.loginValid('standard_user','secret_sauce');
    await LoginPage.btnSubmit.waitForDisplayed();
    await LoginPage.btnSubmit.click();
});

Then('User should see a list of available products', async () => {
    await HomePage.getProducts1().isDisplayed();
});

    When('User sort product by "Price low to high"', async () => {
    const dropdown = await  homePage.sortProductsByPrice();
    await dropdown.selectByVisibleText('Price (low to high)');
    });

Then('the products should be displayed in ascending order of price', async () => {
    const prices = await $$('.inventory_item_price').map(async el => parseFloat((await el.getText()).replace('$', '')));
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
});

When('User sort product by "Price high to low"', async () => {
    const dropdown = await  homePage.sortProductsByPrice();
    await dropdown.selectByVisibleText('Price (high to low)');
    
});

Then('the products should be displayed in descending order of price', async () => {
    const prices = await $$('.inventory_item_price').map(async el => parseFloat((await el.getText()).replace('$', '')));
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
});

When('User add a product to the cart', async () => {
    const productCart1 = await homePage.productCart1();
    await productCart1.click();
});

Then('the product should be added successfully', async () => {
    const cartBadge = await $('.shopping_cart_badge');
    const cartCount = await cartBadge.getText();
    expect(cartCount).toEqual('1');
});

Then('User remove the product from the cart', async () => {
    const firstProductRemoveButton = await $('//*[@id="shopping_cart_container"]');
    await firstProductRemoveButton.click();
    await homePage.removeCart1().click();
});

Then('the product should be removed successfully', async () => {
    const cartBadge = await homePage.shoppingCart();
    const cartCount = await cartBadge.getText();
    expect(cartCount).toEqual('1');
});

When('User add a product 2 to the cart', async () => {
    const productCart1 = await homePage.productCart2();
    await productCart1.click();
});

When('User click on a product', async () => {
    const product2 = await homePage.getProducts2();
    await product2.click();

});

Then('User should be redirected to the product details page', async () => {
    const productDesc = await homePage.productDesc1();
    await productDesc.isDisplayed();

});

Then('User click on the cart icon', async () => {
    const shoppingCart = await homePage.shoppingCart();
    await shoppingCart.click();

});

Then('User click on the checkout button', async () => {
    const checkoutButton = await homePage.checkoutButton();
    await checkoutButton.click();
});

Then('User should be redirected to the checkout confirmation page', async () => {
    await homePage.firstName().isDisplayed();
    await homePage.detailsValid('qa', 'user', '12345');
    const firstNameValue = await homePage.firstName().getValue();
    expect(firstNameValue).toEqual('qa');
    const lastNameValue = await homePage.lastName().getValue();
    expect(lastNameValue).toEqual('user');
    const zipCodeValue = await homePage.zipCode().getValue();
    expect(zipCodeValue).toEqual('12345');
    await homePage.continueButton().click();
    await homePage.finishButton().click();
    const flashMessage = await (await HomePage.finishOrderMessage()).getText();
    expect(flashMessage).toContain('Thank you for your order!');
});

Then('User only fill last name and postal code', async () => {
    await homePage.lastName().setValue('user');
    const lastNameValue = await homePage.lastName().getValue();
    expect(lastNameValue).toEqual('user');
    await homePage.zipCode().setValue('12345');
    const zipCodeValue = await homePage.zipCode().getValue();
    expect(zipCodeValue).toEqual('12345');
    await homePage.continueButton().click();
});

Then('User should see an error message indicating unsuccessful checkout', async () => {
    await homePage.messageError().isDisplayed();
    await homePage.messageError().getText();
    const flashMessage = await (await HomePage.messageError()).getText();
    expect(flashMessage).toContain('Error: First Name is required');

});

Then('User only fill first name and postal code', async () => {
    await homePage.firstName().setValue('qa');
    const firstNameValue = await homePage.firstName().getValue();
    expect(firstNameValue).toEqual('qa');
    await homePage.zipCode().setValue('12345');
    const zipCodeValue = await homePage.zipCode().getValue();
    expect(zipCodeValue).toEqual('12345');
    await homePage.continueButton().click();    

});

Then('User should see an error message last name is required', async () => {
    await homePage.messageError().isDisplayed();
    await homePage.messageError().getText();
    const flashMessage = await (await HomePage.messageError()).getText();
    expect(flashMessage).toContain('Error: Last Name is required');

});


