// Build a browser version of something between a sketchpad and an Etch-A-Sketch.

// Reference a container for the grid and create a grid square

const container = document.querySelector("#container");

function createSquare () {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
}

createSquare();
