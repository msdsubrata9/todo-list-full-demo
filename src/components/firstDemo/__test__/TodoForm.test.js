import { render, screen } from "@testing-library/react";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

test("Should render add button", () => {
  render(<TodoForm />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Should render input box", () => {
  render(<TodoForm />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("should render task list on Add button click", () => {
  render(<TodoForm />);
  const button = screen.getByRole("button");
  button.click();
  render(<TodoItem />);
  const button1 = screen.getByRole("button", { name: "DELETE" });
  expect(button1).toBeInTheDocument();
});
