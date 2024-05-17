import {galleryPlugin} from './gallery/gallery.js'
import {update, bindMode} from './timer/timer.js'
import {sliderPlugin} from './slider/slider.js'
import {dropZonePlugin} from './dropzone/dropzone.js'

//Вызываем таймер
setInterval(update, 1000)
update()

//Вызываем Галерею
galleryPlugin(2)

//Вызываем Слайдер
sliderPlugin(0)

//Вызываем Дропзон
dropZonePlugin()
