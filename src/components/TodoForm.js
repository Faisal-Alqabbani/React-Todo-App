import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="todo-form">
      {edit ? (
        <>
          {" "}
          <input
            ref={inputRef}
            type="text"
            placeholder="Update your item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input edit"
            autoComplete="off"
          />
          <button className="todo-button edit">Update Todo</button>
        </>
      ) : (
        <>
          {" "}
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input"
            autoComplete="off"
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
