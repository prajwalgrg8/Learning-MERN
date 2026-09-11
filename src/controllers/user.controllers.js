import userServices from "../services/user.services.js";   

const getUsers = async (req, res) => {

    const users = await userServices.getUser;

    // res.send(users); //send string data
    res.json(users); //send json data

};

const getFirstUser = async (req, res) => {

    const firstUser = await userServices.getFirstUser;

    res.json(firstUser);

};

const getUserById = async (req, res) => {

    const id = req.params.userId;

    const user = await userServices.getUserById(id);

    if (!user) {
        return res.send("User not found.");
    }

    res.json(user);
};

const createUser = async (req, res) => {
    try{
        const createdUser = await userServices.createUser();

        res.json(createdUser);
    }
    catch(error)
    {
        res.status(400).json(error.message);
    }
    
}

export default {getUsers, getFirstUser, getUserById, createUser};