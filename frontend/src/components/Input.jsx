import React from "react";

export default function Input({
  setInputText,
  inputText,
  setTodoList,
  todoList,
  setStatus,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoItem = (e) => {
    e.preventDefault();
    const todoItemObject = {
      id: Math.random(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, todoItemObject]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoItem} className="todo-button" type="submit">
        <i className="fas fa-plus-square">add</i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
