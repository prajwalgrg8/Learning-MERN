import fs from "fs/promises";

async function fetchData()
{
    try{
        const users = await fs.readFile("data/user.json", "utf-8");

        console.log(users);
    }
    catch(error)
    {
        console.log(error);
    }
    finally {
        console.log("Finall executed.")
    }
}

fetchData();

//Asynchronous arrow function
const myFunction = async () => {

}

const fetchApiData = async () => {

    const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await rawData.json();

    console.log(data);

}

fetchApiData();

