const { Op } = require("sequelize");
const db = require('../db');
const { Photos } = require('../model/photos.model');

async function getById(id) {
    let photo = null
    try {
        photo = await Photos.findByPk(id);
    } catch (e) {
        console.error('id=>', id)
    }
    return photo;
}

async function get(query) {
    // const { id } = query;

    const photo = await Photos.findAll();
    //     {
    //     where: {
    //         [Op.or]: [
    //             { id: id, },
    //             { title: "shubham1", }
    //         ]
    //     }
    // });
    return photo;
}

async function post(body) {
    const { albumId, title, url, thumbnailUrl } = body;
    const photo = await Photos.create({ albumId, title, url, thumbnailURL: thumbnailUrl });
    return photo;
}

async function put(payload) {
    const { id, albumId, title } = payload;
    const where = {};
    if (albumId) {
        where['albumId'] = albumId;
    }
    if (id) {
        where['id'] = id;
    }
    if (Object.keys(where).length < 1)
        return;
    const photo = await Photos.update({ title }, { where });
    return photo;
}

async function deleteAll() {
    const result = await sql`DELETE FROM photos`;
    return result
}

module.exports = {
    getById,
    get,
    post,
    put,
    deleteAll
}
