async function localize(preference = null) {
    let avaliableLocalizations = ["en-gb", "zh-tw"]
    let defaultLanguage = avaliableLocalizations[0]
    let selectedLanguage = preference

    if (selectedLanguage == null) {
        let previousLanguage = localStorage.getItem("language")
        if (previousLanguage) {
            selectedLanguage = previousLanguage
        } else {
            selectedLanguage = navigator.language.toLowerCase()
        }
    }

    if (avaliableLocalizations.findIndex((element) => element == selectedLanguage) == -1) {
        selectedLanguage = defaultLanguage
    }

    let languageSwitcher = document.querySelector("#language-selector")
    languageSwitcher.value = selectedLanguage

    localStorage.setItem("language", selectedLanguage)

    let res = await fetch(`../localization/${selectedLanguage}.json`)
    let obj = await res.json()
    let strings = Object.values(obj)[0]

    document.querySelectorAll('[data-text]').forEach((value, key) => {
        value.innerHTML = strings[value.dataset.text]
    })
}
