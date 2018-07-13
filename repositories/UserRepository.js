const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");
const Messege = require("../models/messege");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
}

UserRepository.prototype = new Repository();
UserRepository.prototype.getAllChats = getAllChats;

function getAllChats(id, callback) {
  let ids = [];
  Messege
  .find({ $or:[ {'senderId':id}, {'receiverId':id}]}, (err, data) => {
    data.map(messege => {
      if(id === messege.senderId.toString()) {
        ids.push(messege.receiverId);
      } else {
        ids.push(messege.senderId);
      }
    });
  })
  .exec(() => {
    User.find({
      '_id': { $in: ids }
    }, callback);
  })
}

module.exports = new UserRepository();
