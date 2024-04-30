let mode = 'full'
// const now = new Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
// const premier = new Date(2024, 9, 4, 19, 30 )
// const rest = (premier - new Date())/1000/60/60/24

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
            return Math.floor(rest)+ ` дней `+
            Math.floor((rest - Math.floor(rest))*24)+ ` часов `+
            Math.floor(((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60)+` минут ` +  Math.floor(((((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60) - Math.floor(((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60))*60) + 
            ` секунд `
        case 'date':
            return  Math.floor(rest)+ ` дней `
        case 'time':
            return  (Math.floor(rest)*24) + Math.floor((rest - Math.floor(rest))*24)+ ` часов ` + Math.floor(((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60) +  ` минут ` +  Math.floor(((((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60) - Math.floor(((rest - Math.floor(rest))*24 - Math.floor((rest - Math.floor(rest))*24))*60))*60) + ` секунд `
    }
}


