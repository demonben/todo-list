import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./listTodo/TodoList";

// const arrTodo = [
//   { id: Math.random(), text: 1 },
//   { id: Math.random(), text: 2 },
//   { id: Math.random(), text: 3 },
// ];

export default function TodoPage() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <Input
        setInputText={setInputText}
        inputText={inputText}
        setTodoList={setTodoList}
        todoList={todoList}
      />
      <TodoList todoList={todoList} />
    </div>
  );
}
