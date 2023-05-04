const newContainer = document.createElement("div");
newContainer.textContent = "Let's draw something nice!";
document.body.appendChild(newContainer);
newContainer.setAttribute("id", "container");

const div1 = document.createElement("div1");
document.body.appendChild(div1);
div1.setAttribute("id", "main");

const grid = document.createElement("div");
document.body.appendChild(grid);
div1.appendChild(grid);
grid.setAttribute("id", "grid");

let input = 257;

function createGrid(input) {
  for (i = 0; i < input; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add(".cell");
  }
}
createGrid(input);
console.log(input);

// create 16 blocks grid
// let input = "";

// for (let i = 1; i < 257; i++) {
//   const div = document.createElement("td");
//   // div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
//   grid.appendChild(div);
// }

//Add class for grid

// const elements = document.querySelectorAll("#grid *");

// elements.forEach((element) => {
//   element.classList.add("cell");
// });

// //hover pc
