// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { generateRandomId } from "../utils/RandId";
//Components
import Login from "../Login.js";

// Krav

it("Checking if render time for Login.js is less than 1 second", () => {
  const timerMillisecondsStart = new Date().getTime();
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const timerMillisecondsEnd = new Date().getTime();
  const timerMilliseconds = timerMillisecondsEnd - timerMillisecondsStart;
  expect(timerMilliseconds).toBeLessThan(1000);
});
  
it("Testing if a unregistred user is trying to log in", async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const username = generateRandomId(); // Generate random username for testing
  const inputUsername = screen.getByTestId("logginUsername");
  const button = screen.getByTestId("loginButton");
  userEvent.type(inputUsername, username);
  expect(button).toBeEnabled();
  fireEvent.click(screen.getByTestId("loginButton")); // Using fireEvent simulate to click the button

  expect(screen.getByTestId("logginUsername")).toHaveValue(username);

  const errorMessage = screen.getByTestId("testNotRegistredMessage");

  expect(errorMessage).toBeInTheDocument(
    username + " is not a registred user!"
  );
});
  
it("In first render, checking if user can click on login button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginButton = screen.getByTestId("loginButton");

  expect(loginButton).toBeEnabled();
});

it("Checking if register form button is taking user to register form page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const button = screen.getByTestId("registerFormButton");
  fireEvent.click(button); // Using fireEvent simulate to click the button

  expect(screen.getByText("Register account")).toBeInTheDocument();
});

it("Checking if inputfield for username exists in Login.js", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const inputUsername = screen.getByTestId("logginUsername");
  expect(inputUsername).toBeInTheDocument();
});
