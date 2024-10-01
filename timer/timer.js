let mode = "full"
const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")
export const update = () => {
  const output = document.querySelector(".timer__output")

  function getRest() {
    const premier = new Date(2024, 9, 3, 19, 30)
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
          formatTime("fullHours") +
          formatTime("minutes") +
          formatTime("seconds")
        )
    }
  }

  output.textContent = format(mode)

  fullBtn.addEventListener("click", bindMode("full"))
  dateBtn.addEventListener("click", bindMode("date"))
  timeBtn.addEventListener("click", bindMode("time"))
}

export function bindMode(name) {
  return function () {
    mode = name
    update()
  }
}
