class Pricing{
    get title() {return $('//*[contains (text() , "Get the complete developer")]')}
    get compareAllFeatures() {return $('a[href="#compare-features"]')}
    get compareFeatersTitle() {return $('.h1')}
    
    async titleIsDisplayed(){
        await this.title.isDisplayed()
    }

    async cscrollToCompareAllFeatures(){
        await this.compareAllFeatures.scrollIntoView()
    }

    async clickOnCompareFeatures(){
        await this.compareAllFeatures.click()
    }

    async compareFeatersIsDisplayed(){
        await this.compareFeatersTitle.isDisplayed()
    }

}

export default new Pricing()