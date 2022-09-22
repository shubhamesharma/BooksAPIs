const bcrypt = require('bcrypt');
const Users = require('../model/user.model');
const userService = require('../service/user.service');
const profileService = require('../service/user.service');
const generateAccessToken = require('../utility/generateAccessToken');

async function get(req, res) {
    try {
        const response = await userService.get(req.query);
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response,
        });
        // res.sendStatus(200);
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'Failed',
            data: [],
        });
    }

}

async function getByEmail(req, res) {
    const { emailId, password } = req.params;
    const response = await photoService.getByEmail(emailId, password);
    res.status(200);
    res.send({
        message: 'Fetched',
        data: response,
    });
}

async function register(req, res) {
    try {
        const { emailId, password } = req.body;
        const passwordHash = bcrypt.hashSync(password, process.env.HASH_SALT);
        const response = await userService.post({ emailId, password: passwordHash });
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response
        });
        // res.sendStatus(200)
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'Failed',
            data: []
        });
    }
}

async function login(req, res) {
    const { emailId, password } = req.body;
    // try{}catch(e){}
    const user = await userService.getByEmail(emailId);
    if (user) {
        const passwordHash = user.password;
        if (bcrypt.compareSync(password, passwordHash)) {
            res.status(200).send({
                message: 'Valid user',
                token: generateAccessToken(emailId)
            });
        } else {
            res.status(400).send({
                message: 'Invalid login',
            })
        }
    } else {
        res.sendStatus(400)
    }
}

async function deleteAll(req, res) {
    const responce = await userService.deleteAll();
    res.status(200);
    res.send({
        message: 'Deleted',
        data: [],
    });
}

async function readProfile(req, res) {
    try {
        const response = await profileService.readProfile(req.query);
        res.status(200);
        res.send({
            message: 'Fetched',
            data: response,
        });
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'Failed',
            data: []
        });
    }
}

async function createProfile(req, res) {
    try {
        const { FirstName, LastName, Address, Age, Qualification } = req.body;
        const responce = await profileService.createProfile({ FirstName, LastName, Address, Age, Qualification });
        res.status(200);
        res.send({
            message: 'Fetched',
            data: responce
        });
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'Failed',
            data: []
        });
    }

}

async function updateProfile(req, res) {
    try {
        const responce = await profileService.updateProfile(req.body);
        res.status(200);
        res.send({
            message: 'Updated',
            data: responce
        });
    } catch (e) {
        console.error(e.message);
        res.status(400);
        res.send({
            message: 'Not Updated',
            data: [],
        });
    }
}

async function deleteProfile(req, res) {
    const { id } = req.params;
    const responce = await profileService.deleteProfile(id);
    res.status(200);
    res.send({
        message: 'Deleted',
        data: [],
    });

}
module.exports = {
    get,
    getByEmail,
    register,
    login,
    deleteAll,
    readProfile,
    createProfile,
    updateProfile,
    deleteProfile
}