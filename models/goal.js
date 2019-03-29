const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");

const GoalSchema = new Schema({
  author : { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  budUsername: { type: String, required: true }, //budID is the username of the accountability buddy assigned to the id



});


GoalSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))

module.exports = mongoose.model("Goal", GoalSchema);
