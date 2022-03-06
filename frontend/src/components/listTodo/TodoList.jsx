import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList, filteredTodoList }) {
  const todoListItems = filteredTodoList.map((item) => (
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
