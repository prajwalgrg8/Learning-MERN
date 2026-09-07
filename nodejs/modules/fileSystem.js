import fs from 'fs'; //fileSystem as a variable name.

//Synchronous: Blocking operation

//Asynchronous: Non-blocking operation

//Read

const syncResult = fs.readFileSync("data/data.txt", "utf8" ); 
//read files synchronously: two parameter (path, encoding/decoding)

console.log(syncResult);

//Reading Asynchronously same as sync but takes a callback function with two parameters error and data
fs.readFile("data/data.txt", "utf8", (error, data) =>{
    if(error)
    {
        console.log(error);
    }else{
        console.log(data);
    }
});

//Write

// //Synchronously
// fs.fileWriteSync("data/data.txt", "Good to learn new program.");

// //Asynchronously
// fs.fileWrite("data/data.txt", "THis is the newly written data.", (error, data) =>{
//     if(error)
//     {
//         console.log(error);
//     } else{
//         console.log("File read successfully");
//     }
// }); 


//Update

fs.appendFileSync("data/data.txt", " This is the appended text synchronously.");

fs.appendFile("data/data.txt", " This is the appended text asynchornously.", () => {});

//adding new json file synchornously
fs.appendFileSync("data/users.json", JSON.stringify([{name: "Goray", age: "25"}]));


//Delete

fs.rmSync("data/users.json");

fs.rm("data/users.json");


