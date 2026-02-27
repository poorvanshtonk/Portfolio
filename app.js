// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     console.log(req.method, req.url);
//     if (req.url === "/" || req.url === "/index.html") {
//         const filePath = path.join(__dirname, "index.html");

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "text/plain" });
//                 res.end("Error loading page");
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             }
//         });
//     }

//     else if (req.url === "/assets/css/style.css") {
//         const filePath = path.join(__dirname, "assets", "css", "style.css");

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end();
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/css" });
//                 res.end(data);
//             }
//         });
//     }
//     else if (req.url === "/assets/js/main.js") {
//         const filePath = path.join(__dirname, "assets", "js", "main.js");

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end();
//             } else {
//                 res.writeHead(200, { "Content-Type": "application/javascript" });
//                 res.end(data);
//             }
//         });
//     }
//     else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 Page Not Found");
//     }
// });



// const PORT = 8001;

// server.listen(PORT, "0.0.0.0", () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//     console.log(`Server is running on network: 10.7.17.46:${PORT}`);
// });



const express = require("express");
const path = require("path");

const app = express();




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Serve static assets from the Public directory
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------------
// ROUTES
// ------------------------------

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res) => {
    res.status(404).render("404");
});

// ------------------------------
// SERVER
// ------------------------------

const PORT = process.env.PORT || 8001;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`🚀 Server network at 192.168.1.8:${PORT}`)
});
