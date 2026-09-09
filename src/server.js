import express from "express";
import config from "./config/config.js";
import userRoute from "./routes/userRoutes.js";

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

app.use("/", userRoute); //using users route


app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}...`)
});