const groupSchema = mongoose.Schema({
  groupID: {
    type: "String",
  },
  groupName: {
    type: "String",
  },
  groupMember: {
    type: "Number",
  },
  groupLimit: {
    type: "Number",
  },
  groupDescription: {
    type: "String",
  },
  groupOwner: {
    type: "String",
  },
  description_profile: {
    type: "String",
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
  uid: {
    type: "String",
    unique: true,
    required: true,
  },
});
