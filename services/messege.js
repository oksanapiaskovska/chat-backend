const MessegeRepository = require("../repositories/MessegeRepository");

module.exports = {
  findAll: callback => {
    MessegeRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessegeRepository.getById({
      _id: id
    }, (err, data) => {
      callback(err, data);
    });
  },

  create: (messege, callback) => {
    MessegeRepository.create(messege, (err, data) => {
      return callback(err, data);
    });
  },

  remove: (id, callback) => {
    MessegeRepository.remove(id, (err, data) => {
      callback(err, data);
    });
  },

  findByIdAndUpdate: (id, body, options, callback) => {
    MessegeRepository.findByIdAndUpdate(id, body, options, (err, data) => {
      return callback(err, data);
    });
  }
};
