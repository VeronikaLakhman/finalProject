class MainPage{

    get signUpBtn() {return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > div > a')}
    get footerTitleText() {return $('//*[contains (text() ,"The place for anyone from anywhere")]')}
    get startFreeTrialBtn() {return $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div.position-relative.overflow-hidden > div.container-xl.position-relative.z-2 > div > div > div > div > div > a.btn-mktg.btn-large-mktg.btn-muted-mktg')}
    get subscribeBtn() {return $('a[href="https://resources.github.com/newsletter/"]')}
    get searchBtn() {return $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button/span')}
    get inputSearch() {return $('#query-builder-test')}
    get searchAllOfGithubBtn() {return $('#query-builder-test-result-act > span > span.ActionListItem-descriptionWrap > span')}
    get pricing() {return $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a')}


    async clickOnSignUpBtn(){
        await this.signUpBtn.click()
    }

    async footerTitleIsExisting(){
        await this.footerTitleText.isExisting()
    }

    async startFreeTrialBtnIsVisible(){
        await this.startFreeTrialBtn.isDisplayedInViewport()
    }

    async clickOnStartFreeTrialBtn(){
        await this.startFreeTrialBtn.click()
    }

    async subscribeBtnisExisting(){
        await this.subscribeBtn.isExisting()
    }

    async subscribeBtnIsClickable(){
        await this.subscribeBtn.isClickable()
    }

    async clickOnsubscribeBtn(){
        await this.subscribeBtn.click()
    }

    async clickOnInputSearch(){
        await this.searchBtn.click()
    }

    async setFindWord(value){
        await this.inputSearch.addValue(value)
    }

    async clickOnSearchAllOfGithubBtn(){
        await this.searchAllOfGithubBtn.click()
    }

    async clickOnPricing(){
        await this.pricing.click()
    }
}

export default new MainPage()