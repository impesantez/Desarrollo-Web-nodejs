let express = require("express");

let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("hi");
});

app.post("/random", (req, res) => {
    const randomNum = Math.floor(Math.random() * 100);
    res.json({ number: randomNum });
});

app.get("/client", (req, res) => {
    res.sendFile("random.html", { root: "../client" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});