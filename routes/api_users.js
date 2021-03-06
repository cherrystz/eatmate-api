const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require("./schemas/user_schema");

router.post("/check_user", async (req, res) => {
  const doc = await user.findOne({
    uid: req.body.uid,
    provider_id: req.body.provider_id,
  });
  if (!doc) {
    const doc = await user.create(req.body);
    return res.json({ result: "created", data: doc });
  } else {
    return res.json({ result: "existed", data: doc });
  }
});

router.get("/user/:uid", async (req, res) => {
  const doc = await user.findOne({
    uid: req.params.uid,
  });
  if (doc) {
    return res.json({ result: "success", data: doc.name });
  } else {
    return res.json({ result: "failed", data: "" });
  }
});

router.post("/update_user", async (req, res) => {
  const filter = { uid: req.body.uid };
  const update = {
    birthday: req.body.birthday,
    name: req.body.name,
    gender: req.body.gender,
    profile_picture: req.body.profile_picture,
    successful_profile: true,
  };

  let doc = await user.findOneAndUpdate(filter, update, {
    new: true,
  });
  return res.json({ result: "updated", data: doc });
});

module.exports = router;
