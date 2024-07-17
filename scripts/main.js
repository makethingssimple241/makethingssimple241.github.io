let menuDisplayed = false

function init() {
    console.log(navigator.language)
    localize(navigator.language)
}

function openMenu() {
    let menuBtnBars = document.querySelectorAll(".menuBtnBar")
    let menu = document.querySelector(".menu")
    let main = document.querySelector("main")

    for (let i = 0; i < menuBtnBars.length; i++) {
        const element = menuBtnBars[i];
        if (menuDisplayed) {
            element.classList.remove("true")
        }
        else {
            element.classList.add("true")
        }
    }

    if (menuDisplayed) {
        main.style.filter = "blur(0px)";
        menu.style.top = "calc(60px - 100vh)";
        menuDisplayed = false;
    }
    else {
        main.style.filter = "blur(10px)";
        menu.style.top = "60px";
        menuDisplayed = true;
    }
}
