const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Messege = require("../models/messege");

function MessegeRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Messege;
}

MessegeRepository.prototype = new Repository();

module.exports = new MessegeRepository();
