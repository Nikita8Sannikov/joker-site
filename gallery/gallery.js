export const galleryPlugin = (activeSlide = 0) => {
    const slides = document.querySelectorAll(".gallery__slide")
  
    slides[activeSlide].classList.add("--active")
  
    slides.forEach((slide) => {
      slide.addEventListener("mouseover", () => {
        clearActiveClasses()
  
        slide.classList.add("--active")
      })
    })
  
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove("--active")
      })
    }
  }

  