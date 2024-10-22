const gridSize = 600;
let size = 16;
let newSize = size;

const grid = document.querySelector(".grid");
grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

const resizeGrid = document.getElementById("resize");
resizeGrid.addEventListener("click", () => {
  let userSize = prompt("Please enter a size (1-100):");
  newSize = parseInt(userSize);
  makeGrid(newSize);
});

const resetGrid = document.getElementById("reset")
resetGrid.addEventListener("click", () => {
    makeGrid(newSize)
})

function makeGrid(size) {
  grid.innerHTML = ""; //Clear the old grid
  let numOfCells = size * size;
  for (let i = 0; i < numOfCells; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${gridSize / size - 2}px`; // Set width
    cell.style.height = `${gridSize / size - 2}px`; // Set height
    cell.classList.add("cell");
    grid.appendChild(cell);
    const setColor = () =>{
        let randColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randColor;
    } 
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = setColor();
    });
  }
}

makeGrid(16);
