const mongoose = require("mongoose");
//walidacja czy nie jest np puste
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
