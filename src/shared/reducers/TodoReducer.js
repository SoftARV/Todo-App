import {
  CREATE_TODO,
  RENAME_TODO,
  CREATE_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  REMOVE_TODO
} from "../actions/types";

const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case RENAME_TODO:
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
            : todo
      );
    case CREATE_TASK:
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, tasks: [...todo.tasks, action.payload.task] }
            : todo
      );
    case TOGGLE_TASK:
      return state.map(
        todo =>
          todo.id === action.payload.todoId
            ? {
                ...todo,
                tasks: todo.tasks.map(
                  task =>
                    task.id === action.payload.taskId
                      ? { ...task, isCompleted: !task.isCompleted }
                      : task
                )
              }
            : todo
      );
    case REMOVE_TASK:
      return state.map(
        todo =>
          todo.id === action.payload.todoId
            ? {
                ...todo,
                tasks: todo.tasks.filter(
                  task => task.id !== action.payload.taskId
                )
              }
            : todo
      );
    default:
      return state;
  }
}
