import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  const todoListItems = todoList.map((item) => (
    <TodoItem todoItem={item} key={item.id} />
  ));
  return (
    <div>
      <ul>{todoListItems}</ul>
    </div>
  );
}
