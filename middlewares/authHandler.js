const jwt = require('jsonwebtoken');

const authHandler = (req,res,next) => {
    try {
        const token = jwt.verify(req.headers.token,"hqgct56vsd'hu");
        const { _id } = token;
        req.user = _id;
        console.log(req.user);
        return next();
    } catch (err) {
        res.send("Invalid user");
    }
    
}

module.exports = { authHandler }