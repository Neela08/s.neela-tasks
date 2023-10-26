import { $ } from '@wdio/globals'
import Page from './page.js';
class DynamicLoading extends Page {
    get Example2Button() {
        return $('a[href="/dynamic_loading/2"');
   }
   get StartButton() {
    return $('#start button');
}
get loading() {
    return $('#loading');
}
get helloworldtext()
{
    return $('#finish');
}
   
    async ClickExample2Button () {

      
        await this.Example2Button.click();
    }
    async ClickStartButton () {

      
        await this.StartButton.click();
    }
   
    async HelloWorldTextWait () {

      
        await this.helloworldtext.waitForDisplayed();
        
    }

}
export default new DynamicLoading();