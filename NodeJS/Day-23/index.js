//! CJS -> CommonJS

const fs = require("fs"); // same as -> import fs from "fs";

fs.writeFileSync("fileName.txt", "Content")

let data = fs.readFileSync("fileName.txt");
console.log(data);
console.log(data.toString());

fs.appendFileSync("fileName.txt", " Append.")
data = fs.readFileSync("fileName.txt");
console.log(data.toString());

fs.renameSync("fileName.txt", "test.txt");