const express = require('express');
const route = express.Router();
var user_controller = require('../controller/UserController');

route.post('/users/login',user_controller.user_login);
route.post('/users/add',user_controller.user_add);
 
module.exports = route;
