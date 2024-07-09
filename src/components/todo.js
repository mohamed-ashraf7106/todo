import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  return (
    <div className="todos">
      {todos.map((todo) => (
        <h1 className="todo" key={todo.id}>
          {todo.text}
          <button
          id={todo.id}
            onClick={(e) => {
              dispatch(removeTodo(todo.id))
            }}
          >
            delete
          </button>
        </h1>
      ))}
    </div>
  );
}
