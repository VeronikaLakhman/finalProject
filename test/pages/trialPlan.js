class TrialPlan{

    get title() {return $('//*[text() = "Pick your trial plan"]')}
    get enterpriseCloud() {return $('body > div.logged-out.env-production.page-responsive > div.application-main > main > div > div:nth-child(2) > div > div > div:nth-child(1) > a > div > div')}

    async titleIsDisplayed(){
        await this.title.isDisplayed()
    }

    async clickOnEnterpriseCloud(){
        await this.enterpriseCloud.click()
    }

}

export default new TrialPlan()