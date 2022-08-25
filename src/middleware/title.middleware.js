function titlevalidator(req, res, next) {
    // const title = req.query.title;
    const { query: { title = '' } } = req; // object destructuring --- const { title} = req.query;
    if (title && title.toString().trim() == '') {
        res.status(400).send({
            message: 'Invalid title text',
            data: [],
        });
        return;
    } else if(title) {
        req.query.title = title.trim();
        next()
    }else{
        next()
    }
}

module.exports = {
    titlevalidator
}