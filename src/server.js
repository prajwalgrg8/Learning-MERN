import express from "express";
import config from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import logger from "../src/middlewares/logger.js";
 
import connectDB from "./config/database.js";

const app = express(); //creating express instance

app.use(express.json()); //using this instead of body-parser

app.use(logger); //using logger in every request which helps find an error

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
app.use("/api/products", productRoutes); //using products route



app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}...`)
});