function start(n = 16) {
  drawGrid(n)
}

function drawGrid(numberOfRows) {
  let container = document.querySelector('.container')
  for (let i = 1; i <= numberOfRows * numberOfRows; i++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')

    let percentage = `${100 / numberOfRows}%`
    cell.style.flexBasis = percentage

    container.appendChild(cell)
  }
}

start()
