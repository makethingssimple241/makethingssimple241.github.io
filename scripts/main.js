let menuDisplayed = false
let sidebarDisplayed = false

let hideSidebarBtnBars = document.getElementsByClassName("hideSidebarBtnBar")

const handleOnMouseMove = c => {
    const {
        currentTarget: target
    } = c

    const rect = target.getBoundingClientRect(),
        x = c.clientX - rect.left, y = c.clientY - rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

function init_main() {
    if (window.location.hash == "#about") {
        let aboutParagraphChildren = document.querySelectorAll(".aboutParagraph>*")

        for (let i = 0; i < aboutParagraphChildren.length; i++) {
            const element = aboutParagraphChildren[i]
            element.style.animationName = "move-in-from-left"
            element.style.opacity = "1"
        }
    }
}

function init_videos() {
    if (window.matchMedia("(min-width: 800px)").matches) {
        sidebarDisplayed = true

        for (let i = 0; i < hideSidebarBtnBars.length; i++) {
            const element = hideSidebarBtnBars[i]
            element.classList.add("true")
            element.style.display = "unset"
        }
    }
}

function init_hover_effect() {
    for (const project of document.querySelectorAll(".project")) {
        project.onmousemove = c => handleOnMouseMove(c)
    }
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

function hideSidebar() {
    let sidebar = document.querySelector(".videos_sidebar")
    let videos = document.querySelectorAll(".video")
    let footer = document.querySelector(".videos_main footer")

    if (sidebarDisplayed) {
        for (let i = 0; i < hideSidebarBtnBars.length; i++) {
            const element = hideSidebarBtnBars[i]
            element.classList.remove("true")
        }

        sidebar.style.left = "-100vh";

        for (let i = 0; i < videos.length; i++) {
            const element = videos[i]
            if (!(window.matchMedia("(max-width: 800px)").matches)) {
                element.style.left = "0"
                element.style.width = "100vw"
            }
        }

        if (!(window.matchMedia("(max-width: 800px)").matches)) {
            footer.style.left = "0"
            footer.style.width = "100vw"
        }

        sidebarDisplayed = false
    }
    else {
        for (let i = 0; i < hideSidebarBtnBars.length; i++) {
            const element = hideSidebarBtnBars[i]
            element.classList.add("true")
        }

        sidebar.style.left = "0"

        for (let i = 0; i < videos.length; i++) {
            const element = videos[i]
            if (!(window.matchMedia("(max-width: 800px)").matches)) {
                element.style.left = "25vw"
                element.style.width = "75vw"
            }
        }

        if (!(window.matchMedia("(max-width: 800px)").matches)) {
            footer.style.left = "25vw"
            footer.style.width = "75vw"
        }

        sidebarDisplayed = true
    }
}

