import authServices from "../services/auth.services";

const login = async (req, res) => {
    try{
        const data = await authServices.login();

        res.json(data);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
    
};

const register = async (req, res) => {
    try{
        const data = await authServices.register(req.body);
    }
    catch(error)
    {
        res.status(400).json({message: error.message});
    } 
};

export default {login, register};