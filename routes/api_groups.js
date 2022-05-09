const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const group = require("./schemas/group_schema");

router.post("/group", async (req, res) => {
  res.json(group);
});

app.get("/group/:uid", async (req, res) => {
  const { uid } = req.params;
  const group = await group.findById(uid);
  res.json(group);
});


app.delete('/group/:uid', (req, res) => {
  const { uid } = req.params;
  res.json({ uid });
});

module.exports = router;
