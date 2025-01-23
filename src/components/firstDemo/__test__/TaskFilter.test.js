import { render, screen } from "@testing-library/react";
import TaskFilter from "../TaskFilter";

test("should All the filters buttons be present on UI", () => {
  render(<TaskFilter />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(3);
});
