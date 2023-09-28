
{

    const express = require('express');
    const routs = express.Router();
    routs.use(express.urlencoded());

    const homeController = require('../controllers/usersList');

    routs.get('/usersList', homeController.userList);

    module.exports = routs;
}
