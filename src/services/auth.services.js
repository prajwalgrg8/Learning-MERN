import User from "../models/User";
import bcrypt from "bcrypt";

const login = async (input) => {

    const user = await User.findOne({email: input.email})

    if(!user)
    {
        throw{
            message: "User not found."
        };
    }

    const isPasswordMatched = await bcrypt.compare(input.password, user.password)

    if(!isPasswordMatched)
    {
        throw {
          message: "Invalid credentials.",
        };
    }

    return user;
};

const register = async (input) => {
    //hash password
    const hashedPassword = await bcrypt.hash(input.password, 10) //10 is a salt value

    //prevent creating user with roles
    return await User.create({
        name: input.name,
        email: input.email,
        password: hashedPassword,
        address: input.address,
        phone: input.phone
    });
};

export default {login, register};