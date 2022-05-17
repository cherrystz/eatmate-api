const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const group = require("./schemas/group_schema");
const user = require("./schemas/user_schema");

router.post("/search", async (req, res) => {
  const doc = await group.find();
  return res.json({ result: "created", data: doc });
});

router.post("/create_group", async (req, res) => {
  const doc = await group.create(req.body);
  const owner = await user.findOne({ uid: req.body.groupOwner });
  owner.group_id.push(doc._id);
  await owner.save();
  return res.json({ result: "created", data: owner, group: doc });
});

router.get("/home_group_rec", async (req, res) => {
  const doc = await group.find({}).limit(3);
  return res.json({ result: "fetch", data: doc });
});

router.get("/group/:id", async (req, res) => {
  const { id } = req.params;
  const doc = await group.findOne({ _id: id });
  return res.json({ result: "success", data: doc });
});

router.get("/category/:cat", async (req, res) => {
  const { cat } = req.params;
  const doc = await group.find({ groupType: cat });
  return res.json({ result: "success", data: doc });
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const doc = await group.deleteOne({ _id: id });
  return res.json({ result: "success", data: "yes" });
});

router.get("/join/:id/:uid", async (req, res) => {
  const { id, uid } = req.params;
  const doc = await group.findOne({ _id: id });
  doc.groupMember.push(uid);
  const own = await user.findOne({ uid });
  own.group_id.push(id);
  await doc.save();
  await own.save();
  return res.json({ result: "success", data: own });
});

router.get("/leave/:id/:uid", async (req, res) => {
  const { id, uid } = req.params;
  const doc = await group.findOne({ _id: id });
  var docIndex = doc.groupMember.indexOf(uid);
  if (docIndex !== -1) {
    doc.groupMember.splice(docIndex, 1);
  }
  const own = await user.findOne({ uid });
  var ownIndex = own.group_id.indexOf(id);
  if (ownIndex !== -1) {
    own.group_id.splice(ownIndex, 1);
  }

  await doc.save();
  await own.save();
  return res.json({ result: "success", data: own });
});

module.exports = router;
