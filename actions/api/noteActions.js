const Note = require("../../db/models/note");
class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    let note;
    try {
      note = new Note({
        title, //title:title, to samo co
        body, //body:body jw
      });
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note); // status 201 zapisany
  }
  async getAllNotes(req, res) {
    const doc = await Note.find({});

    res.status(200).json(doc); // set statusu na 200
    //pobieranie notatek
    res.send("api dziala all notes ");
  }
  async getNote(req, res) {
    //pobieranie notatki konkretnej
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    res.status(200).json(note);
    res.send("jedna n");
  }
  async updateNote(req, res) {
    //edycja notatki
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.body = body;
    await note.save();
    res.status(201).json(note);
  }
  async deleteNote(req, res) {
    const id = req.params.id;
    //usuwanie notatki
    await Note.deleteOne({ _id: id });
    res.sendStatus(204); // 204 wszystko wykonane ale nic nie zwracane
  }
}
module.exports = new NoteActions();
