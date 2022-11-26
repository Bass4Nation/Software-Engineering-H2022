// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { generateRandomId } from "../utils/RandId";
//Components
import Login from "../Login.js";

// Krav
it("Sjekker om render tid for Login.js er 1000ms eller mindre", () => {
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

it("Tester om en uregistrert bruker prøver å logge seg inn", async () => {
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

it("I første render, så kan du klikke på login knappen", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginButton = screen.getByTestId("loginButton");

  expect(loginButton).toBeEnabled();
});

it("Skal sjekke om register form knappen tar brukeren til registrer bruker siden", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const button = screen.getByTestId("registerFormButton");
  fireEvent.click(button); // Using fireEvent simulate to click the button

  expect(screen.getByText("Register account")).toBeInTheDocument();
});

it("Sjekker om inputfelt for brukernavn eksisterer.", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const inputUsername = screen.getByTestId("logginUsername");
  expect(inputUsername).toBeInTheDocument();
});
