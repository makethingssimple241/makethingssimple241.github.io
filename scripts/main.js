let menuDisplayed = false

function init() {
    initialize_components()
        .then(localize)
}

function openMenu() {
    let bars = document.querySelectorAll(".menu-btn > *")
    let menu = document.querySelector(".menu")
    let main = document.querySelector("main")

    for (let bar of bars) {
        if (menuDisplayed) {
            bar.removeAttribute("active")
        }
        else {
            bar.setAttribute("active", "true")
        }
    }

    if (menuDisplayed) {
        main.style.filter = "blur(0px)"
        menu.style.top = "calc(60px - 100vh)"
    } else {
        main.style.filter = "blur(10px)"
        menu.style.top = "60px"
    }

    menuDisplayed = !menuDisplayed
}
