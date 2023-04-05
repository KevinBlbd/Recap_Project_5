import { render, screen } from "@testing-library/react";
import Link from "next/link";
import userEvent from "@testing-library/user-event";
import NavigationBar from ".";
import spotLight from ".";

// test("renders text spotlights", () => {
//   render(<NavigationBar />);
//   const link = screen.getAllByRole("link", { name: /see spotlights/i });
//   expect(link).toBeInTheDocument();
// });

test("renders text spotlights", () => {
  render(<NavigationBar />);
  const Link = screen.getByText("see spotlights");
  expect(Link).toBeInTheDocument();
});
