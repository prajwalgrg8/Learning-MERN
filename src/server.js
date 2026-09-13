import express from "express";
import config from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
 
import connectDB from "./config/database.js";

const app = express(); //creating express instance

app.user(express.json()); //using this instead of body-parser

connectDB();

app.get("/", (request, response) => {
    response.send("Home");
});

app.get("/about", (request, response) => {
    response.send("About");
});

app.get("/contact", (request, response) => {
    response.send("Contact");
});

app.use("/api/auth", authRoutes); //using auth routes
app.use("/api/users", userRoutes); //using users route
app.use("/api/", productRoutes); //using products route



app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}...`)
});