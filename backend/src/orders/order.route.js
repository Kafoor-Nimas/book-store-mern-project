const express = require("express");
const { craeteAOrder } = require("./order.controller");

const router = express.Router();

//create order endpoint
router.post("/",craeteAOrder)

module.exports = router;
