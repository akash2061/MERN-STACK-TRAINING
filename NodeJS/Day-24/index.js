const EventEimtter = require("events");
const http = require("http");
const event = new EventEimtter();

// event.on("myName", () => {
//     console.log("Hello");
// });
// event.on("myID", (name, age) => {
//     console.log(`\n1 - Name : ${name}\nAge : ${age}`);
// });
// event.on("myID", (name, age) => {
//     console.log(`\n2 - Name : ${name}\nAge : ${age}`);
// });
// event.on("myID", (name, age) => {
//     console.log(`\n3 - Name : ${name}\nAge : ${age}`);
// });
// event.emit("myName");
// event.emit("myID", "Morningstar_2061", 20);

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Home Page");
        event.emit("Home");
    } else if (req.url == "/about") {
        res.end("About Page");
        event.emit("About");
    } else {
        res.end("Unknown URL");
        event.emit("Unknown");
    }
});

//! Event

// event.on("Home", () => {
//     console.log("Home Page Accessed");
// });

// event.on("About", () => {
//     console.log("About Page Accessed");
// });

// event.on("Unknown", (url) => {
//     if (url != "/favicon.ico") {
//         console.log("Unknown Page Accessed", url);
//     }
// });

//! Server

// server.on("request", (req, res) => {
//     if (req.url != "/favicon.ico") {
//         console.log("Request Event", req.url);
//     }
// });

server.on("connection", (socket) => {
    console.log("Connection");
});

// server.on("close",()=>{
//     console.log("Server Close");
// });

// setTimeout(() => {
//     server.close();
// }, 5000);

server.listen(300, "127.0.0.1", () => {
    console.log("server is running at http://127.0.0.1:300");
});