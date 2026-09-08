import express from "express";
import fs from "fs/promises";
import config from "./config/config.js";

const app = express(); //creating express instance

app.get("/", (request, response) => {
    response.send("Home");
});

app.get("/about", (request, response) => {
    response.send("About");
});

app.get("/contact", (request, response) => {
    response.send("Contact");
});

app.get("/users", async (req, res) => {
    const users = await fs.readFile("data/users.json", "utf-8");

    res.send(users); //send string data
    res.json(JSON.parse(users)); //send json data

})

app.get("/users/first", async (req, res) => {
    const users = await fs.readFile("data/users.json", "utf-8");

    const firstUser = JSON.parse(users).find((user) => user.id == 1);

    res.json(firstUser);
})

//Dynamic route parameter
app.get("users/:userId", async (req, res) => {
    const id = req.params.userId;

    const users = await fs.readFile("data/users.json", "utf-8"); 

    const user = JSON.parse(users).find((user) => user.id == id);

    if(!user)
    {
        return res.send("User not found.");
    }
})


app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}...`)
});