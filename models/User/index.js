"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    min: 3,
    max: 30,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
