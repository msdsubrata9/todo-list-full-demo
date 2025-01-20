import React from "react";
import TodoItem from "./TodoItem";

function TodosList({ tasks, updateTask, deleteTask, toggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TodosList;
