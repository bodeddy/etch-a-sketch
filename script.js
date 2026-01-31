const containerDiv = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement("div");
    containerDiv.appendChild(gridDiv)
    gridDiv.textContent = "Square";
    gridDiv.classList.add("grid");
};