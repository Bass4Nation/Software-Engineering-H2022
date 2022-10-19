import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login.js";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("© 2022 - Gruppe 22");
  expect(linkElement).toBeInTheDocument();
});

// Crash Course jeg brukte :D https://www.youtube.com/watch?v=OVNjsIto9xM&t=2318s

// Alle testene skal være mot krav, så vi må teste kravene våre 
test("on initial render, you can click the Loing button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  expect(screen.getByRole('button', {name: /login/i})).toBeEnabled
});


