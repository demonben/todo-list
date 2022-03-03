import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ arrTodo }) {
  const todoListItems = arrTodo.map((item) => (
    <TodoItem todoItem={item} key={item.id} />
  ));
  return (
    <div>
      <ul>{todoListItems}</ul>
    </div>
  );
}
