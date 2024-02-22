import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('#login-button');
    }

    
    public async loginValid (username: string, password: string) {
        await this.inputUsername.setValue('standard_user');
        await this.inputPassword.setValue('secret_sauce');
        
    }

    public async invalidUser (username: string, password: string) {
        await this.inputUsername.setValue('standar_user1');
        await this.inputPassword.setValue('secret_sauce') 
    }

    public async invalidPass (username: string, password: string) {
        await this.inputUsername.setValue('standar_user');
        await this.inputPassword.setValue('secret_sauce1') 
    }


    public async btnLogin () {
        await this.btnSubmit.click;
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
