const express = require("express");
const router = express.Router();
const noteActions = require("../actions/api/noteActions");

//end pointy

// pobieranie notatek
router.get("/notes", noteActions.getAllNotes);
// pobieranie notatki konkretnej
router.get("/notes/:id", noteActions.getNote); // get do pobierania zasobow z serwera
// zapisywanie notatek
router.post("/notes", noteActions.saveNote); // zapisywanie post
// edytowanie notatek
router.put("/notes/:id", noteActions.updateNote); // edytowanie put
// usuwanie notatek
router.delete("/notes/:id", noteActions.deleteNote); // kasowanie
module.exports = router;
