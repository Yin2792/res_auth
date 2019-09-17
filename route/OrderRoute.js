const express = require("express");
const route = express.Router();
const Role = require('../_helpers/role');
const verifyToken = require('../route/authorize');
const order_controller = require('../controller/OrderController');
route.post('/orders/add',verifyToken(),order_controller.order_add);
module.exports = route