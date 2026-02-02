const containerDiv = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    containerDiv.appendChild(gridDiv)
    gridDiv.classList.add("grid");
};