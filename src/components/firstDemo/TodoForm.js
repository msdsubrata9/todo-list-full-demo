import React, { useState } from "react";

function TodoForm({ addTasks }) {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTasks(inputText.trim());
      setInputText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;
