const logger = (req, res, next) => {
    const httpMethod = req.method;
    const url = req.originalUrl;

    console.log(`${httpMethod} ${url}`);

    next();
};

export default logger;