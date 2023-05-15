const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const monochromaticBtn = document.querySelector(".monochromatic");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid");

let size = 15;
const createGrid = (number) => {
  const alphabet = "FOOD";
  for (let i = 0; i < number; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");

    for (let j = 0; j < number; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      rows.appendChild(gridBox);
      if (size === 15) {
        let randomLetter =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        alphabet.style;
        gridBox.textContent = randomLetter;
      }
    }
    gridContainer.appendChild(rows);
  }
};

createGrid(size);

//grid size determined by user input

// let getInput = prompt("Enter a whole number between 1 and 100");
// getInput = createElement();
// //grid creation

// function createElement(n = 16) {
//   // alter an existing elements of gridB
//   gridB.innerHTML = "";
//   // css properties
//   document.documentElement.style.setProperty("--grid-cols", n);
//   document.documentElement.style.setProperty("--grid-rows", n);
//   // create the boxes and add them to gridB
//   for (let i = 0; i < n * n; i++) {
//     let box = document.createElement("div");
//     box.id = "box" + i;
//     box.classList = "boxes";
//     gridB.appendChild(box);
//   }
// }
// update with invalid input option

// RETURN FUNCTION WITH LETTER
// const createGrid = (number) => {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (let i = 0; i < number; i++) {
//     let rows = document.createElement("div");
//     rows.classList.add("rows");

//     for (let j = 0; j < number; j++) {
//       let gridBox = document.createElement("div");
//       gridBox.classList.add("grid-box");
//       let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//       gridBox.textContent = randomLetter;
//       rows.appendChild(gridBox);
//       console.log(randomLetter);
//     }
//     gridContainer.appendChild(rows);
//   }
// };
