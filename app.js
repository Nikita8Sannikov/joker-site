let mode = "full"
// const now = new Date()
const output = document.querySelector(".timer__output")
const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")

const upBtn = document.querySelector(".controls__up-button")
const downBtn = document.querySelector(".controls__down-button")
const slider = document.querySelector(".slider")
const sidebar = document.querySelector(".slider__sidebar")
// const sidebarSlide = document.querySelector('sidebar__slide')
let sideSlidesCount = sidebar.querySelectorAll("div").length
const mainSlide = document.querySelector(".slider__main-slide")
let slidesCount = mainSlide.querySelectorAll("div").length
const dropZone = document.querySelector(".drop-zone")
const fileInput = document.getElementById("file-input")

// const premier = new Date(2024, 9, 4, 19, 30)
// const rest = (premier - new Date()) / 1000 / 60 / 60 / 24

const phrases = [
  "Я вдруг понял, что большинство людей не слушают. Они просто ждут своей очереди снова заговорить.",
  "Я думал, что моя жизнь — трагедия. Но сейчас понял, что это чёртова комедия.",
  "Я надеюсь, что моя смерть будет иметь больше смысла, чем моя жизнь.",
  "Худшее свойство психического заболевания состоит в том, что люди ожидают, что вы будете вести себя так, будто его у вас нет.",
  "Что ты получишь, если смешаешь психически больного одиночку с обществом, которое игнорирует его и обращается с ним как с мусором? Ты получишь то, что заслужил.",
  "Комедия субъективна, Мюррей, разве не так говорят? Вы все, система, которая так много знает, вы решаете, что хорошо, а что плохо. Точно так же, вы решаете, что смешно, а что нет.",
  `— У вас были негативные мысли?
  — Все, что у меня есть, — это негативные мысли.`,
  "Всю жизнь я не знал, существую ли я. Существую! И люди начинают замечать меня.",
  "Это я... или весь мир сходит с ума?",
  "Моя мама всегда говорила мне: «Улыбнись и сделай счастливое лицо». Говорила... мое предназначение — приносить радость и счастье в этот мир.",
  `— Так, то есть дело в том, что вы — псих? В этом ваше оправдание убийства трёх человек?
  — Нет, они слишком фальшиво пели, чтобы иметь право жить.`,
  `— Эй, Мюрей, хотел попросить.
  — Да?
  — Будешь объявлять, назови меня Джокер.`,
]

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}



function getRest() {
  const premier = new Date(2024, 9, 4, 19, 30)
  return (premier - new Date()) / 1000 / 60 / 60 / 24
}

function createFormatter() {
  return function (formatType) {
    const restTime = getRest()
    let days = Math.floor(restTime)
    let hours = Math.floor((restTime - days) * 24)
    let minutes = Math.floor(((restTime - days) * 24 - hours) * 60)
    let seconds = Math.floor(
      (((restTime - days) * 24 - hours) * 60 - minutes) * 60
    )
    let fullHours = days * 24 + hours

    switch (formatType) {
      case "days":
        return days + ` дней `
      case "hours":
        return hours + ` часов `
      case "minutes":
        return minutes + ` минут `
      case "seconds":
        return seconds + ` секунд`
      case "fullHours":
        return fullHours + ` часов `
    }
  }
}

let formatTime = createFormatter()

function bindMode(name) {
  return function () {
    mode = name
    update()
  }
}

fullBtn.addEventListener("click", bindMode("full"))
dateBtn.addEventListener("click", bindMode("date"))
timeBtn.addEventListener("click", bindMode("time"))

function update() {
  output.textContent = format(mode)
}

setInterval(update, 1000)
update()

function format(formatMode) {
  switch (formatMode) {
    case "full":
      return (
        formatTime("days") +
        formatTime("hours") +
        formatTime("minutes") +
        formatTime("seconds")
      )
    case "date":
      return formatTime("days")
    case "time":
      return (
        formatTime("fullHours") + formatTime("minutes") + formatTime("seconds")
      )
  }
}

slidesPlugin = (activeSlide = 0) => {
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

slidesPlugin(2)

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 80}vh`

upBtn.addEventListener("click", () => {
  changeSlide("up")
})

downBtn.addEventListener("click", () => {
  changeSlide("down")
})

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

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault()
  dropZone.classList.add("drag-over")
})

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag-over")
})

dropZone.addEventListener("drop", (event) => {
  event.preventDefault()
  dropZone.classList.remove("drag-over")

  const files = Array.from(event.dataTransfer.files)

  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageUrl = reader.result

        createSlide(imageUrl)
        createSideSlide(imageUrl)
        updateSlideInfo()
      }

      reader.readAsDataURL(file)
    }
  })
})

function createSlide(imageUrl) {
  const slide = document.createElement("div")
  slide.classList.add("main-slide__slide")
  slide.style.backgroundImage = `url('${imageUrl}')`
  // mainSlide.appendChild(slide)
  mainSlide.insertBefore(slide, mainSlide.firstChild)
}

function createSideSlide(imageUrl) {
  const sideSlide = document.createElement("div")
  sideSlide.classList.add("sidebar__slide")
  RGBaster.colors(imageUrl, {
    // Не учитывать белый цвет
    // exclude: ['rgb(255,255,255)'],
    success: function (payload) {
      sideSlide.style.background = `linear-gradient(229.99deg, ${payload.dominant} -26%, ${payload.secondary} 145%)`
    },
  })
  // sideSlide.style.background = `linear-gradient(229.99deg, #eee -26%, #eee2 145%)`
  sidebar.appendChild(sideSlide)
  // sidebar.insertBefore(sideSlide, sidebar.firstChild)

  const pSideSlide = document.createElement("p")
  pSideSlide.textContent = phrases[randomInteger(0, phrases.length)]
  sideSlide.appendChild(pSideSlide)
}

fileInput.addEventListener("change", handleFileSelect)

function handleFileSelect(event) {
  const files = event.target.files
  handleFiles(files)
  // console.log(event.target.files);
}

function handleFiles(files) {
  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageUrl = reader.result

        createSlide(imageUrl)
        createSideSlide(imageUrl)
        updateSlideInfo()
      }

      reader.readAsDataURL(file)
    }
  }
}
