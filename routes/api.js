const express = require("express");
const router = express.Router();

router.use("/users", require("./api_users"));
// add api
module.exports = router;
