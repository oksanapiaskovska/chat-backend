function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.create = create;
Repository.prototype.remove = remove;
Repository.prototype.findByIdAndUpdate = findByIdAndUpdate;

function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne(id);
  query.exec(callback);
}

function create(data, callback) {
  var model = this.model;
  model.create(data, callback);
}

function remove(id, callback) {
  var model = this.model;
  model.findOne({
    _id: id
  }).remove(callback);
}

function findByIdAndUpdate(id, body, options, callback) {
  var model = this.model;
  model.findByIdAndUpdate(id, body, options, callback);
}

module.exports = Repository;
