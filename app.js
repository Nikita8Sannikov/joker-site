import {galleryPlugin} from './gallery/gallery.js'
import {update, bindMode} from './timer/timer.js'
import {sliderPlugin} from './slider/slider.js'
import {dropZonePlugin} from './dropzone/dropzone.js'


const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")

// const upBtn = document.querySelector(".controls__up-button")
// const downBtn = document.querySelector(".controls__down-button")
// const slider = document.querySelector(".slider")
// const sidebar = document.querySelector(".slider__sidebar")
// const sidebarSlide = document.querySelector('sidebar__slide')
// let sideSlidesCount = sidebar.querySelectorAll("div").length
// const mainSlide = document.querySelector(".slider__main-slide")
// let slidesCount = mainSlide.querySelectorAll("div").length
// const dropZone = document.querySelector(".drop-zone")
// const fileInput = document.getElementById("file-input")



// const phrases = [
//   "Я вдруг понял, что большинство людей не слушают. Они просто ждут своей очереди снова заговорить.",
//   "Я думал, что моя жизнь — трагедия. Но сейчас понял, что это чёртова комедия.",
//   "Я надеюсь, что моя смерть будет иметь больше смысла, чем моя жизнь.",
//   "Худшее свойство психического заболевания состоит в том, что люди ожидают, что вы будете вести себя так, будто его у вас нет.",
//   "Что ты получишь, если смешаешь психически больного одиночку с обществом, которое игнорирует его и обращается с ним как с мусором? Ты получишь то, что заслужил.",
//   "Комедия субъективна, Мюррей, разве не так говорят? Вы все, система, которая так много знает, вы решаете, что хорошо, а что плохо. Точно так же, вы решаете, что смешно, а что нет.",
//   `— У вас были негативные мысли?
//   — Все, что у меня есть, — это негативные мысли.`,
//   "Всю жизнь я не знал, существую ли я. Существую! И люди начинают замечать меня.",
//   "Это я... или весь мир сходит с ума?",
//   "Моя мама всегда говорила мне: «Улыбнись и сделай счастливое лицо». Говорила... мое предназначение — приносить радость и счастье в этот мир.",
//   `— Так, то есть дело в том, что вы — псих? В этом ваше оправдание убийства трёх человек?
//   — Нет, они слишком фальшиво пели, чтобы иметь право жить.`,
//   `— Эй, Мюрей, хотел попросить.
//   — Да?
//   — Будешь объявлять, назови меня Джокер.`,
// ]

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min)
//   return Math.floor(rand)
// }


//Обрабатываем нажатия кнопок
fullBtn.addEventListener("click", bindMode("full"))
dateBtn.addEventListener("click", bindMode("date"))
timeBtn.addEventListener("click", bindMode("time"))

//Вызываем таймер
setInterval(update, 1000)
update()

//Вызываем Галерею
galleryPlugin(2)

//Вызываем Слайдер
sliderPlugin(0)

//Вызываем Дропзон
dropZonePlugin()
