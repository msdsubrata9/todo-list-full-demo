import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";
import { mockData } from "../mocks/TodoItemMock";

test("Should load update button", () => {
  render(<TodoItem />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
});

test("Should delete task by clicking delete button", () => {
  const mockUpdateTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockToggleTask = jest.fn();
  render(
    <TodoItem
      task={mockData}
      updateTask={mockUpdateTask}
      deleteTask={mockDeleteTask}
      toggleTask={mockToggleTask}
    />
  );
  const taskText = screen.getByText("js");
  expect(taskText).toBeInTheDocument();

  const deleteButton = screen.getByRole("button", { name: "DELETE" });
  fireEvent.click(deleteButton);

  expect(mockDeleteTask).toHaveBeenCalledWith(1);
});

test("Should Edit the task", () => {
  const mockUpdateTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockToggleTask = jest.fn();
  render(
    <TodoItem
      task={mockData}
      updateTask={mockUpdateTask}
      deleteTask={mockDeleteTask}
      toggleTask={mockToggleTask}
    />
  );

  const editButton = screen.getByRole("button", { name: "UPDATE" });
  fireEvent.click(editButton);

  const input = screen.getByRole("textbox", { value: "js" });
  fireEvent.change(input, { target: { value: "JavaScript" } });
  fireEvent.blur(input);

  expect(mockUpdateTask).toHaveBeenCalledWith(1, "JavaScript");
});

test("toggle task completion", () => {
  const mockUpdateTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockToggleTask = jest.fn();
  render(
    <TodoItem
      task={mockData}
      updateTask={mockUpdateTask}
      deleteTask={mockDeleteTask}
      toggleTask={mockToggleTask}
    />
  );
  const input = screen.getByRole("checkbox");
  fireEvent.click(input);
  expect(mockToggleTask).toHaveBeenCalledWith(1);
});
