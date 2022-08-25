const { isNumber } = require("../utility/number.utility");

function ablumValidator(req, res, next) {
    const { albumId } = req.query;

    if (!albumId) next();

    else if (isNumber(albumId) && albumId > 0) {
        next();
        return;
    }
    else {
        res.status(400);
        res.send({
            message: 'Invalid album id',
            data: [],
        });
    }
}

module.exports = {
    ablumValidator,
}
