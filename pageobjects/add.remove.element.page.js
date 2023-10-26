import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemoveElementPage extends Page {
    /**
     * define selectors using getter methods
     */
    get AddElementButton () {
        return $('//button[contains(text(),"Add Element")]');
    }
    
    get DeleteElementButton() {
        return $('button.added-manually');
   }
   
    async ClickAddElementButton () {

        (await this.AddElementButton).waitForDisplayed;
        await this.AddElementButton.click();
    }
    async ClickDeleteElementButton () {
      
        (await this.DeleteElementButton).waitForDisplayed;
        await this.DeleteElementButton.click();
    }
}

export default new AddRemoveElementPage();
