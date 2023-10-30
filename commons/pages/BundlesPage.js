var BundlesPage= {
    clickPremiumButton: function () {
        let premiumInterval = setInterval(() => {
            if (flags.flightsFlags.finalFlag && (document.title === 'Bundles')) {
                common.waitForElm(common.getElement("//button[@data-hook='select-tier-3']"), function () {
                    if (common.getElement("//button[@data-hook='select-tier-3']//span").innerText === "SELECTED") {
                        flags.flightsFlags.continueFlag = false;
                        flags.BundlesFlag.PremiumFlag = true;
                        clearInterval(premiumInterval)
                    } else {
                        common.reactClick(common.getElement("//button[@data-hook='select-tier-3']"), " Premium Button ")
                        flags.flightsFlags.continueFlag = false;
                        flags.BundlesFlag.PremiumFlag = true;
                        clearInterval(premiumInterval)
                    }
                }, 1000, 15000)
            }
        }, 1000);
    },
    clickSearchButton: function () {
        let continueBundleInterval = setInterval(() => {
            if (flags.BundlesFlag.PremiumFlag) {
                common.reactClick(common.getElement("//button[@data-hook='bundles-page_continue']"), " Continue Button ")
                flags.BundlesFlag.PremiumFlag = false;
                flags.BundlesFlag.continueFlag = true;
                clearInterval(continueBundleInterval)
            }
        }, 1000);
    }

}