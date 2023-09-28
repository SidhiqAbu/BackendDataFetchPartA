
{

    const express = require('express');
    const routs = express.Router();
    routs.use(express.urlencoded());

    const homeController = require('../controllers/postsList');

    routs.get('/postsList', homeController.postsList);

    module.exports = routs;
}
  
