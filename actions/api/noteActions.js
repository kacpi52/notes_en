const Note = require("../../db/models/note");
class NoteActions {
  saveNote(req, res) {
    const newNote = new Note({
      title: "zrob zakupy 2",
      body: "mleko jajka woda cale te  ",
    });
    newNote.save().then(() => {
      console.log("notatka zostala zapisana ");
    });
    res.send("Serwer działa strona homePage");
  }
  getAllNotes(req, res) {
    //pobieranie notatek
    res.send("api dziala all notes ");
  }
  getNote(req, res) {
    //pobieranie notatki
    res.send("..");
  }
  updateNote(req, res) {
    //edycja notatki
    res.send("..");
  }
  deleteNote(req, res) {
    //usuwanie notatki
    res.send("..");
  }
}
module.exports = new NoteActions();
