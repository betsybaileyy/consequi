const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");

const GoalSchema = new Schema({
  author : { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  // url: { type: String, required: true },
  summary: { type: String, required: true },
  // category: { type: String, required: true },

  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],

  //budID is the email of the accountability buddy assigned to the id
  budUsername: { type: String, required: true },


});

// Always populate the author field

GoalSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))

module.exports = mongoose.model("Goal", GoalSchema);
