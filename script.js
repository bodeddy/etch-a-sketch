const gridButton = document.querySelector("#grid-size");

function getUserInput () {
    let user = prompt("Enter a number: ");
}

gridButton.addEventListener("click", () => {
    gridDiv.remove();
    getUserInput();
    let userInput = getUserInput();
    createGrid(userInput);
});

// container
const containerDiv = document.querySelector("#container");

function createGrid (num) {
    for (let i = 0; i < num; i++) {
        const gridDiv = document.createElement("div");
        containerDiv.appendChild(gridDiv)
        gridDiv.classList.add("grid");
    }
};

createGrid(256);

// grid
const gridSquare = document.querySelectorAll(".grid");

gridSquare.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";
    })    
})

// clear button
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    gridSquare.forEach((element) => {
        element.style.backgroundColor = "";
    })
})
