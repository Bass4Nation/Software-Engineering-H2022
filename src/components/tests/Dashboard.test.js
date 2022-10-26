// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//Components
import App from "../../App";
// import AddCar from "../AddCar";
// import Main from "../../components/Main";
// import Login from "../Login.js";

it("Check if Dashboard correctly logged in", () => {
  render(<App />);

  const navLogin = screen.getByTestId("navLogin");
  fireEvent.click(navLogin); // Click on nav element: Login

  expect(screen.getByTestId("logginUsername")).toBeInTheDocument();

  const registerFormButton = screen.getByTestId("registerFormButton");
  fireEvent.click(registerFormButton); // Using fireEvent simulate to click the button

  const inputUsernameRegister = screen.getByTestId("registerUsername");
  userEvent.type(inputUsernameRegister, "test@mail.com");
  expect(screen.getByTestId("registerUsername")).toHaveValue("test@mail.com");

  fireEvent.click(screen.getByTestId("registerNewUserButton")); // User should be registered
  fireEvent.click(registerFormButton); // User should be registered

  const inputUsername = screen.getByTestId("logginUsername");
  userEvent.type(inputUsername, "test@mail.com");
  expect(screen.getByTestId("logginUsername")).toHaveValue("test@mail.com");
  fireEvent.click(screen.getByTestId("loginButton")); // User should be logged in

  const navDashboard = screen.getByTestId("navDashboard");
  fireEvent.click(navDashboard); // Click on nav element: Min side

  // //Logged in user should be able to see the Dashboard component
  const reqLogInText = screen.getByText("Velkommen til din profil test@mail.com!");
  expect(reqLogInText).toBeInTheDocument()});

// Hjelp til å lage tester under her
//To use getByTestId you need to add data-testid="whatever Id you want" to the element you want to test
