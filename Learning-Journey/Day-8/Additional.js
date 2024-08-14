const color = ["Red", "Blue", "Green"];

const randomindex = Math.floor(Math.random() * color.length);
const randomelement = color[randomindex];

switch (randomelement) {
    case "Red":
        console.log("Color Red");
        break;
    case "Blue":
        console.log("Color Blue");
        break;
    case "Green":
        console.log("Color Green");
        break;
    default:
        console.log("Error");
        break;
}

function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2));