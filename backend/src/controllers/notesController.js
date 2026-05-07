import Note from "../../models/Note.js";

async function getNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getNotes controller", error);
    res.status(500).json({ message: error.message });
  }
}
async function createManyNotes(req, res) {
  try {
    const notes = req.body;

    const createdNotes = await Note.insertMany(notes);

    res.status(201).json(createdNotes);
  } catch (error) {
    console.error("Error in createManyNotes", error);

    res.status(500).json({
      message: error.message,
    });
  }
}
async function getNoteById(req, res) {
  try {
    const getNote = await Note.findById(req.params.id);

    if (!getNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json(getNote);
  } catch (error) {
    console.error("Error in getNoteById controller", error);

    res.status(500).json({
      message: error.message,
    });
  }
} 
async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });
    await newNote.save();

    res.status(201).json({
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: error.message });
  }
}

async function putNotes(req, res) {
  try {
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note,
    });
  } catch (error) {
    console.error("Error in putNotes controller", error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteNotes(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      note,
    });
  } catch (error) {
    console.error("Error in deleteNotes controller", error);
    res.status(500).json({ message: error.message });
  }
}

export { getNotes, createManyNotes, getNoteById, createNote, putNotes, deleteNotes };