const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALID_ERROR:
            res.json({title: "Validation failed !",message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({title: "Not found",message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTH:
            res.json({title: "UNAUTH",message: err.message, stackTrace: err.stack });
            break;

        case constants.FORB:
            res.json({title: "FORB",message: err.message, stackTrace: err.stack });
            break;

        case constants.SERVER_ERROR:
            res.json({title: "SERVER_ERROR",message: err.message, stackTrace: err.stack });
            break;
    
        default:
            console.log("checked");
            return next();
    }
    
};

module.exports = errorHandler;