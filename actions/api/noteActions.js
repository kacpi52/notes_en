const Note = require("../../db/models/note");
class NoteActions {
  saveNote(req, res) {
    /*
    const newNote = new Note({
      title: "zrob zakupy 2",
      body: "mleko jajka woda cale te  ",
    });
    newNote.save().then(() => {
      console.log("notatka zostala zapisana ");
    });
*/
    const title = req.body.title;
    const body = req.body.body;
    res.send(
      `notatka zostala stworzona . tytul to ${title} tresc to : ${body}`
    );
  }
  getAllNotes(req, res) {
    //pobieranie notatek
    res.send("api dziala all notes ");
  }
  getNote(req, res) {
    //pobieranie notatki
    res.send("jedna n");
  }
  updateNote(req, res) {
    //edycja notatki
    res.send("edycja");
  }
  deleteNote(req, res) {
    const id = req.params.id;
    //usuwanie notatki
    res.send(`usuniecie notatki o id ${id}`);
  }
}
module.exports = new NoteActions();
