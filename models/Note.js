import {Schema, model} from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    uid: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Note = model('Note', noteSchema)