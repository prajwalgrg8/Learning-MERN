import http from "http";

//creating server
const server = http.createServer( (request, response) => {
    response.writeHead(200, {
        "content-type" : "application/json",
        // "content-type" : "text/plain",
        // "content-type" : "text/html"
    });

    //response.write("<h1>Hello World</h1>");
    // response.write("Hello World");
    //response.end();

    response.end(JSON.stringify({name : "Goray", age : 25}));
}); 

server.listen(3000, () => {
    console.log("Server running at port 3000...")
}); //3000 = port number


