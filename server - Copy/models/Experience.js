const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    duration: {
      start: Date,
      end: Date,
    },
    description: String,
    technologies: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
