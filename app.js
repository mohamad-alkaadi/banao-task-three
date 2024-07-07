gsap.registerPlugin(ScrollTrigger)

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
const slideOne = document.querySelector(".slide-1")

const pageViewportHeight = window.innerHeight
const pageHeight = document.documentElement.scrollHeight * 7
// ------------------------------slides------------------------------

// ------------------------slide one-------------
let slideOneImgOneTween = gsap.fromTo(
  ".slide-1-img-1",
  {
    y: 500,
    opacity: 0,
    // duration: 3,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
  }
)

let slideOneImgTwoTween = gsap.fromTo(
  ".slide-1-img-2",
  {
    y: 500,
    opacity: 0,
    // duration: 3,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
  }
)
// ------------------------slide two-------------
let slideTwoImgOneTween = gsap.fromTo(
  ".slide-2-img-1",
  {
    y: 100,
    opacity: 0,
    paused: true,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)

let slideTwoImgTwoTween = gsap.fromTo(
  ".slide-2-img-2",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
// ------------------------slide three-------------
let slideThreeImgOneTween = gsap.fromTo(
  ".slide-3-img-1",
  {
    y: 100,
    opacity: 0,
    paused: true,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)

let slideThreeImgTwoTween = gsap.fromTo(
  ".slide-3-img-2",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
// ------------------------slide four-------------
let slideFourImgOneTween = gsap.fromTo(
  ".slide-4-img-1",
  {
    x: -100,
    opacity: 0,
    paused: true,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)

let slideFourImgTwoTween = gsap.fromTo(
  ".slide-4-img-2",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFourImgThreeTween = gsap.fromTo(
  ".slide-4-img-3",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFourImgFourTween = gsap.fromTo(
  ".slide-4-img-4",
  {
    y: -180,
    opacity: 0,
  },
  {
    y: -130,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFourImgFiveTween = gsap.fromTo(
  ".slide-4-img-5",
  {
    y: 100,
    x: 100,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,

    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
// ------------------------slide five-------------
let slideFiveImgOneTween = gsap.fromTo(
  ".slide-5-img-1",
  {
    y: -180,
    opacity: 0,
    paused: true,
  },
  {
    y: -120,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)

let slideFiveImgTwoTween = gsap.fromTo(
  ".slide-5-img-2",
  {
    y: 110,
    opacity: 0,
  },
  {
    y: 100,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFiveImgThreeTween = gsap.fromTo(
  ".slide-5-img-3",
  {
    y: -180,
    opacity: 0,
  },
  {
    y: -25,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFiveImgFourTween = gsap.fromTo(
  ".slide-5-img-4",
  {
    y: 210,
    opacity: 0,
  },
  {
    y: 200,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideFiveImgFiveTween = gsap.fromTo(
  ".slide-5-img-5",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,

    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
// ------------------------slide six-------------
let slideSixImgOneTween = gsap.fromTo(
  ".slide-6-img-1",
  {
    y: 100,
    opacity: 0,
    paused: true,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.2,
    paused: true,
  }
)

// ------------------------slide seven-------------
let slideSevenImgOneTween = gsap.fromTo(
  ".slide-7-img-1",
  {
    y: 200,
    opacity: 0,
    paused: true,
  },
  {
    y: 180,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)
let slideSevenImgTwoTween = gsap.fromTo(
  ".slide-7-img-2",
  {
    y: 200,
    opacity: 0,
    paused: true,
  },
  {
    y: 180,
    opacity: 1,
    duration: 0.5,
    paused: true,
  }
)

// -----------------------------------------
halfTwo.addEventListener("scroll", () => {
  const scrolledPortion = halfTwo.scrollTop

  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewportHeight)) * 271

  const scrolledPortionPercent = Math.floor((scrolledPortionDegree / 360) * 100)

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
  // ----------------------------gsap conditions-----------------------
  if (scrolledPortionPercent <= 3) {
    slideOneImgOneTween.play()
    slideOneImgTwoTween.play()
    slideTwoImgOneTween.reverse()
    slideTwoImgTwoTween.reverse()
    slideThreeImgOneTween.reverse()
    slideThreeImgTwoTween.reverse()
    slideFourImgOneTween.reverse()
    slideFourImgTwoTween.reverse()
    slideFourImgThreeTween.reverse()
    slideFourImgFourTween.reverse()
    slideFourImgFiveTween.reverse()
    slideFiveImgOneTween.reverse()
    slideFiveImgTwoTween.reverse()
    slideFiveImgThreeTween.reverse()
    slideFiveImgFourTween.reverse()
    slideFiveImgFiveTween.reverse()
  } else if (scrolledPortionPercent < 11) {
    slideOneImgOneTween.reverse()
    slideOneImgTwoTween.reverse()
  } else if (scrolledPortionPercent === 12) {
    slideTwoImgOneTween.play()
    slideTwoImgTwoTween.play()
  } else if (scrolledPortionPercent == 15) {
    slideTwoImgOneTween.reverse()
    slideTwoImgTwoTween.reverse()
  } else if (scrolledPortionPercent < 25) {
    slideThreeImgOneTween.reverse()
    slideThreeImgTwoTween.reverse()
  } else if (scrolledPortionPercent == 25) {
    slideThreeImgOneTween.play()
    slideThreeImgTwoTween.play()
  } else if (scrolledPortionPercent <= 27) {
    slideThreeImgOneTween.reverse()
    slideThreeImgTwoTween.reverse()
  } else if (scrolledPortionPercent < 37) {
    slideFourImgOneTween.reverse()
    slideFourImgTwoTween.reverse()
    slideFourImgThreeTween.reverse()
    slideFourImgFourTween.reverse()
    slideFourImgFiveTween.reverse()
  } else if (scrolledPortionPercent == 37) {
    slideFourImgOneTween.play()
    slideFourImgTwoTween.play()
    slideFourImgThreeTween.play()
    slideFourImgFourTween.play()
    slideFourImgFiveTween.play()
  } else if (scrolledPortionPercent <= 40) {
    slideFourImgOneTween.reverse()
    slideFourImgTwoTween.reverse()
    slideFourImgThreeTween.reverse()
    slideFourImgFourTween.reverse()
    slideFourImgFiveTween.reverse()
  } else if (scrolledPortionPercent == 49) {
    slideFiveImgOneTween.play()
    slideFiveImgTwoTween.play()
    slideFiveImgThreeTween.play()
    slideFiveImgFourTween.play()
    slideFiveImgFiveTween.play()
  } else if (scrolledPortionPercent < 62) {
    slideSixImgOneTween.reverse()
  } else if (scrolledPortionPercent == 62) {
    slideSixImgOneTween.play()
  } else if (scrolledPortionPercent == 65) {
    slideSixImgOneTween.reverse()
  } else if (scrolledPortionPercent == 75) {
    slideSevenImgOneTween.play()
    slideSevenImgTwoTween.play()
  }

  // -----------------------------condition end-------------------------

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
    // slideOneImgOneTween.play()
    // slideOneImgTwoTween.play()
    // slideTwoImgOneTween.reverse()
    // slideTwoImgTwoTween.reverse()
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
    // slideOneImgOneTween.reverse()
    // slideOneImgTwoTween.reverse()
    // slideTwoImgOneTween.play()
    // slideTwoImgTwoTween.play()
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
