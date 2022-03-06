import React from "react";

export default function TodoItem({ todoItem, setTodoList, todoList }) {
  const { text, id } = todoItem;

  const deleteHandler = () => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };


  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button  className="complete-btn">
        <i className="fas fa-check">Done</i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">Delete</i>
      </button>
    </div>
  );
}
