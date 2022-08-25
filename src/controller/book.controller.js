const photoService = require("../service/photo.service");

async function get(req, res) {
    try {
        const response = await photoService.get(req.query);
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response,
        });
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'failed',
            data: [],
        });
    }

}

async function getById(req, res) {
    const { id } = req.params
    // const { params: { id } } = req;
    const response = await photoService.getById(id);
    res.status(200);
    res.send({
        message: 'Fetched',
        data: response,
    });
}

async function create(req, res) {
    try {
        console.log('body===>', req.body);
        const response = await photoService.post(req.body);
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response,
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'failed',
            data: [],
        });
    }
}

async function put(req, res) {
    try {
        const response = await photoService.put(req.body);
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response,
        });
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'failed',
            data: [],
        });
    }
}

async function deleteBook(req, res) {
    await photoService.deleteAll();
    res.status(200);
    res.send({
        message: 'Deleted',
        data: [],
    });
}



module.exports = {
    get,
    getById,
    create,
    put,
    deleteBook
};
