// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//Components
import App from "../../App";
// import Main from "../../components/Main";

// Create a test where it checks if database is empty
it("Sjekker om databasen er tom", () => {
  render(<App />);
  expect(
    screen.getByText("Ingen biler lastet opp i databasen enda")
  ).toBeInTheDocument();
});

// Create a test where it checks if database is not empty

it("Sjekker om Layout er wrappet av alle rutene i App.js", () => {
  render(<App />);
  const header = screen.getByText("Gruppe 2");
  const footer = screen.getByText("© 2022 - Gruppe 2");
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

// Tester krav 1 og 2
it("Render forside -> Login siden -> Registrerer en test bruker -> så forsiden igjen", () => {
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

  //Should be on the frontpage and be logged in
  expect(screen.getByText("Alle biler til utleie")).toBeInTheDocument();
});

// Tester krav 3
it("Test for å registrere en bil og etter sjekker om databasen ikke er tom.", () => {
  render(<App />);

  const navRegistrerBil = screen.getByTestId("navAddCar");
  fireEvent.click(navRegistrerBil); // Click on nav element: Login
  expect(screen.getByText("Lei ut")).toBeInTheDocument(); // Should be on the frontpage and be logged in

  const inputCarName = screen.getByTestId("inputCarName");
  const inputCarBrand = screen.getByTestId("inputCarBrand");
  const inputCarModel = screen.getByTestId("inputCarModel");
  const inputCarYear = screen.getByTestId("inputCarYear");
  const inputCarNumber = screen.getByTestId("inputCarNumber");

  userEvent.type(inputCarName, "Test bil");
  userEvent.type(inputCarBrand, "Test merke");
  userEvent.type(inputCarModel, "Test modell");
  userEvent.type(inputCarYear, "2022");
  userEvent.type(inputCarNumber, "AB12345");

  expect(screen.getByTestId("inputCarName")).toHaveValue("Test bil");
  expect(screen.getByTestId("inputCarBrand")).toHaveValue("Test merke");
  expect(screen.getByTestId("inputCarModel")).toHaveValue("Test modell");
  expect(screen.getByTestId("inputCarYear")).toHaveValue(2022);
  expect(screen.getByTestId("inputCarNumber")).toHaveValue("AB12345");

  fireEvent.click(screen.getByTestId("testAddButton")); // Add car to database

  const selectRegistredCar = screen.getByTestId("selectRegistredCar");
  const inputAvailableTimeStart = screen.getByTestId("inputAvailableTimeStart");
  const inputAvailableTimeEnd = screen.getByTestId("inputAvailableTimeEnd");
  const inputCarRentPrice = screen.getByTestId("inputCarRentPrice");

  fireEvent.change(inputAvailableTimeStart, {
    target: { value: "2022-01-01T18:11" },
  });
  fireEvent.change(inputAvailableTimeEnd, {
    target: { value: "2022-02-02T18:11" },
  });
  userEvent.type(inputCarRentPrice, "1000");
  userEvent.selectOptions(selectRegistredCar, "Test bil");

  expect(screen.getByText("Test bil")).toBeInTheDocument();
  expect(screen.getByTestId("inputAvailableTimeStart")).toHaveValue(
    "2022-01-01T18:11"
  );
  expect(screen.getByTestId("inputAvailableTimeEnd")).toHaveValue(
    "2022-02-02T18:11"
  );
  expect(screen.getByTestId("inputCarRentPrice")).toHaveValue(1000);
  expect(screen.getByTestId("selectRegistredCar")).toBeInTheDocument(
    "Test bil"
  );

  const rentOutButtonTest = screen.getByTestId("rentOutButtonTest");
  fireEvent.click(rentOutButtonTest); // Add car to rent out database
  const timerMillisecondsStart = new Date().getTime();

  const navFrontpage = screen.getByTestId("navMain");
  fireEvent.click(navFrontpage);
  expect(screen.getByText("Alle biler til utleie")).toBeInTheDocument(); // Should be on the frontpage and be logged in
  expect(screen.getByText("Test merke", { exact: false })).toBeTruthy();
  const timerMillisecondsEnd = new Date().getTime();
  const timerMilliseconds = timerMillisecondsEnd - timerMillisecondsStart;
  expect(timerMilliseconds).toBeLessThan(5000);

});

// Krav
it("Sjekker om render tid for App.js er 1000ms eller mindre", () => {
  const timerMillisecondsStart = new Date().getTime();
  render(<App />);
  const timerMillisecondsEnd = new Date().getTime();
  const timerMilliseconds = timerMillisecondsEnd - timerMillisecondsStart;
  expect(timerMilliseconds).toBeLessThan(1000);
});

//it("Registering and logging in as admin", () => {

//});