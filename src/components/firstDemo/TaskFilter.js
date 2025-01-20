import React from "react";

function TaskFilter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All Tasks</button>
      <button onClick={() => setFilter("complete")}>Completed Tasks</button>
      <button onClick={() => setFilter("active")}>Active Tasks</button>
    </div>
  );
}

export default TaskFilter;
