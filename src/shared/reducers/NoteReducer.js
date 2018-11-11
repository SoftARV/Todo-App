import { CREATE_NOTE } from "../actions/types";

const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state.notes, action.payload];
    default:
      return state;
  }
}
