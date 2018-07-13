const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
