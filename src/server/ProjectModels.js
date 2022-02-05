
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projName: {
    type: String,
    required: true,
  },
  projDesc: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
