import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (payload) => {
    const token = jwt.sign(payload, config.jwtSecret, {
        expiresIn: "1d",
    }); //payload: data, then secret

    return token;
};

const verifyToken = (token) => {
    try{
        var decoded = jwt.verify(token, config.jwtSecret);

        return decoded;
    }
    catch(error)
    {
        throw (error);
    }
    
};

export default { generateToken, verifyToken };