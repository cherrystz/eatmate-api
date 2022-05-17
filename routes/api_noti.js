const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const no = require("./schemas/notification_schema");

router.get("/", async (req, res) => {
  const doc = await no.find();
  return res.json({ result: "success", data: doc });
});

router.post("/", async (req, res) => {
  const doc = await no.create({
    name: req.body.name,
    description: req.body.description,
    time: req.body.time,
  });
  return res.json({ result: "success", data: doc });
});

module.exports = router;
