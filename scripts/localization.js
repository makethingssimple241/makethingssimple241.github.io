async function localize(preference = null) {
    let avaliableLocalizations = ["en-gb", "zh-tw"]
    let localizationLanguage = "en-gb"
    let languageSwitcher = document.querySelector("#language-selector")

    if (preference == null) {
        let netLanguage = navigator.language

        avaliableLocalizations.forEach((value, index, array) => {
            if (netLanguage.toLowerCase() === value) {
                localizationLanguage = netLanguage.toLowerCase()
            }
        })
    } else if (avaliableLocalizations.findIndex((element) => element == preference) != -1) {
        localizationLanguage = preference
    }

    languageSwitcher.value = localizationLanguage

    let res = await fetch(`../localization/${localizationLanguage}.json`)
    let obj = await res.json()
    let strings = Object.values(obj)[0]

    document.querySelectorAll('[data-text]').forEach((value, key) => {
        value.innerHTML = strings[value.dataset.text]
    })
}
