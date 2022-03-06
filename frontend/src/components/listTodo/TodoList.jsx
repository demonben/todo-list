import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList }) {
  const todoListItems = todoList.map((item) => (
    <TodoItem
      setTodoList={setTodoList}
      todoList={todoList}
      todoItem={item}
      key={item.id}
    />
  ));
  return (
    <div className="todo-container">
      <ul className="todo-list">{todoListItems}</ul>
    </div>
  );
}
