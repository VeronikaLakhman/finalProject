class JoinGitHub{

    get greeting() {return $('body > div.logged-out.env-production.page-responsive.height-full.d-flex.flex-column.header-overlay > div.application-main.d-flex.flex-auto.flex-column > main > div.d-flex.flex-auto.flex-justify-center.pt-12 > text-suggester > div.m-4.p-4.f4.color-shadow-small.bg-gray-800-mktg.rounded-2.signup-content-container > h1')}
    get inputEmail() {return $('#email')}
    get continueAfterEmailBtn() {return $('#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
    get inputPassword() {return $('#password')}
    get continueAfterPasswordBtn() {return $('#password-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
    get inputName() {return $('#login')}
    get continueAfterNameBtn() {return $('#username-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}
    get inputReceiveUpdates() {return $('#opt_in')}
    get continueAfterReceiveApdatesBtn() {return $('#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')}

    async greetingIsDisplayed(){
        await this.greeting.isDisplayed()
    }

    async setEmail(value){
        await this.inputEmail.addValue(value)
    }

    async clickOnContinueAfterEmailBtn(){
        await this.continueAfterEmailBtn.click()
    }

    async setPassword(value){
        await this.inputPassword.addValue(value)
    }

    async clickOnContinueAfterPasswordBtn(){
        await this.continueAfterPasswordBtn.click()
    }

    async setUsername(value){
        await this.inputName.addValue(value)
    }

    async clickOnContinueAfterNameBtn(){
        await this.continueAfterNameBtn.click()
    }

    async setYesOrNo(value){
        await this.inputReceiveUpdates.addValue(value)
    }

    async clickOnContinueAfterReceiveApdates(){
        await this.continueAfterReceiveApdatesBtn.click()
    }
}

export default new JoinGitHub()

