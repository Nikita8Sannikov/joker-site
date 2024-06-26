import { updateSlideInfo, mainSlide, sidebar } from "..//slider/slider.js"

const dropZone = document.querySelector(".drop-zone")
const fileInput = document.getElementById("file-input")
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

export const dropZonePlugin = () => {
 
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }

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
}
