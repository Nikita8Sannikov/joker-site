const mainSlide = document.querySelector(".slider__main-slide")
const sidebar = document.querySelector(".slider__sidebar")
let slidesCount = mainSlide.querySelectorAll("div").length
const upBtn = document.querySelector(".controls__up-button")
const downBtn = document.querySelector(".controls__down-button")
let sideSlidesCount = sidebar.querySelectorAll("div").length
const slider = document.querySelector(".slider")

export const sliderPlugin = (activeSlideIndex = 0) => {
 
  sidebar.style.top = `-${(slidesCount - 1) * 80}vh`

  function changeSlide(direction) {
    updateSlideInfo()
    if (direction === "up") {
      activeSlideIndex++
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0
      }
    }

    if (direction === "down") {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1
      }
    }

    const height = slider.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
  }

  function updateSlideInfo() {
    slidesCount = mainSlide.querySelectorAll("div").length
    sideSlidesCount = sidebar.querySelectorAll("div").length
    sidebar.style.top = `-${(slidesCount - 1) * 80}vh`
  }

  upBtn.addEventListener("click", () => {
    changeSlide("up")
  })

  downBtn.addEventListener("click", () => {
    changeSlide("down")
  })
}
