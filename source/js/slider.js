document.documentElement.lang = "ru"
document.documentElement.classList.add("page")
document.body.classList.add("page__body")

const slider = document.querySelector(".slider")
const curtain = slider.querySelector(".slider__curtain")
let sliderStyles = getComputedStyle(slider)
let curtainPlaceStart
let clientX

function handleGrabCurtain (event) {
	curtainPlaceStart = +(sliderStyles.getPropertyValue("--curtain-place"))
  clientX = event.clientX
	window.addEventListener("pointermove", handleMoveCurtain)
}

function handleMoveCurtain (event) {
	let deltaX = event.clientX - clientX
	let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
	let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
	slider.style.setProperty("--curtain-place", `${curtainPlace}`)
}

function handleReleaseCurtaine (event) {
	window.removeEventListener("pointermove", handleMoveCurtain)
}

window.addEventListener("pointerup", handleReleaseCurtaine)

curtain.addEventListener("pointerdown", handleGrabCurtain)
