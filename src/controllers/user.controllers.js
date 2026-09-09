import userServices from "../services/user.services.js";   

const getUsers = async (req, res) => {

    const users = await userServices.getUser;

    // res.send(users); //send string data
    res.json(JSON.parse(users)); //send json data

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

export default {getUsers, getFirstUser, getUserById};