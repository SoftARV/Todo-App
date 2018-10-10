import { CREATE_TODO, CREATE_TASK, TOGGLE_TASK } from "../actions/types";

const initState = {
  todos: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_TODO:
      let nextState = state.todos.push(action.payload);
      return { ...nextState };
    default:
      return state;
  }
}
