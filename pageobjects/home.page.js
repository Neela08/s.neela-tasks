import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    
    get AddRemoveElementPageButton () {
        return $('//*[@id="content"]/ul/li[2]/a');
    }
    get DynamicLoadingButton () {
        return $('a[href="/dynamic_loading"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async ClickAddRemoveElementPageButton () {
        //await this.inputUsername.setValue(username);
       // await this.inputPassword.setValue(password);
        await this.AddRemoveElementPageButton.click();
    }
    async ClickDynamicLoadingButton () {
        //await this.inputUsername.setValue(username);
       // await this.inputPassword.setValue(password);
        await this.DynamicLoadingButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new HomePage();
