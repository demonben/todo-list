import React, { useState, useEffect } from "react";
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
  const [status, setStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todoList, status]);

  const filterHandler = () => {
    if (status === "completed") {
      setFilteredTodoList(todoList.filter((item) => item.completed));
    } else if (status === "uncompleted") {
      setFilteredTodoList(todoList.filter((item) => item.completed));
    } else {
      setFilteredTodoList(todoList);
    }
  };
  return (
    <div>
      <Header />
      <Input
        setInputText={setInputText}
        inputText={inputText}
        setTodoList={setTodoList}
        todoList={todoList}
        setStatus={setStatus}
        filterHandler={filterHandler}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
