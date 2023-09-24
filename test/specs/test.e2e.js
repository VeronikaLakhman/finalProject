
import MainPage from "./../pages/main.page.js"
import JoinGitHub from "./../pages/joinGitHub.js"
import TrialPlan from "./../pages/trialPlan.js"
import Subscribe from "./../pages/subscribe.js"
import Confirmation from "./../pages/confirmation.js"
import Repositories from "./../pages/repositories.js"
import Pricing from "./../pages/pricing.js"

describe("Home final project", () => {

    it("Test case 1: done", async () =>{

        await browser.maximizeWindow()

        await browser.url('https://github.com/');
        await browser.pause(4000)

        await MainPage.clickOnSignUpBtn()
        await browser.pause(2000)

        await JoinGitHub.greetingIsDisplayed()
        await browser.pause(2000)

        await JoinGitHub.setEmail("nadia_korniychuk93@ukr.net")
        await browser.pause(2000)

        await JoinGitHub.clickOnContinueAfterEmailBtn()
        await browser.pause(2000)

        await JoinGitHub.setPassword("HelloJava2023!")
        await browser.pause(2000)

        await JoinGitHub.clickOnContinueAfterPasswordBtn()
        await browser.pause(2000)

        await JoinGitHub.setUsername("VeronikaRoni")
        await browser.pause(2000)

        await JoinGitHub.clickOnContinueAfterNameBtn()
        await browser.pause(2000)

        await JoinGitHub.setYesOrNo("y")
        await browser.pause(2000)

        await JoinGitHub.clickOnContinueAfterReceiveApdates()
        await browser.pause(2000)   
    });

    it("Test case 2: done", async () =>{

        await browser.url('https://github.com/');
        await browser.pause(4000)

        await MainPage.scrollToFooterTitleText()
        await browser.pause(2000)

        await MainPage.footerTitleIsExisting()
        await browser.pause(2000)

        await MainPage.startFreeTrialBtnIsVisible()
        await browser.pause(2000)

        await MainPage.clickOnStartFreeTrialBtn()
        await browser.pause(2000)

        await TrialPlan.titleIsDisplayed()
        await browser.pause(2000)

        await TrialPlan.clickOnEnterpriseCloud()
        await browser.pause(2000)
    });

    it("Test case 3: done", async () =>{

        await browser.url('https://github.com/');
        await browser.pause(4000)

        await MainPage.scrollToSubscribeBtn()
        await browser.pause(2000)

        await MainPage.subscribeBtnisExisting()
        await browser.pause(2000)

        await MainPage.subscribeBtnIsClickable()
        await browser.pause(2000)

        await MainPage.clickOnsubscribeBtn()
        await browser.pause(2000)

        await Subscribe.haveCorrectURL()
        await browser.pause(2000)

        await Subscribe.titleIsExisting()
        await browser.pause(2000)

        await Subscribe.setWorkEmail("nadia_korniychuk3@ukr.net")
        await browser.pause(2000)

        await Subscribe.clickOnSelectCountry()
        await browser.pause(2000)

        await Subscribe.clickOnSelectUkraine()
        await browser.pause(2000)

        await Subscribe.clickOnCheckbox()
        await browser.pause(2000)

        await Subscribe.clickOnSubscribeBtn()
        await browser.pause(2000)

        await Confirmation.titleIsDisplayed()
        await browser.pause(2000)
    });

    it("Test case 4: done", async () =>{

        await browser.url('https://github.com/');
        await browser.pause(4000)

        await MainPage.clickOnInputSearch()
        await browser.pause(2000)

        await MainPage.setFindWord("act")
        await browser.pause(2000)

        await MainPage.clickOnSearchAllOfGithubBtn()
        await browser.pause(2000)

        await Repositories.hrefContainingWord()
        await browser.pause(2000)

    });

    it("Test case 5: done", async () =>{

        await browser.url('https://github.com/');
        await browser.pause(2000)

        await MainPage.clickOnPricing()
        await browser.pause(2000)

        await Pricing.titleIsDisplayed()
        await browser.pause(2000)

        await Pricing.cscrollToCompareAllFeatures()
        await browser.pause(2000)

        await Pricing.clickOnCompareFeatures()
        await browser.pause(2000)

        await Pricing.compareFeatersIsDisplayed()
        await browser.pause(2000)

    });
});


