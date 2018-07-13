// підключаємо модуль mongoose
const mongoose = require("mongoose");
var ObjectId = require('mongoose').Schema.ObjectId;

// створюємо 
const messegeSchema = mongoose.Schema({
  senderId: {type: ObjectId, ref: 'User', required: true},
  receiverId: {type: ObjectId, ref: 'User', required: true},
  body: {type: String, required: true}
});

// To use our schema definition, we need to convert our messegeSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
const Messege = mongoose.model("Messege", messegeSchema);

module.exports = Messege;