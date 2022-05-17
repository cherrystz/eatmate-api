const mongoose = require("mongoose");
const notiSchema = mongoose.Schema({
  name: {
    type: "String",
  },
  description: {
    type: "String",
  },
  time: {
    type: "String",
  },
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}eatmate-db`
);
const noti = connection.model("notis", notiSchema);
module.exports = noti;
