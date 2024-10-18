let index = 0
const autoscrollTime = 2500
let slideshow = null

function initLanding() {
    slideshow = document.querySelectorAll(".landing-slideshow")[0]
    setTimeout(() => landingScroll(+1, true), autoscrollTime)
}

function landingScroll(direction, setAutoTimeout = false) {
    let count = slideshow.children.length
    let vw = window.innerWidth

    index += direction

    if (index >= count) {
        index = 0
        slideshow.scrollBy(-(count - 1) * vw, 0)
    } else if (index < 0) {
        index = count - 1
        slideshow.scrollBy((count - 1) * vw, 0)
    } else {
        slideshow.scrollBy(direction * vw, 0)
    }

    if (setAutoTimeout) {
        setTimeout(() => landingScroll(+1, true), autoscrollTime);
    }
}