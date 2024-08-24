let box = document.getElementById("box");

// Change background color on mouseover (hover)
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
});

// Revert background color on mouseout (hover ends)
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "blue";
});
