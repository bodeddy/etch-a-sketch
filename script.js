const gridButton = document.querySelector("#grid-size");
const containerDiv = document.querySelector("#container");
const clearButton = document.querySelector("#clear");


function createGrid (num) {
    for (let i = 0; i < num * num; i++) {
        const gridDiv = document.createElement("div");
        containerDiv.appendChild(gridDiv)
        gridDiv.classList.add("grid");
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
    let user = prompt(Number("Enter a number: "));
    return user;
}


gridButton.addEventListener("click", () => {
    let userInput = getUserInput();
    createGrid(userInput)
});
