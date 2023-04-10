function drawGrid(numberOfRows = 16) {
  let container = document.querySelector('.container')

  container.replaceChildren()

  for (let i = 1; i <= numberOfRows * numberOfRows; i++) {
    let cell = document.createElement('div')
    cell.classList.add('cell')

    let percentage = `${100 / numberOfRows}%`
    cell.style.flexBasis = percentage

    cell.addEventListener('mouseenter', paintCellHandler)

    container.appendChild(cell)
  }
}

function paintCellHandler(event) {
  let color =
    '#' +
    Math.floor(Math.random() * (0xffffff + 1))
      .toString(16)
      .padStart(6, '0')
  event.target.style.backgroundColor = `${color}`
}

function newGridButtonHandler() {
  let gridSize = prompt("What's the new size?", 16)
  if (gridSize > 100) {
    alert('The maximum number of rows of 100')
  } else {
    drawGrid(gridSize)
  }
}

drawGrid()
