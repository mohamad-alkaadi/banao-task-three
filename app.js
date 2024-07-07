const halfCircles = document.querySelectorAll(".half-circle")
const halfCircleTop = document.querySelector(".half-circle-top")
const progressBarCircle = document.querySelector(".progressbar-circle")
const circle = document.querySelector(".circle")

const circleTwo = document.querySelector(".s-circle-2")
const circleThree = document.querySelector(".s-circle-3")
const circleFour = document.querySelector(".s-circle-4")
const circleFive = document.querySelector(".s-circle-5")
const circleSix = document.querySelector(".s-circle-6")
const circleSeven = document.querySelector(".s-circle-7")
const halfTwo = document.querySelector(".half-two")
const halfOne = document.querySelector(".half-one")
const mainTitle = document.querySelector(".main-title")

halfTwo.addEventListener("scroll", () => {
  gsap.registerPlugin(ScrollTrigger)

  const pageViewportHeight = window.innerHeight
  const pageHeight = document.documentElement.scrollHeight * 7
  const scrolledPortion = halfTwo.scrollTop

  console.log(pageViewportHeight)
  console.log(pageHeight)
  console.log("you scroled", scrolledPortion)

  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewportHeight)) * 271

  console.log("scrolledPortionDegree: ", scrolledPortionDegree)
  const scrolledPortionPercent = Math.floor((scrolledPortionDegree / 360) * 100)
  console.log("scrolledPortionPercent: ", scrolledPortionPercent)

  progressBarCircle.textContent = `${scrolledPortionPercent}%`

  halfCircles.forEach((el) => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`

    if (scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = "rotate(180deg)"
      halfCircleTop.style.opacity = "0"
    } else {
      halfCircleTop.style.opacity = "1"
    }
  })
  if (scrolledPortionPercent < 12) {
    circleTwo.style.backgroundColor = "#91c0ff"
    circleThree.style.backgroundColor = "#91c0ff"
    circleFour.style.backgroundColor = "#91c0ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#551196"
    circle.style.backgroundColor = "#551196"
    progressBarCircle.style.backgroundColor = "#551196"
    mainTitle.style.backgroundColor = "#551196"
    halfTwo.style.backgroundColor = "#c6c6c8"
    halfTwo.style.backgroundImage = "none"
  } else if (scrolledPortionPercent >= 12 && scrolledPortionPercent < 25) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#91c0ff"
    circleFour.style.backgroundColor = "#91c0ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#4826c5"
    circle.style.backgroundColor = "#4826c5"
    progressBarCircle.style.backgroundColor = "#4826c5"
    mainTitle.style.backgroundColor = "#4826c5"
    halfTwo.style.backgroundColor = "#1c0362"
    halfTwo.style.backgroundImage = "none"
  } else if (scrolledPortionPercent >= 25 && scrolledPortionPercent < 37) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#91c0ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#0b0e32"
    circle.style.backgroundColor = "#0b0e32"
    progressBarCircle.style.backgroundColor = "#0b0e32"
    mainTitle.style.backgroundColor = "#0b0e32"
    halfTwo.style.backgroundColor = "#131644"
    halfTwo.style.backgroundImage = "none"
  } else if (scrolledPortionPercent >= 37 && scrolledPortionPercent < 49) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#15253a"
    circle.style.backgroundColor = "#15253a"
    progressBarCircle.style.backgroundColor = "#15253a"
    mainTitle.style.backgroundColor = "#15253a"
    halfTwo.style.backgroundColor = "#0d131b"
    halfTwo.style.backgroundImage = "none"
  } else if (scrolledPortionPercent >= 49 && scrolledPortionPercent < 62) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#0f4492"
    circle.style.backgroundColor = "#0f4492"
    progressBarCircle.style.backgroundColor = "#0f4492"
    mainTitle.style.backgroundColor = "#0f4492"
    halfTwo.style.backgroundColor = "#2dcddd"
    halfTwo.style.backgroundImage = "none"
  } else if (scrolledPortionPercent >= 62 && scrolledPortionPercent < 74) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#0189ff"
    circleSeven.style.backgroundColor = "#91c0ff"
    halfOne.style.backgroundColor = "#012787"
    circle.style.backgroundColor = "#012787"
    progressBarCircle.style.backgroundColor = "#012787"
    mainTitle.style.backgroundColor = "#012787"
    halfTwo.style.backgroundImage = "url('./assets/interior.jpg')"
  } else {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#0189ff"
    circleSeven.style.backgroundColor = "#0189ff"
    halfOne.style.backgroundColor = "#00834c"
    circle.style.backgroundColor = "#00834c"
    progressBarCircle.style.backgroundColor = "#00834c"
    mainTitle.style.backgroundColor = "#00834c"
    halfTwo.style.backgroundColor = "#00b769"
    halfTwo.style.backgroundImage = "none"
  }
})

// function logIt() {
//   console.log(scrolledPortionPercent)
// }
