// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//Components
import App from "../../App";
import AddCar from "../AddCar";
// import Main from "../../components/Main";
// import Login from "../Login.js";



it("Sjekker om AddCar render uten problemer.", () => {
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

  const navAddCar = screen.getByTestId("navAddCar");
  fireEvent.click(navAddCar); // Click on nav element: Registrer bil

  // //Logged in user should be able to see the AddCar component
  const reqLogInText = screen.getByTestId("testAddButton");
  expect(reqLogInText).toBeInTheDocument();
});

// Krav
it("Sjekker om render tid for AddCar.js er 1000ms eller mindre", () => {
  const timerMillisecondsStart = new Date().getTime();
  render(
    <BrowserRouter>
      <AddCar />
    </BrowserRouter>
  );
  const timerMillisecondsEnd = new Date().getTime();
  const timerMilliseconds = timerMillisecondsEnd - timerMillisecondsStart;
  console.log("Render time for AddCar.js: " + timerMilliseconds + " milliseconds");
  expect(timerMilliseconds).toBeLessThan(1000);
});