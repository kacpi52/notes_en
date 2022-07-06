const express = require("express");
const router = express.Router();
const noteActions = require("../actions/api/noteActions");

//end pointy

// pobieranie notatek
router.get("/notes", noteActions.getAllNotes);
// pobieranie notatki konkretnej
router.get("/notes/:id", noteActions.getNote); // get do pobierania zasobow z serwera
// zapisywanie notatek
router.post("/notes", noteActions.saveNote);
// edytowanie notatek
router.put("/notes", noteActions.updateNote);
// usuwanie notatek
router.delete("/notes", noteActions.deleteNote);
module.exports = router;
