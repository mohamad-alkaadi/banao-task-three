const halfCircles = document.querySelectorAll(".half-circle")
const halfCircleTop = document.querySelector(".half-circle-top")
const progressBarCircle = document.querySelector(".progressbar-circle")

const circleTwo = document.querySelector(".s-circle-2")
const circleThree = document.querySelector(".s-circle-3")
const circleFour = document.querySelector(".s-circle-4")
const circleFive = document.querySelector(".s-circle-5")
const circleSix = document.querySelector(".s-circle-6")
const circleSeven = document.querySelector(".s-circle-7")
const scrollableDiv = document.querySelector(".half-two")

scrollableDiv.addEventListener("scroll", () => {
  const pageViewportHeight = window.innerHeight
  const pageHeight = document.documentElement.scrollHeight * 7
  const scrolledPortion = scrollableDiv.scrollTop

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
  } else if (scrolledPortionPercent >= 12 && scrolledPortionPercent < 25) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#91c0ff"
    circleFour.style.backgroundColor = "#91c0ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
  } else if (scrolledPortionPercent >= 25 && scrolledPortionPercent < 37) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#91c0ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
  } else if (scrolledPortionPercent >= 37 && scrolledPortionPercent < 49) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#91c0ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
  } else if (scrolledPortionPercent >= 49 && scrolledPortionPercent < 62) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#91c0ff"
    circleSeven.style.backgroundColor = "#91c0ff"
  } else if (scrolledPortionPercent >= 62 && scrolledPortionPercent < 74) {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#0189ff"
    circleSeven.style.backgroundColor = "#91c0ff"
  } else {
    circleTwo.style.backgroundColor = "#0189ff"
    circleThree.style.backgroundColor = "#0189ff"
    circleFour.style.backgroundColor = "#0189ff"
    circleFive.style.backgroundColor = "#0189ff"
    circleSix.style.backgroundColor = "#0189ff"
    circleSeven.style.backgroundColor = "#0189ff"
  }
})

// function logIt() {
//   console.log(scrolledPortionPercent)
// }
