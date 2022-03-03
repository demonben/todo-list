import React from "react";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./listTodo/TodoList";

export default function TodoPage() {
  const arrTodo = [
    { id: Math.random(), text: 1 },
    { id: Math.random(), text: 2 },
    { id: Math.random(), text: 3 },
  ];

  return (
    <div>
      <Header />
      <Input/>
      <TodoList arrTodo={arrTodo} />;
    </div>
  );
}
