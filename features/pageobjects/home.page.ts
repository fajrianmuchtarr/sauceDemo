import { $ } from '@wdio/globals'
import Page from './page.js';


class HomePage extends Page {
   
    public get flashAlert1 () {
            return $('#item_4_title_link');}

   public get flashAlert2 () { 
       return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
        
   }

    public getProducts1() {
        return $('#item_4_title_link');
    }

    public getProducts() {
        return $('#item_2_title_link');
    }
    public sortProductsByPrice() {
        return $('//*[@id="header_container"]/div[2]/div/span/select');
    }

    public getProducts2() {
        return $('#item_5_title_link');
}
    public productCart1() {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
}
    public productCart2() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    public removeCart1() {
        return $('#remove-sauce-labs-fleece-jacket');
}
    public shoppingCart() {
    return $('//*[@id="shopping_cart_container"]');
    }

    public productDesc1() {
    return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[2]');
    }

    public checkoutButton() {
        return $('#checkout');
    }

    public firstName() {
        return $('#first-name');
    }

    public lastName() {
        return $('#last-name');
    }

    public zipCode() {
        return $('#postal-code');
    }

    public async detailsValid (firstname: string, lastname: string, zipcode: string) {
        const inputFirstName = await $('#first-name');
        const inputLastName = await $('#last-name');
        const inputzipCode = await $('#postal-code');
        await inputFirstName.setValue('qa');
        await inputLastName.setValue('user');
        await inputzipCode.setValue('12345');
    }

    public continueButton() {
        return $('#continue');
    }

    public finishButton() {
        return $('#finish');
    }

    public finishOrderMessage() {
        return $('//*[@id="checkout_complete_container"]/h2');
    }

    public messageError() {
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]');
    }
}
export default new HomePage();

