import {
  CREATE_TODO,
  RENAME_TODO,
  CREATE_TASK,
  TOGGLE_TASK
} from "../actions/types";

const initState = {
  todos: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return { todos: [...state.todos, action.payload] };

    case RENAME_TODO:
      return {
        todos: state.todos.map(
          todo =>
            todo.id === action.payload.id
              ? { ...todo, name: action.payload.name }
              : todo
        )
      };
    case CREATE_TASK:
      return {
        todos: state.todos.map(
          todo =>
            todo.id === action.payload.id
              ? { ...todo, tasks: [...todo.tasks, action.payload.task] }
              : todo
        )
      };
    default:
      return state;
  }
}
