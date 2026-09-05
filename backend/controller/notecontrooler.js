const Note = require("../modules/note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.addNote = async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};