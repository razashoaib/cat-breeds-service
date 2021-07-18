const { REQUEST_TYPES } = require('../common/constants');

const validateRequest = (req, res, next) => {
    const { type } = req.query;

    switch (type.toLowerCase()) {
    case REQUEST_TYPES.CHILD_FRIENDLY:
        return next();
    case REQUEST_TYPES.DOG_FRIENDLY:
        return next();
    case REQUEST_TYPES.STRANGER_FRIENDLY:
        return next();
    case REQUEST_TYPES.COMBINED:
        return next();
    default:
        return res.status(400).json({
            error:
            'Query string type should be one of child_friendly, dog_friendly, stranger_friendly or combined',
        });
    }
};

module.exports = { validateRequest };
