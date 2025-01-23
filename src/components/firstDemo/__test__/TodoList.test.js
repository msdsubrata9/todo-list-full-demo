import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

test("Should load App component", () => {
  render(<TodoList />);
  const heading = screen.getByRole("heading", {
    name: /todo list application/i,
  });
  expect(heading).toBeInTheDocument();
  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
});

test("Should add a task by clicking on the add button when there is a target in placeholder", () => {
  render(<TodoList />);
  const inputBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", { name: "Add Task" });

  fireEvent.change(inputBox, { target: { value: "js" } });
  fireEvent.click(addButton);
  const task = screen.getByText(/js/i);
  expect(task).toBeInTheDocument();
});

test("Should Delete task", () => {
  render(<TodoList />);
  const inputBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", { name: "Add Task" });
  fireEvent.change(inputBox, { target: { value: "JavaScript" } });
  fireEvent.click(addButton);
  const task = screen.getByText("JavaScript");
  expect(task).toBeInTheDocument();
  const deleteButton = screen.getByRole("button", { name: "DELETE" });
  fireEvent.click(deleteButton);
  expect(task).not.toBeInTheDocument();
});

test("Should Toggle task", () => {
  render(<TodoList />);
  const inputBox = screen.getByRole("textbox");
  const addButton = screen.getByRole("button", { name: "Add Task" });
  fireEvent.change(inputBox, { target: { value: "JavaScript" } });
  fireEvent.click(addButton);
  const task = screen.getByText("JavaScript");
  expect(task).toBeInTheDocument();
  const toggleCheckbox = screen.getByRole("checkbox");
  fireEvent.click(toggleCheckbox);
  expect(toggleCheckbox).toBeChecked();
});
test("should filter complete and active task", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Enter Task");
  fireEvent.change(input, { target: { value: "Test Task" } });
  fireEvent.submit(input);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const completeButton = screen.getByRole("button", {
    name: "Completed Tasks",
  });
  fireEvent.click(completeButton);
  let tasks = screen.getAllByTestId("TodoItem");
  expect(tasks.length).toBe(1);

  const activeButton = screen.getByRole("button", { name: "Active Tasks" });
  fireEvent.click(activeButton);
  tasks = screen.queryAllByTestId("TodoItem");
  expect(tasks.length).toBe(0);

  const allButton = screen.getByRole("button", { name: "All Tasks" });
  fireEvent.click(allButton);
  tasks = screen.queryAllByTestId("TodoItem");
  expect(tasks.length).toBe(1);
});
