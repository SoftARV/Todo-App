import { CREATE_NOTE } from "../actions/types";

const initState = {
  notes: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return { notes: [...state.notes, action.payload] };
    default:
      return state;
  }
}
