let mode = 'full'
// const now = new Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
// const premier = new Date(2024, 9, 4, 19, 30 )
// const rest = (premier - new Date())/1000/60/60/24

function createFormatter() {
    return function(rest){
       return function (formatType){
            let days = Math.floor(rest)
            let hours = Math.floor((rest - days) * 24)
            let minutes = Math.floor(((rest - days) * 24 - hours) * 60)
            let seconds = Math.floor((((rest - days) * 24 - hours) * 60 - minutes) * 60)
            let fullHours = days*24 + hours

            switch(formatType){
                case 'days':
                    return days + ` дней `
                case 'hours':
                    return hours + ` часов `
                case 'minutes':
                    return minutes + ` минут `
                case 'seconds':
                    return seconds + ` секунд`
                case 'fullHours':
                    return fullHours +  ` часов `  
                
            }
        }
    }
}

let formatTime = createFormatter()


function bindMode(name){
    return function() {
        mode = name
        update()
    }
}

fullBtn.addEventListener('click', 
    bindMode('full')
)
dateBtn.addEventListener('click', 
    bindMode('date')
)
timeBtn.addEventListener('click', 
    bindMode('time')
)
function update () {
    output.textContent = format(mode)
}

setInterval( update, 1000)
update()


function format(formatMode){
    const premier = new Date(2024, 9, 4, 19, 30 )
    const rest = (premier - new Date())/1000/60/60/24
    switch(formatMode){
        case 'full': 
            return formatTime(rest)('days') + formatTime(rest)('hours') + formatTime(rest)('minutes') + formatTime(rest)('seconds') 
        case 'date':
            return formatTime(rest)('days')
        case 'time':
            return formatTime(rest)('fullHours') + formatTime(rest)('minutes') + formatTime(rest)('seconds') 
    }
}




slidesPlugin = (activeSlide = 0) =>{
    const slides = document.querySelectorAll('.gallery__slide')

    slides[activeSlide].classList.add('--active')

        slides.forEach( (slide) =>{
            slide.addEventListener('click', () =>{
                 clearActiveClasses()
        
                slide.classList.add('--active')
            })
        })

    function clearActiveClasses () {
        slides.forEach( (slide) =>{
            slide.classList.remove('--active')
        })
    }
}

slidesPlugin(2)