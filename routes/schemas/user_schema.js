const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: "String",
  },
  register_date: {
    type: "String",
  },
  email: {
    type: "String",
  },
  gender: {
    type: "String",
  },
  birthday: {
    type: "String",
  },
  description_profile: {
    type: "String",
  },
  favor_id: {
    type: "String",
  },
  subscription_id: {
    type: "String",
  },
  provider_id: {
    type: "String",
  },
  profile_picture: {
    type: "String",
  },
  uid: {
    type: "String",
    unique: true,
    required: true,
  },
  successful_profile: {
    type: "Boolean",
  },
  group_id: [String],
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}eatmate-db`
);
const user = connection.model("users", userSchema);
module.exports = user;
