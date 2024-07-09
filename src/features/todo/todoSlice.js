import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
};
if (localStorage.getItem("todos")) {
  initialState = {
    todos: JSON.parse(localStorage.getItem("todos")),
  };
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
