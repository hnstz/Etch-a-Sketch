const container = document.querySelector("#gridContainer");
let gridSize = 16;
let row = [];
let r = 0, g = 0, b = 0;
creatingGrid(gridSize);

console.log(typeof container)

function creatingGrid(size) {
    container.innerHTML = '';
    for (let j = 0; j < size; ++j) {
        row[j] = document.createElement("div");
        row[j].classList.add("row");
        for (let i = 0; i < size; ++i) {
            let currDiv = document.createElement("div");
            row[j].appendChild(currDiv);
        }
        container.appendChild(row[j]);
    }

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    row.forEach((divRow) => {
        const divsInRow = divRow.querySelectorAll('.row div');
        divsInRow.forEach((d) => {
            d.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            d.addEventListener("mouseenter", () => d.style.backgroundColor = `rgb(${b}, ${r}, ${g})`);
            
        })
        
    })
}

const gridButt = document.querySelector("#newGridButt");
gridButt.addEventListener("click", () => {
    gridSize = prompt("Please, enter a new greed size (less than 100)");
    while (gridSize > 100 || isNaN(gridSize) || gridSize.trim() == '') {
        gridSize = prompt("sth went wrong, let's try again! \nPlease, enter a new greed size (less than 100)")
    }
    creatingGrid(gridSize);
})




//добавить класс диву, на котором стоит мышка

//внешний цикл по массиву строк, внутренний по элементам строк
// добавить прослушивание ко всем дивам
// если событие, то ф-я