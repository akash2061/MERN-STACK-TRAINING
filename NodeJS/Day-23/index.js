//! CJS -> CommonJS

// const fs = require("fs"); // same as -> import fs from "fs";
const os = require("os");
const path = require("path");

// fs.writeFileSync("fileName.txt", "Content")

// let data = fs.readFileSync("fileName.txt");
// console.log(data);
// console.log(data.toString());

// fs.appendFileSync("fileName.txt", " Append.")
// data = fs.readFileSync("fileName.txt");
// console.log(data.toString());
// console.log("Hello");

// fs.renameSync("fileName.txt", "test.txt");

// fs.writeFile("test.txt", "ASync Text.", (e) => {
//     if (e) {
//         console.log(e);
//     } else {
//         console.log("File Created Successfully.")
//     }
// });

// fs.appendFile("test.txt", " ASync Append.", (e) => { console.log(e); });
// fs.readFile("test.txt", "UTF-8", (e, data) => {
//     console.log(e);
//     console.log(data);
// });

// fs.unlink("test.txt", (e) => {
//     console.log("File Deleted.");
// });

// fs.mkdir("New-Folder", (e) => {
//     console.log("\nFolder Created. ");
// });

// fs.rmdir("New-Folder", (e) => {
//     console.log(e);
// });

console.log();
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log();

let filepath = "/home/morningstar_2061/Code/MERN-STACK-TRAINING/NodeJS/Day-23/index.js"
console.log(path.dirname(filepath));
console.log(path.extname(filepath));
console.log(path.basename(filepath));
console.log(path.parse(filepath));  //? Return object
console.log(path.join("user", "ref", "bin"));
console.log(path.resolve("user", "ref", "bin"));
console.log();

