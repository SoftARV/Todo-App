import { CREATE_NOTE } from "./types";
import IDGenerator from "../IDGenerator";

export const createNote = (name, color) => {
  const note = {
    id: IDGenerator(),
    type: "note",
    name,
    color,
    date: Date.now(),
    content: ""
  };

  return { type: CREATE_NOTE, payload: note };
};
