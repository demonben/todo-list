import React from "react";
import TodoList from "./listTodo/TodoList";

export default function TodoPage() {
  const arrTodo = [
    { id: Math.random(), text: 1 },
    { id: Math.random(), text: 2 },
    { id: Math.random(), text: 3 },
  ];

  return <TodoList arrTodo={arrTodo} />;
}
