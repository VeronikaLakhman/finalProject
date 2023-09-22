class Subscribe{

    get title() {return $('#hero-section-brand-heading')}
    get inputWorkEmail() {return $('//*[@id=":R8d7m:"]')}
    get selectCountry() {return $('#country')}
    get selectUkraine() {return $('#country > option:nth-child(225)')}
    get checkbox() {return $('#gated-agree-marketingEmailOptin1')}
    get subscribeBtn() {return $('#form > form > div > button')}

    async haveCorrectURL(){
        await browser.url('https://resources.github.com/newsletter/');
        console.log("Correct URL is: " + await browser.getUrl()) // outputs: "https://resources.github.com/newsletter/"
    }

    async titleIsExisting(){
        await this.title.isExisting()
    }
    
    async setWorkEmail(value){
        await this.inputWorkEmail.addValue(value)
    }

    async clickOnSelectCountry(){
        await this.selectCountry.click()
    }
    
    async clickOnSelectUkraine(){
        await this.selectUkraine.click()
    }

    async clickOnCheckbox(){
        await this.checkbox.click()
    }

    async clickOnSubscribeBtn(){
        await this.subscribeBtn.click()
    }

}

export default new Subscribe()