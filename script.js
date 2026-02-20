const gridButton = document.querySelector("#grid-size");
const containerDiv = document.querySelector("#container");
const clearButton = document.querySelector("#clear");


function createGrid (num) {
    for (let i = 0; i < num * num; i++) {
        const gridDiv = document.createElement("div");
        containerDiv.appendChild(gridDiv)
        gridDiv.classList.add("grid");

        const boxSize = 450 / num;
        gridDiv.style.height = boxSize + "px";
        gridDiv.style.width = boxSize + "px";
    }

    const gridSquare = document.querySelectorAll(".grid");

    gridSquare.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "red";
        })    
    })

    clearButton.addEventListener("click", () => {
        gridSquare.forEach((element) => {
            element.style.backgroundColor = "";
        })
    })

};

createGrid(16);

function getUserInput () {
    let user = prompt("Enter a number: ");
    return +user;
}

gridButton.addEventListener("click", () => {
    let userInput = getUserInput();
    createGrid(userInput)
});
