import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Main from "../../components/Main";
import Login from "../Login.js";
import { BrowserRouter } from "react-router-dom";

test("Checking if Layout are wrapping all routes in App.js", () => {
  render(<App />);
  const header = screen.getByText("Gruppe 2");
  const footer = screen.getByText("© 2022 - Gruppe 2");
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

test("Testing if Main component is rendering without issues", () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  const mainElement = screen.getByText("Velkommen til forsiden");
  expect(mainElement).toBeInTheDocument();
});

// Crash Course jeg brukte :D https://www.youtube.com/watch?v=OVNjsIto9xM&t=2318s
// Alle testene skal være mot krav, så vi må teste kravene våre
test("on initial render, you can click the Login button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(loginButton).toBeEnabled();
});

it("Should check if register form button takes user to register user page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  // Prefer using getByTestId or getByRole
  const button = screen.getByRole("button", { name: /Register form/i });
  fireEvent.click(button); // Using fireEvent simulate to click the button

  expect(screen.getByText("Register account")).toBeInTheDocument();
});


// Jobber med...... 
it("Should add user test and log in with it", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  // Prefer using getByTestId or getByRole
  const button = screen.getByRole("button", { name: /Register form/i });
  fireEvent.click(button); // Using fireEvent simulate to click the button

  const registerUserButton = screen.getByRole("button", {
    name: /Register User/i,
  });
  //it should fill input field with a username
  fireEvent.change(screen.getByLabelText(/^username/i), {
    persist: jest.fn(),
    target: { username: "username", value: "test" },
  });
  fireEvent.click(registerUserButton); // Using fireEvent simulate to click the button

  fireEvent.change(screen.getByLabelText(/^username/i), {
    persist: jest.fn(),
    target: { username: "username", value: "test" },
  });
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton); // Using fireEvent simulate to click the button
});
