import React, { useState } from "react";

function TodoItem({ task, updateTask, deleteTask, toggleTask }) {
  const [isEdited, setIsEdited] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdateTodo = () => {
    if (newText.trim()) {
      updateTask(task.id, newText);
      setIsEdited(false);
    }
  };

  return (
    <div>
      {isEdited && (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdateTodo}
        />
      )}
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => toggleTask(task.id)}
      />
      {!isEdited && <span>{task.text}</span>}
      <button onClick={() => setIsEdited(true)}>UPDATE</button>
      <button onClick={() => deleteTask(task.id)}>DELETE</button>
    </div>
  );
}

export default TodoItem;
