const Note = require("../../db/models/note");
module.exports = {
  saveNote: (req, res) => {
    const newNote = new Note({
      title: "zrob zakupy 2",
      body: "mleko jajka woda cale te  ",
    });
    newNote.save().then(() => {
      console.log("notatka zostala zapisana ");
    });
    res.send("Serwer działa strona homePage");
  },
};
