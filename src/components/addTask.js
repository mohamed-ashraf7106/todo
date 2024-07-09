import React from "react";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
function AddTask() {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (inp === "") {
      return
    }
    dispatch(addTodo(inp));
    setInp("");
  };
  return (
    <div className="taskInp">
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          addTodoHandler(e);
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default AddTask;
