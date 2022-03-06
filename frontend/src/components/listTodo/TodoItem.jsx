import React from "react";

export default function TodoItem({ todoItem, setTodoList, todoList }) {
  const { text, id, completed } = todoItem;
  const deleteHandler = () => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const completeHandler = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">Done</i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">Delete</i>
      </button>
    </div>
  );
}
