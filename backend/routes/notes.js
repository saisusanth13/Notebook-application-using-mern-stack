const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const note = await Note.find({ user: req.user.id });
    res.json(note)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Sorry, Some error occured");
  }

})
// add notes using post method
router.post('/addnote', fetchuser, [
  body('title', 'enter a valid title').isLength({ min: 5 }),
  body('description', 'description must be of length 5').isLength({ min: 6 })
], async (req, res) => {
  try {

    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
      title, description, tag, user: req.user.id
    })
    const savedNote = await note.save()
    res.json(savedNote)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Sorry, Some error occured");
  }
})

// route 3 update the xsisiting node
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  try {
  const { title, tag, description } = req.body;
  const newNote = {};
  if (title) { newNote.title = title };
  if (description) { newNote.description = description };
  if (tag) { newNote.tag = tag };

  //find note 
  let note = await Note.findById(req.params.id);
  if (!note) { res.status(404).send("Not found ") }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("not Allowed");
  }

  note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
  res.json({ note });
} catch (error) {
  console.log(error.message)
  res.status(500).send("Sorry, Some error occured");
}

})

//route 4 delete the node 

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
  //find note  to delete
  let note = await Note.findById(req.params.id);
  if (!note) { res.status(404).send("Not found ") }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("not Allowed");
  }

  note = await Note.findByIdAndDelete(req.params.id)
  res.json({ "success":"succes note has been deleted ", "note":{note} });
} catch (error) {
  console.log(error.message)
  res.status(500).send("Sorry, Some error occured");
}
})
module.exports = router