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
  if (scrolledPortionPercent < 13) {
    circleTwo.style.backgroundColor = "transparent"
    circleThree.style.backgroundColor = "transparent"
    circleFour.style.backgroundColor = "transparent"
    circleFive.style.backgroundColor = "transparent"
    circleSix.style.backgroundColor = "transparent"
    circleSeven.style.backgroundColor = "transparent"
  } else if (scrolledPortionPercent >= 13 && scrolledPortionPercent < 25) {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "transparent"
    circleFour.style.backgroundColor = "transparent"
    circleFive.style.backgroundColor = "transparent"
    circleSix.style.backgroundColor = "transparent"
    circleSeven.style.backgroundColor = "transparent"
  } else if (scrolledPortionPercent >= 25 && scrolledPortionPercent < 36) {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "red"
    circleFour.style.backgroundColor = "transparent"
    circleFive.style.backgroundColor = "transparent"
    circleSix.style.backgroundColor = "transparent"
    circleSeven.style.backgroundColor = "transparent"
  } else if (scrolledPortionPercent >= 36 && scrolledPortionPercent < 49) {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "red"
    circleFour.style.backgroundColor = "red"
    circleFive.style.backgroundColor = "transparent"
    circleSix.style.backgroundColor = "transparent"
    circleSeven.style.backgroundColor = "transparent"
  } else if (scrolledPortionPercent >= 49 && scrolledPortionPercent < 63) {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "red"
    circleFour.style.backgroundColor = "red"
    circleFive.style.backgroundColor = "red"
    circleSix.style.backgroundColor = "transparent"
    circleSeven.style.backgroundColor = "transparent"
  } else if (scrolledPortionPercent >= 63 && scrolledPortionPercent < 74) {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "red"
    circleFour.style.backgroundColor = "red"
    circleFive.style.backgroundColor = "red"
    circleSix.style.backgroundColor = "red"
    circleSeven.style.backgroundColor = "transparent"
  } else {
    circleTwo.style.backgroundColor = "red"
    circleThree.style.backgroundColor = "red"
    circleFour.style.backgroundColor = "red"
    circleFive.style.backgroundColor = "red"
    circleSix.style.backgroundColor = "red"
    circleSeven.style.backgroundColor = "red"
  }
})

// function logIt() {
//   console.log(scrolledPortionPercent)
// }
