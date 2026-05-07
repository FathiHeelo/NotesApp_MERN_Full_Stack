    import express from 'express';
    import { getNotes ,createManyNotes ,getNoteById, createNote, putNotes, deleteNotes } from '../src/controllers/notesController.js';
    const router=express.Router();
        router.get("/",getNotes);
        router.get("/:id",getNoteById)
        router.post("/",createNote);
        router.post("/many",createManyNotes);
        router.put("/:id",putNotes);
        router.delete("/:id",deleteNotes);
    export default router;
    // kz81pW6ilikngUZS
    // s12323885_db_user
    //mongodb+srv://s12323885_db_user:kz81pW6ilikngUZS@cluster0.ipszsds.mongodb.net/?appName=Cluster0
