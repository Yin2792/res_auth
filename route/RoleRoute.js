const express = require('express');
const route = express.Router();
const verifyToken = require('../route/auth');
var role_controller = require('../controller/RoleController');

route.post('/roles/add',role_controller.role_add);
route.get('/roles/get',verifyToken,role_controller.role_get);
module.exports = route;
