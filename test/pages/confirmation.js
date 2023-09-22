class Confirmation{
    get title() {return $('#hero-section-brand-heading')}

    async titleIsDisplayed(){
        await this.title.isDisplayed()
    }
}
export default new Confirmation()