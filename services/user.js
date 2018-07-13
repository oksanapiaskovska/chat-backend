const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById({
      _id: id
    }, (err, data) => {
      callback(err, data);
    });
  },

  create: (user, callback) => {
    UserRepository.create(user, (err, data) => {
      return callback(err, data);
    });
  },

  remove: (id, callback) => {
    UserRepository.remove(id, (err, data) => {
      callback(err, data);
    });
  },

  findByIdAndUpdate: (id, body, options, callback) => {
    UserRepository.findByIdAndUpdate(id, body, options, (err, data) => {
      return callback(err, data);
    });
  },

  getAllChats: (id, callback) => {
    UserRepository.getAllChats(id, (err, data) => {
      return callback(err, data);
    });
  }
}
