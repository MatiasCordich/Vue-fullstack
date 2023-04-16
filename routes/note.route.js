import { Router } from "express";
import { deleteNote, getNote, getNotes, postNote, updateNote } from "../controllers/note.controller.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router()

router.get('/', requireToken, getNotes)
router.get('/:id', requireToken, getNote)
router.post('/', requireToken, postNote)
router.patch('/:id', requireToken, updateNote)
router.delete('/:id', requireToken, deleteNote)

export default router