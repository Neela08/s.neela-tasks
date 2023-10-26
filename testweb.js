import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'
import AddRemoveElementPage from '../pageobjects/add.remove.element.page.js'
import DynamicLoading from '../pageobjects/dynamic.loading.js'


describe('task 1', () => {
    it('test case 1', async () => {
        await HomePage.open()

        await HomePage.ClickAddRemoveElementPageButton()
        await AddRemoveElementPage.ClickAddElementButton()
        await expect(AddRemoveElementPage.DeleteElementButton).toBeExisting()
        await AddRemoveElementPage.ClickDeleteElementButton()
        await expect(AddRemoveElementPage.DeleteElementButton).not.toBeExisting()
        
        
    })
    it('test case 2', async () => {
        await HomePage.open()
      
        await HomePage.ClickDynamicLoadingButton()
        await DynamicLoading.ClickExample2Button ()
        await DynamicLoading.ClickStartButton()
        await expect(DynamicLoading.loading).toBeDisplayed
   
        await DynamicLoading.HelloWorldTextWait()
        await expect(DynamicLoading.helloworldtext).toHaveTextContaining('Hello World!')
      })
})

