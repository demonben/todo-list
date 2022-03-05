import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, deleteHandler }) {
  const todoListItems = todoList.map((item) => (
    <TodoItem todoItem={item} key={item.id} deleteHandler={deleteHandler} />
  ));
  return (
    <div className="todo-container">
      <ul className="todo-list">{todoListItems}</ul>
    </div>
  );
}
