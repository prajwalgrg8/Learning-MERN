import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (payload) => {
    const token = jwt.sign(payload, config.jwtSecret, {
        expiresIn: "1d",
    }); //payload: data, then secret

    return token;
};

export default { generateToken };