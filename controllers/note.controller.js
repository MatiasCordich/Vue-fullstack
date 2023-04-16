import { createNote, deleteNoteById, getAllNotes, getNoteById, updateNoteById } from "../services/note.services.js"
import { handleError, handleSuccess } from "../utils/messageRequest.js"

export const getNotes = async (req, res) => {

    const id = req.uid

    try {
        const response = await getAllNotes(id)

        if(response.length === 0) {
          return handleSuccess(res, 200, "THERE_IS_NO_NOTES_YET")
        }

        return handleSuccess(res, 200, "SUCCESS", response)
    } catch (error) {
        return handleError(res, 500, "ERROR_GET_NOTES")
    }
}   

export const getNote = async (req, res) => {
  try {
    const {id} = req.params
    const response = await getNoteById(id)

    if(!response) return handleError(res, 404, "NOTE_NOT_FOUND")

    if (!response.uid.equals(req.uid)) return handleError(res, 401, "NOTE_DOES_NOT_BELONG")

    return handleSuccess(res, 200, "SUCCESS", response)
  } catch (error) {
    if(error.kind === "ObjectId") {
      return handleError(res, 403, "FORMAT_ID_INCORRECT")
    }
    return handleError(res, 500, "ERROR_GET_NOTE")
  }
}

export const postNote = async (req, res) => {
  try {
    const { title, text } = req.body

    const response = await createNote(title, text, req.uid)

    return handleSuccess(res, "NOTE_CREATED", response)
  } catch (error) {
    console.log(error)
    return handleError(res, 500, "ERROR_POST_NOTES")
  }
}

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params
    const noteToUpdate = req.body
    const response = await updateNoteById(id, noteToUpdate)

    if(!response) return handleError(res, 404, "NOTE_NOT_FOUND")

    if (!response.uid.equals(req.uid)) return handleError(res, 401, "NOTE_DOES_NOT_BELONG")

    return handleSuccess(res, 200, "NOTE_UPDATED", response)
  } catch (error) {
    return handleError(res, 500, "ERROR_UPDATE_NOTE")
  }
}

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params

    const response = await deleteNoteById(id)

    if(!response) return handleError(res, 404, "NOTE_NOT_FOUND")

    if (!response.uid.equals(req.uid)) return handleError(res, 401, "NOTE_DOES_NOT_BELONG")

    return handleSuccess(res, 200, "NOTE_DELETED", response)
  } catch (error) {
    return handleError(res, 500, "ERROR_DELETE_NOTE")
  }
}