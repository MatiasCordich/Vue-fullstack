import { Note } from "../models/Note.js";

export const getAllNotes = async (id) => {
  const responseNotes = await Note.find({ uid: id });

  return responseNotes;
};

export const getNoteById = async (id) => {
  const responseNote = await Note.findOne({_id: id});

  return responseNote;
};

export const createNote = async (title, text, uid) => {
  const responseCreate = await Note.create({ title, text, uid });

  return responseCreate;
};

export const updateNoteById = async (id, data) => {
  const responseUpdate = await Note.findByIdAndUpdate({_id: id}, data, {new: true})

  return responseUpdate
};

export const deleteNoteById = async (id) => {
  const responseDelete = await Note.findOneAndRemove({_id: id})

  return responseDelete
};
