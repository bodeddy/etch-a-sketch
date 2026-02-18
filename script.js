// Build a browser version of something between a sketchpad and an Etch-A-Sketch.

// Reference a container for the grid and create a grid square

const container = document.querySelector("#container");

function createSquare () {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    })
}

// This routine creates a default 16x16 grid.

function createGrid (num) {
    for (let i = 0; i < num * num; i++) {
        createSquare();
    }
}

createGrid(2);
