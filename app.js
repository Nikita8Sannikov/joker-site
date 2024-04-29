const now = new Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const premier = new Date(2024, 9, 4, 19, 30 )

function update () {
    output.textContent = Math.floor((premier - now)/1000/60/60/24) + ` дней`
}
update()