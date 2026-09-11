import User from "../models/User";

const getUser = async () => {
    const users = await User.find();

    return users;
}

const getFirstUser =async () => {
    const users = await fs.User.find();

    const firstUser = JSON.parse(users).find((user) => user.id == 1);

    return firstUser;
}

const getUserById = async (id) => {
    
    const users = await User.findById(id);

    const user = JSON.parse(users).find((user) => user.id == id);

    return user;
}

const createUser = async () => {
    return await User.create({
        name: "Goray Bhai",
        email: "goraybhai10@gmail.com",
        password: "Goraybhai12345",
        phone: 9846646712,
        address: {
            city: "Pokhara"
        }
    });
}

export default { getUser, getFirstUser, getUserById, createUser}