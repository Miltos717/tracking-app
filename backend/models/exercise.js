const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// ewbewbebwhbw
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});ewe

const Exercise = mongoose.model('Exercise', exerciseSchema); // test

module.exports = Exercise;
