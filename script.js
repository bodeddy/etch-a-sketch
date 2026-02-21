// https://www.theodinproject.com/lessons/foundations-etch-a-sketch

/*
https://www.theodinproject.com/lessons/foundations-etch-a-sketch#extra-credit

Still TODO: the Extra credit section. Ran out of steam on this one. 
*/

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
    if (+user > 100) {
        alert("Too big a number!");
        return 16;
    } else {
        return +user;
    }
}

gridButton.addEventListener("click", () => {
    let userInput = getUserInput();
    containerDiv.replaceChildren();
    createGrid(userInput)
});
