import express from "express";
import config from "./config/config.js";
import userRoute from "./routes/userRoutes.js";
import productsRoutes from "./routes/productRoutes.js";
 
import connectDB from "./config/database.js";

const app = express(); //creating express instance

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

app.use("/api/users", userRoute); //using users route
app.use("/api/", productsRoutes); //using products route



app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}...`)
});