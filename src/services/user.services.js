import fs from "fs/promises";

const getUser = async () => {
    const users = await fs.readFile("data/users.json", "utf-8");

    return users;
}

const getFirstUser =async () => {
    const users = await fs.readFile("data/users.json", "utf-8");

    const firstUser = JSON.parse(users).find((user) => user.id == 1);

    return firstUser;
}

const getUserById = async (id) => {
    
    const users = await fs.readFile("data/users.json", "utf-8");

    const user = JSON.parse(users).find((user) => user.id == id);

    return user;
}

export default { getUser, getFirstUser, getUserById}