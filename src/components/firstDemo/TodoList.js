import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";
import TodoFilter from "./TaskFilter";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTasks = (task) => {
    const clonedTasks = [...tasks];
    clonedTasks.push({
      id: Date.now(),
      text: task,
      isComplete: false,
    });
    setTasks(clonedTasks);
  };
  const updateTask = (id, newText) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const toggleTask = (id) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updateTask);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete") return task.isComplete;
    if (filter === "active") return !task.isComplete;
    return true;
  });

  return (
    <div>
      <h1>Todo List Application</h1>
      <TodoForm addTasks={addTasks} />
      <TodoFilter setFilter={setFilter} />
      <TodosList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default TodoList;
