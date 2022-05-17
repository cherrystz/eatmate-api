const mongoose = require("mongoose");
const groupSchema = mongoose.Schema({
  groupName: {
    type: "String",
  },
  groupMember: [String],
  groupLimit: {
    type: "Number",
  },
  groupDescription: {
    type: "String",
  },
  groupOwner: {
    type: "String",
    required: true,
  },
  groupTime: {
    type: "String",
  },
  groupLocation: {
    type: "String",
  },
  groupImage: {
    type: "String",
  },
  groupStatus: {
    type: "Boolean",
  },
  groupType: {
    type: "String",
  },
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}eatmate-db`
);
const group = connection.model("groups", groupSchema);
module.exports = group;
