// Build a browser version of something between a sketchpad and an Etch-A-Sketch.

// Reference a container for the grid and create a grid square

const container = document.querySelector("#container");

for (let i = 0; i < 50; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);

    const boxSize = 450 / 50;
    square.style.height = boxSize + "px";
    square.style.width = boxSize + "px";

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    })

    const clearButton = document.querySelector("#clear");

    clearButton.addEventListener("click", () => {
        square.style.backgroundColor = "";
    })
}


