const roleBasedAuth = (role) => (req, res, next) => {
    if(req.user.roles.includes(role))
    {
        next();
    }
    else{
        res.status(403).json({message: "Access Denied."})
    }
};

export default roleBasedAuth;