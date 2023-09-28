

{

    const express = require('express');
    const routs = express.Router();
    routs.use(express.urlencoded());

    const homeController = require('../controllers/index');

    routs.get('/', homeController.home);
    routs.use('/home',require('./postsList'));
    routs.use('/home',require('./usersList'));
    
    module.exports = routs;
}
