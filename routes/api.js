const express = require("express");
const router = express.Router();

router.use("/users", require("./api_users"));
// router.use("/groups",require("./api_groups"))
// add api
module.exports = router;
