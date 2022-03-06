import React, { useState, useEffect } from "react";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./listTodo/TodoList";

export default function TodoPage() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    getTodoListLocaly();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      if (status === "completed") {
        setFilteredTodoList(todoList.filter((item) => item.completed));
      } else if (status === "uncompleted") {
        setFilteredTodoList(todoList.filter((item) => !item.completed));
      } else {
        setFilteredTodoList(todoList);
      }
    };
    filterHandler();
    saveTodoListLocaly();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoList, status]);

  const saveTodoListLocaly = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };
  const getTodoListLocaly = () => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let todoListLocal = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(todoListLocal);
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
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filteredTodoList={filteredTodoList}
      />
    </div>
  );
}
