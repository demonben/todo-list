import React from "react";

export default function TodoItem({ todoItem, deleteHandler }) {
  return (
    <div className="todo">
      <li className="todo-item">{todoItem.text}</li>
      <button onClick={deleteHandler} className="complete-btn">
        <i className="fas fa-check">Done</i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash">Delete</i>
      </button>
    </div>
  );
}
