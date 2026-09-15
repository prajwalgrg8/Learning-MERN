import jwt from "../utils/jwt.js";

//verify if the user is logged in or not
const auth = (req, res, next) => {
  const cookie = req.headers.cookie;

  const token = cookie?.split("="[1]); // [authToken, "values"]

  try {
    //token verify
    const data = jwt.verifyToken(token);

    req.user = data;

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
}

export default auth;