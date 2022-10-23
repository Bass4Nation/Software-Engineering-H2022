// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//Components
import App from "../../App";
import Main from "../../components/Main";
import Login from "../Login.js";

it("Checking if Layout are wrapping all routes in App.js", () => {
  render(<App />);
  const header = screen.getByText("Gruppe 2");
  const footer = screen.getByText("© 2022 - Gruppe 2");
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

it("Testing if Main component is rendering without issues", () => {
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
it("on initial render, you can click the Login button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginButton = screen.getByTestId("loginButton");

  expect(loginButton).toBeEnabled();
});

it("Should check if register form button takes user to register user page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const button = screen.getByTestId("registerFormButton");
  fireEvent.click(button); // Using fireEvent simulate to click the button

  expect(screen.getByText("Register account")).toBeInTheDocument();
});

it("Check if inputfield for username exist", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const inputUsername = screen.getByTestId("logginUsername");
  expect(inputUsername).toBeInTheDocument();
});

it("Render frontpage -> Loginpage -> Register test user -> frontpage", () => {
  render(<App />);

  const navLogin = screen.getByTestId("navLogin");
  fireEvent.click(navLogin); // Click on nav element: Login

  expect(screen.getByTestId("logginUsername")).toBeInTheDocument();

  const registerFormButton = screen.getByTestId("registerFormButton");
  fireEvent.click(registerFormButton); // Using fireEvent simulate to click the button

  const inputUsernameRegister = screen.getByTestId("registerUsername");
  userEvent.type(inputUsernameRegister, "test@mail.com");
  expect(screen.getByTestId("registerUsername")).toHaveValue("test@mail.com");

  // expect(registerUserButton).toBeEnabled();
  fireEvent.click(screen.getByTestId("registerNewUserButton")); // User should be registered
  fireEvent.click(registerFormButton); // User should be registered

  const inputUsername = screen.getByTestId("logginUsername");
  userEvent.type(inputUsername, "test@mail.com");
  expect(screen.getByTestId("logginUsername")).toHaveValue("test@mail.com");
  fireEvent.click(screen.getByTestId("loginButton")); // User should be logged in

  //Should be on the frontpage and be logged in
  expect(screen.getByText("test@mail.com")).toBeInTheDocument();
  expect(screen.getByText("Velkommen til forsiden")).toBeInTheDocument();
});

//To use getByTestId you need to add data-testid="whatever Id you want" to the element you want to test
