async function localize(language) {
    const language_switcher = document.querySelector("#language-selector")
    const avaliable_localizations = ["en-gb", "zh-tw"]
    let localization_language = "en-gb"

    avaliable_localizations.forEach((value, index, array) => {
        if (language.toLowerCase() === value) {
            localization_language = language.toLowerCase()
        }
    })

    language_switcher.value = localization_language

    let res = await fetch(`../localization/${localization_language}.json`)
    let obj = await res.json()
    strings = Object.values(obj)[0]

    let elements = document.querySelectorAll('[data-text]')

    elements.forEach((value, key) => {
        value.innerHTML = strings[value.dataset.text]
    })
}

async function localize_element(element_query, language) {
    let res = await fetch(`../localization/${language.toLowerCase()}.json`)
    let obj = await res.json()
    strings = Object.values(obj)[0]

    let element = document.querySelector(element_query)
    element.setHTML(strings[element.dataset.text])
}