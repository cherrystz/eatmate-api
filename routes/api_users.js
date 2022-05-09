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

router.post("/delete_user", async (req, res) => {
  const doc = await user.find();
  const data = doc.map((admin) => {
    return admin.uid;
  });
  if (!data.includes(req.body.adminUid)) {
    return res.json({ result: "failed", msg: "Access Denied!" });
  }
  await admin
    .auth()
    .deleteUser(req.body.uid)
    .then(() => {
      return res.json({
        result: "success",
        msg: "Successfully deleted user!",
      });
    })
    .catch((error) => {
      return res.json({ result: "failed", msg: error.message });
    });
});

router.post("/enable_user", async (req, res) => {
  const doc = await user.find();
  const data = doc.map((admin) => {
    return admin.uid;
  });
  if (!data.includes(req.body.adminUid)) {
    return res.json({ result: "failed", msg: "Access Denied!" });
  }
  await admin
    .auth()
    .updateUser(req.body.uid, {
      disabled: false,
    })
    .then(() => {
      return res.json({
        result: "success",
        msg: "Successfully enabled user!",
      });
    })
    .catch((error) => {
      return res.json({ result: "failed", msg: error.message });
    });
});

router.post("/disable_user", async (req, res) => {
  const doc = await user.find();
  const data = doc.map((admin) => {
    return admin.uid;
  });
  if (!data.includes(req.body.adminUid)) {
    return res.json({ result: "failed", msg: "Access Denied!" });
  }
  await admin
    .auth()
    .updateUser(req.body.uid, {
      disabled: true,
    })
    .then(() => {
      return res.json({
        result: "success",
        msg: "Successfully disabled user!",
      });
    })
    .catch((error) => {
      return res.json({ result: "failed", msg: error.message });
    });
});

module.exports = router;
