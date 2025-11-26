const express = require("express");
const { createOrder } = require("./order.controller");

const router = express.Router();

//create order endpoint
router.post("/", createOrder);

module.exports = router;
