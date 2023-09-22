class Repositories{
    get firstSearchResult() {return $('body > div.logged-out.env-production.page-responsive > div.application-main > main > react-app > div > div > div.Box-sc-g0xbh4-0.emundt > div > div > main > div.Box-sc-g0xbh4-0.hlUAHL > div > div.Box-sc-g0xbh4-0.gytyqX > div.Box-sc-g0xbh4-0.kzrAHr > div > div > div:nth-child(1) > div > div.Box-sc-g0xbh4-0.jUbAHB > h3 > div > div.Box-sc-g0xbh4-0.bBwPjs.search-title > a > span')}
    get firstSearchResultHref() {return $('a[href="/nektos/act"]')}
  
    async hrefContainingWord(){
        await expect(this.firstSearchResultHref).toHaveUrlContaining('act')
    } 
}

export default new Repositories()