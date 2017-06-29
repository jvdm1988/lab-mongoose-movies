const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const myCelebritySchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
});

const CelebrityModel = mongoose.model("Celebrity", myCelebritySchema);

module.exports = CelebrityModel;
