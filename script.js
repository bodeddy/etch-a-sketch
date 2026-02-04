const containerDiv = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    containerDiv.appendChild(gridDiv)
    gridDiv.classList.add("grid");
};

const gridSquare = document.querySelectorAll(".grid");

gridSquare.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";
    })    
})

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
    gridSquare.forEach((element) => {
        element.style.backgroundColor = "";
    })
})
