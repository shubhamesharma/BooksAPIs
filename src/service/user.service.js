const bcrypt = require('bcrypt');
const { Op } = require('sequelize')
const db = require('../db');
const Profile = require('../model/profile.model');
const Users = require('../model/user.model')

async function get(query) {
    const user = await Users.findAll();
    return user;
}

async function getByEmail(emailId) {
    const user = await Users.findOne({
        where: {
            emailId: emailId,
        }
    });
    return user;
}

async function post(body) {
    const { emailId, password } = body;
    const user = await Users.create({ emailId: emailId, password: password });
    return user;
}

async function deleteAll(query) {
    const user = await Users.destroy();
    return user;
}

async function readProfile(query) {
    const profiles = await Profile.findAll()
    return profiles;
}

async function createProfile(body) {
    const { FirstName, LastName, Address, Age, Qualification } = body;
    const profiles = await Profile.create({ FirstName, LastName, Address, Age, Qualification });
    return profiles;
}

async function updateProfile(body) {
    const { id, FirstName, LastName, Address, Age, Qualification } = body;
    const profile = await Profile.update({ FirstName, LastName, Address, Age, Qualification }, {
        where: {
            id: id
        }
    });
    return profile;
}

async function deleteProfile(params) {
    const id = params;
    const profiles = await Profile.destroy({
        where: {
            id: id
        }
    });
    return profiles;
}

module.exports = {
    get,
    getByEmail,
    post,
    deleteAll,
    readProfile,
    createProfile,
    updateProfile,
    deleteProfile
}