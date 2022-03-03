import React from "react";

export default function TodoItem({ todoItem }) {
  return (
    <div>
      <li>{todoItem.text}</li>
    </div>
  );
}
