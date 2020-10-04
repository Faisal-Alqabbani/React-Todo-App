import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newText = [...todos, todo];
    setTodos(newText);
  };
  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const updateTodo = (todoId, newText) => {
    if (!newText.text || /^\s*$/.test(newText.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newText : item))
    );
  };

  const removeTodo = (id) => {
    const newTodo = [...todos].filter((todo) => todo.id !== id);
    return setTodos(newTodo);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
