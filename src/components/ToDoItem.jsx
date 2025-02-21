import React, { useState } from "react";

function ToDoItem(prop) {
  const [it, setIt] = useState(false);
  function handleClick() {
    setIt(!it);
  }
  return (
    <li
      style={{ textDecoration: it ? "line-through" : null }}
      onClick={handleClick}
    >
      {prop.text}
    </li>
  );
}
export default ToDoItem;
